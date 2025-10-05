"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import supabase from "./supabase";
import { getSettings } from "./data_services";
import { redirect } from "next/navigation";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function updateProfileAction(prevState, formData) {
  const guestId = formData.get("guestId");
  const nationalID = formData.get("nationalID");
  const nationality = formData.get("nationality");

  const { error } = await supabase
    .from("guests")
    .update({ nationalID, nationality })
    .eq("id", guestId);
  if (error) throw new Error(error.message);
  revalidatePath("/account/profile");
}

export async function deleteReservation(bookingId) {
  const session = await auth();
  if (!session) throw new Error("You're not logged in!");

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId)
    .eq("guestId", session.user.guestId);
  if (error) throw new Error(error.message);
  revalidatePath("/account/reservations");
}

export async function updateReservation(formData) {
  const { error } = await supabase
    .from("bookings")
    .update({
      numGuests: formData.get("numGuests"),
      observation: formData.get("observation"),
      hasBreakfast: formData.get("hasBreakfast") === "on",
    })
    .eq("id", formData.get("id"))
    .select();

  if (error) throw new Error(error.message);
  revalidatePath("/account/reservations");
  revalidatePath(`/account/reservations/${formData.get("id")}`);
}

export async function createBooking(bookingData, formData) {
  const settings = await getSettings();
  const extrasPrice = formData.get("hasBreakfast")
    ? settings?.breakfastPrice * bookingData?.numNights
    : 0;
  const booking = {
    ...bookingData,
    numGuests: Number(formData.get("numGuests")),
    hasBreakfast: formData.get("hasBreakfast") === "on",
    observation: formData.get("observation"),
    status: "unconfirmed",
    isPaid: false,
    extrasPrice,
    totalPrice: bookingData?.cabinPrice + extrasPrice,
  };
  const { data, error } = await supabase
    .from("bookings")
    .insert([booking])
    .select();
  if (error)
    throw new Error("Failed to create the new booking!" + error?.message);
  revalidatePath("/account/reservations");
  redirect("/cabins/reservation-success");
}
