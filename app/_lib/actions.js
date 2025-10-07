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
  const { error } = await supabase
    .from("bookings")
    .update(data)
    .eq("id", bookingId)
    .select();

  if (error) throw new Error(error.message);
  revalidatePath("/account/reservations");
  revalidatePath(`/account/reservations/${bookingId}`);
}

export async function createBooking(data) {
  console.log(data);
  const { data: booking, error } = await supabase
    .from("bookings")
    .insert([data])
    .select()
    .single();
  if (error)
    throw new Error("Failed to create the new booking!" + error?.message);
  revalidatePath("/account/reservations");
  redirect(`/cabins/reservation-success?reservationId=${booking?.id}`);
}
