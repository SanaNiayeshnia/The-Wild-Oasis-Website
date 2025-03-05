import supabase from "./supabase";
import { getPlaiceholder } from "plaiceholder";

export async function getBlurImage(imageURL) {
  const res = await fetch(imageURL);
  const buffer = await res.arrayBuffer();

  const { base64 } = await getPlaiceholder(Buffer.from(buffer));
  return base64;
}

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
  if (error) throw new Error("Couldn't fetch the cabin", error);
  return cabin;
}
