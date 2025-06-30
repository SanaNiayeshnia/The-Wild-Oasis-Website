import { notFound } from "next/navigation";
import supabase from "./supabase";

export async function getCabins() {
  const { data: cabins, error } = await supabase
    .from("cabins")
    .select("*")
    .order("name");
  if (error) {
    throw new Error("Couldn't fetch cabins", error);
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
