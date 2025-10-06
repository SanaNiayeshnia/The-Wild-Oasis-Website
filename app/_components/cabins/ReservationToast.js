"use client";
import useReservationContext from "@/app/_contexts/reservationContext/useReservationContext";
import { formatBookingRange } from "@/app/_lib/functions";
import { format, isSameDay } from "date-fns";
import Link from "next/link";
import { RiCloseCircleFill } from "react-icons/ri";

function ReservationToast() {
  const { bookingRange, setBookingRange, bookingCabin } =
    useReservationContext();

  return bookingRange.length > 0 ? (
    <div className="bg-accent-500 text-stone-800 py-4 px-8 rounded-2xl fixed bottom-5 max-w-90 right-2 md:right-5 shadow-xl">
      <RiCloseCircleFill
        className="absolute top-1 text-2xl right-1 hover:scale-120 cursor-pointer duration-300 transition-all"
        onClick={() => setBookingRange([])}
      />
      <Link
        href={`/cabins/${bookingCabin}`}
        className="cursor-pointer hover: text-justify transition-all duration-300"
      >
        Complete your reservation {formatBookingRange(bookingRange)}
      </Link>
    </div>
  ) : (
    <></>
  );
}

export default ReservationToast;
