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

export async function updateReservation({ bookingId, ...data }) {
  console.log(data);
  const settings = await getSettings();
  const extrasPrice = data.hasBreakfast
    ? settings?.breakfastPrice * data?.numNights
    : 0;

  const { error } = await supabase
    .from("bookings")
    .update({
      ...data,
      numGuests: Number(data.numGuests),
      hasBreakfast: Boolean(data.hasBreakfast),
      extrasPrice,
      totalPrice: data?.cabinPrice + extrasPrice,
    })
    .eq("id", bookingId)
    .select();

  if (error) throw new Error(error.message);
  revalidatePath("/account/reservations");
  revalidatePath(`/account/reservations/${bookingId}`);
}

export async function createBooking(data) {
  const settings = await getSettings();
  const extrasPrice = data?.hasBreakfast
    ? settings?.breakfastPrice * data?.numNights
    : 0;

  const { data: booking, error } = await supabase
    .from("bookings")
    .insert([
      {
        ...data,
        numGuests: Number(data?.numGuests),
        hasBreakfast: data?.hasBreakfast === "on",
        status: "unconfirmed",
        isPaid: false,
        extrasPrice,
        totalPrice: data?.cabinPrice + extrasPrice,
      },
    ])
    .select()
    .single();
  if (error)
    throw new Error("Failed to create the new booking!" + error?.message);
  revalidatePath("/account/reservations");
  redirect(`/cabins/reservation-success?reservationId=${booking?.id}`);
}
