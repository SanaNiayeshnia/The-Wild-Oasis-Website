"use client";
import { deleteReservation } from "@/app/_lib/actions";
import Link from "next/link";
import { useTransition } from "react";
import { PiSpinnerBold } from "react-icons/pi";
import { RiDeleteBin5Fill, RiEdit2Fill } from "react-icons/ri";

function ReservationCardsBtns({ bookingId = undefined }) {
  const [isPendingDelete, startDeleteTransition] = useTransition();

  function handleDeleteBooking() {
    if (confirm("Are you sure you want to delete this booking?"))
      startDeleteTransition(() => deleteReservation(bookingId));
  }

  const btnClasses = `py-2 px-3 flex-grow flex shrink-0 items-center justify-center  hover:bg-primary-900 transition-all duration-300 group gap-2`;

  return (
    <div className="divide-x-2 lg:divide-y-2 flex lg:flex-col  justify-center divide-primary-900">
      <Link
        href={`/account/reservations/${bookingId}`}
        className={`${btnClasses} cursor-pointer`}
      >
        <RiEdit2Fill className="group-hover:rotate-[360deg] transition-all duration-300" />
        Edit
      </Link>
      <button
        className={`${btnClasses} ${!isPendingDelete ? "cursor-pointer" : ""}`}
        onClick={handleDeleteBooking}
        disabled={isPendingDelete}
      >
        {isPendingDelete ? (
          <PiSpinnerBold className="animate-spin text-xl" />
        ) : (
          <RiDeleteBin5Fill className="group-hover:rotate-[360deg] transition-all duration-300" />
        )}
        Delete
      </button>
    </div>
  );
}

export default ReservationCardsBtns;
