"use client";
import FormField from "@/app/_components/accountProfile/FormField";
import { SelectBox } from "@/app/_components/accountProfile/SelectBox";
import Button from "@/app/_components/Button";
import useReservationContext from "@/app/_contexts/reservationContext/useReservationContext";
import { createBooking, updateReservation } from "@/app/_lib/actions";
import { differenceInCalendarDays, isSameDay } from "date-fns";
import Link from "next/link";
import { useActionState } from "react";
import { PiSpinnerBold } from "react-icons/pi";

function CheckInDetails({ reservation, cabin = {}, user = null }) {
  const isEditSession = Boolean(reservation?.id);
  const { maxCapacity } = cabin;
  const { bookingRange, setBookingRange } = useReservationContext();

  const bookingNumNights = isEditSession
    ? differenceInCalendarDays(reservation?.endDate, reservation?.startDate) ||
      1
    : isSameDay(bookingRange?.[0], bookingRange?.[1]) ||
      bookingRange?.length === 1
    ? 1
    : differenceInCalendarDays(bookingRange?.[1], bookingRange?.[0]);

  const priceWithDiscount = cabin?.regularPrice - cabin?.discount;

  const [state, action, isPending] = useActionState(
    async (prevState, formData) => {
      setBookingRange([]);
      if (isEditSession) await updateReservation(prevState, formData);
      else await createBooking(prevState, formData);
    },
    {
      cabinId: cabin?.id,
      guestId: user?.guestId,
      startDate: new Date(bookingRange?.[0]),
      endDate: new Date(bookingRange?.[1]),
      cabinPrice: priceWithDiscount * bookingNumNights,
      numNights: bookingNumNights,
    }
  );

  return (
    <form action={action} className="flex flex-col flex-grow bg-primary-900">
      {user ? (
        <>
          {" "}
          <p className="bg-primary-800 py-2 px-4 sm:px-6 lg:px-10 w-full text-primary-200">
            {isEditSession ? "Reserved by" : "Logged in as"}{" "}
            <span className="text-accent-200">{user?.name}</span>
          </p>
          <div className="flex flex-col gap-3 py-5 px-4 sm:px-6 lg:px-10">
            <SelectBox
              label="How many guests?"
              name="numGuests"
              defaultValue={reservation?.numGuests || ""}
              options={[
                {
                  label: "Select number of guests...",
                  value: 0,
                  disabled: true,
                },
                ...Array.from({ length: maxCapacity }).map((item, index) => ({
                  label: `${index + 1} guests`,
                  value: index + 1,
                })),
              ]}
              key={`numGuests-${reservation?.numGuests || ""}`}
            />
            <FormField
              label="Anything we should know about your stay?"
              type="textarea"
              placeholder="Any pets, allergies, special requirments, etc?"
              defaultValue={reservation?.observation}
              name="observation"
            />
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="hasBreakfast"
                id="hasBreakfast"
                defaultChecked={reservation?.hasBreakfast}
                className="accent-accent-500  border-none w-4 h-4"
              />
              <label htmlFor="hasBreakfast">Include breakfast</label>
            </div>
            {isEditSession && (
              <input type="hidden" name="bookingId" value={reservation?.id} />
            )}

            <div className="mt-3 self-end flex items-center gap-4">
              {!isEditSession && bookingRange?.length === 0 && (
                <p>Start by picking dates</p>
              )}
              <Button
                size="small"
                type="submit"
                disabled={!isEditSession && bookingRange?.length === 0}
              >
                {isPending && (
                  <PiSpinnerBold className="animate-spin text-xl" />
                )}
                {isEditSession ? "Update" : "Reserve now"}
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div className="grid  place-items-center min-h-40 h-full">
          <p className="text-justify">
            Please{" "}
            <Link href="/login" className="text-accent-400 underline">
              log in
            </Link>{" "}
            to reserve this cabin right now.
          </p>
        </div>
      )}
    </form>
  );
}

export default CheckInDetails;
