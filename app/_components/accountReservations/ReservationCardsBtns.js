"use client";
import Link from "next/link";
import { PiSpinnerBold } from "react-icons/pi";
import { RiDeleteBin5Fill, RiEdit2Fill } from "react-icons/ri";
import ConfirmationAlert from "../ConfirmationAlert";
import { useTransition } from "react";
import { deleteReservation } from "@/app/_lib/actions";
import { toast } from "sonner";
import { formatDate } from "@/app/_lib/functions";

function ReservationCardsBtns({ bookingId = undefined }) {
  const [isPendingDelete, startDeleteTransition] = useTransition();
  const btnClasses = `py-2 px-3 flex-grow flex shrink-0 items-center justify-center  hover:bg-primary-900 transition-all duration-300 group gap-2`;

  function handleDeleteBooking() {
    startDeleteTransition(async () => {
      const result = await deleteReservation(bookingId);
      if (result?.error) {
        toast.success("Failed to delete the reservation!", {
          description: result?.error,
        });
      } else {
        toast.success("Reservertion deleted successfully.", {
          description: formatDate(
            new Date(),
            "dddd, MMMM DD, YYYY [at] hh:mm A"
          ),
        });
      }
    });
  }

  return (
    <div className="divide-x-2 lg:divide-y-2 flex flex-row-reverse lg:flex-col  justify-center divide-primary-900">
      <Link
        href={`/account/reservations/${bookingId}`}
        className={`${btnClasses} cursor-pointer`}
      >
        <RiEdit2Fill className="group-hover:rotate-[360deg] transition-all duration-300" />
        Edit
      </Link>
      <ConfirmationAlert
        title={`Delete Reservation #${bookingId}`}
        description="This action cannot be undone. This will permanently delete your
            reservation."
        onClick={handleDeleteBooking}
      >
        <button
          className={`${btnClasses} ${
            !isPendingDelete ? "cursor-pointer" : ""
          }`}
          disabled={isPendingDelete}
        >
          {isPendingDelete ? (
            <PiSpinnerBold className="animate-spin text-xl" />
          ) : (
            <RiDeleteBin5Fill className="group-hover:rotate-[360deg] transition-all duration-300" />
          )}
          Delete
        </button>
      </ConfirmationAlert>
    </div>
  );
}

export default ReservationCardsBtns;
