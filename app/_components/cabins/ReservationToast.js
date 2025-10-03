"use client";
import useReservationContext from "@/app/_contexts/reservationContext/useReservationContext";
import { format } from "date-fns";
import Link from "next/link";
import { RiCloseCircleFill } from "react-icons/ri";

function ReservationToast() {
  const { bookingRange, setBookingRange, bookingCabin } =
    useReservationContext();
  const [from, to] = bookingRange;
  const today = new Date();
  const formattedFrom = format(from ? new Date(from) : today, "MMMM dd, yyyy");
  const formattedTo = format(to ? new Date(to) : today, "MMMM dd, yyyy");
  return bookingRange.length == 2 ? (
    <div className="bg-accent-500 text-stone-800 py-4 px-8 rounded-2xl fixed bottom-5 max-w-90 right-2 md:right-5 shadow-xl">
      <RiCloseCircleFill
        className="absolute top-1 text-2xl right-1 hover:scale-120 cursor-pointer duration-300 transition-all"
        onClick={() => setBookingRange([])}
      />
      <Link
        href={`/cabins/${bookingCabin}`}
        className="cursor-pointer hover: text-justify transition-all duration-300"
      >
        Complete your reservation from {formattedFrom} to {formattedTo}{" "}
      </Link>
    </div>
  ) : (
    <></>
  );
}

export default ReservationToast;
