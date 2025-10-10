import { notFound } from "next/navigation";
import supabase from "./supabase";
import { auth } from "./auth";
import { eachDayOfInterval } from "date-fns";

export async function getCabins(capacity = "all") {
  const { data: cabins, error } =
    capacity === "all"
      ? await supabase.from("cabins").select("*").order("name")
      : await supabase
          .from("cabins")
          .select("*")
          .order("name")
          .gte(
            "maxCapacity",
            capacity === "small"
              ? 2
              : capacity === "medium"
              ? 4
              : capacity === "large"
              ? 8
              : ""
          )
          .lte(
            "maxCapacity",
            capacity === "small"
              ? 3
              : capacity === "medium"
              ? 7
              : capacity === "large"
              ? 12
              : ""
          );
  if (error) {
    throw new Error("Couldn't fetch cabins", error.message);
  }
  return cabins;
}

export async function getCabin(id) {
  const { data: cabin, error } = await supabase
    .from("cabins")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    notFound();
  }
  return cabin;
}

export async function getCountries() {
  try {
    const res = await fetch(
      "https://restcountries.com/v2/all?fields=name,flag"
    );
    return res.json();
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

export async function getSettings() {
  const { data: settings, error } = await supabase
    .from("settings")
    .select("*")
    .single();
  if (error) {
    throw new Error("Couldn't fetch settings", error);
  }
  return settings;
}

export async function getBookedDatesByCabinId(cabinId) {
  let today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  today = today.toISOString();

  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .eq("cabinId", cabinId);
  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  // Converting to actual dates to be displayed in the date picker
  const bookedDates = data
    .map((booking) => {
      return eachDayOfInterval({
        start: new Date(booking.startDate),
        end: new Date(booking.endDate),
      });
    })
    .flat();

  return bookedDates;
}

export async function getGuest(email) {
  const { data: guest, error } = await supabase
    .from("guests")
    .select("*")
    .eq("email", email)
    .maybeSingle();
  if (error) {
    console.error("Error fetching guest:", error);
    return null;
  }
  return guest;
}

export async function createAGuest({ email, fullName }) {
  await supabase.from("guests").insert([{ email, fullName }]);
}

export async function getUsersReservations() {
  const session = await auth();
  let { data: bookings, error } = await supabase
    .from("bookings")
    .select("*, cabins(*), guests(*)")
    .eq("guestId", session?.user?.guestId)
    .order("created_at", { ascending: false });
  if (error) throw new Error(error.message);
  return bookings;
}

export async function getReservation(reservationId) {
  let { data: booking, error } = await supabase
    .from("bookings")
    .select("*, cabins(*), guests(*)")
    .eq("id", reservationId)
    .single();

  if (error) notFound();
  return booking;
}
