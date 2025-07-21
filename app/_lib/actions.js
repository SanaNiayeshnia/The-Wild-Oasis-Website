"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import supabase from "./supabase";

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
    .eq("id", bookingId);
  if (error) throw new Error(error.message);
  revalidatePath("/account/reservations");
}
