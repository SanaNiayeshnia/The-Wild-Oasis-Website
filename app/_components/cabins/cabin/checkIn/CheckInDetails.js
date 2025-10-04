"use client";
import FormField from "@/app/_components/accountProfile/FormField";
import { SelectBox } from "@/app/_components/accountProfile/SelectBox";
import Button from "@/app/_components/Button";
import useReservationContext from "@/app/_contexts/reservationContext/useReservationContext";
import Link from "next/link";
import { useFormStatus } from "react-dom";
import { PiSpinnerBold } from "react-icons/pi";

function CheckInDetails({ reservation, cabin = {}, user = null }) {
  const isEditSession = Boolean(reservation?.id);
  const { maxCapacity } = cabin;
  const { pending } = useFormStatus();
  const { bookingRange } = useReservationContext();

  return (
    <div className="flex flex-col flex-grow bg-primary-900">
      {user ? (
        <>
          {" "}
          <p className="bg-primary-800 py-2 px-4 sm:px-6 lg:px-10 w-full text-primary-200">
            {isEditSession ? "Reserved by" : "Logged in as"} {user?.name}
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
            <div className="mt-3 self-end flex items-center gap-4">
              {!isEditSession && bookingRange?.length === 0 && (
                <p>Start by picking dates</p>
              )}
              <Button size="small" type="submit">
                {pending && <PiSpinnerBold className="animate-spin text-xl" />}
                {isEditSession ? "Update" : "Reserve now"}
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div className="grid place-items-center min-h-40 h-full">
          <p className="text-justify">
            Please{" "}
            <Link href="/login" className="text-accent-400 underline">
              log in
            </Link>{" "}
            to reserve this cabin right now.
          </p>
        </div>
      )}
    </div>
  );
}

export default CheckInDetails;
