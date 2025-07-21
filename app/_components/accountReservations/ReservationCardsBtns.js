"use client";
import { deleteReservation } from "@/app/_lib/actions";
import { useTransition } from "react";
import { PiSpinnerBold } from "react-icons/pi";
import { RiDeleteBin5Fill, RiEdit2Fill } from "react-icons/ri";

function ReservationCardsBtns({ bookingId = undefined }) {
  const [isPendingDelete, startDeleteTransition] = useTransition();

  function handleDeleteBooking() {
    if (confirm("Are you sure you want to delete this booking?"))
      startDeleteTransition(() => deleteReservation(bookingId));
  }

  const btnClasses = `py-2 px-3 flex-grow flex items-center justify-center  hover:bg-primary-900 transition-all duration-300 group gap-2`;

  return (
    <div className=" divide-y-2 flex flex-col min-w-30 justify-center divide-primary-900">
      <button className={`${btnClasses} cursor-pointer`}>
        <RiEdit2Fill className="group-hover:rotate-[360deg] transition-all duration-300" />
        Edit
      </button>
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
