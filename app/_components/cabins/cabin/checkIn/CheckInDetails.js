"use client";
import FormField from "@/app/_components/accountProfile/FormField";
import { SelectBox } from "@/app/_components/accountProfile/SelectBox";
import Button from "@/app/_components/Button";
import useReservationContext from "@/app/_contexts/reservationContext/useReservationContext";
import Link from "next/link";
import { PiSpinnerBold } from "react-icons/pi";

function CheckInDetails({
  isEditSession = false,
  cabin = {},
  user = null,
  register = () => {},
  isSubmitting = false,
  bookingRange = [],
  breakfastPrice = 0,
}) {
  const { maxCapacity } = cabin;
  return (
    <div className="flex flex-col flex-grow bg-primary-900">
      {user ? (
        <>
          <p className="bg-primary-800 py-2 px-4 sm:px-6 lg:px-10 w-full text-primary-200">
            {isEditSession ? "Reserved by" : "Logged in as"}{" "}
            <span className="text-accent-200">{user?.name}</span>
          </p>
          <div className="flex justify-between flex-grow flex-col gap-3 py-5 px-4 sm:px-6 lg:px-10">
            <div className="flex flex-col gap-3">
              <SelectBox
                label="How many guests?"
                {...register("numGuests", { valueAsNumber: true })}
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
              />
              <FormField
                label="Anything we should know about your stay?"
                type="textarea"
                placeholder="Any pets, allergies, special requirments, etc?"
                {...register("observation")}
              />
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  {...register("hasBreakfast")}
                  id="hasBreakfast"
                  className="accent-accent-500  border-none w-4 h-4"
                />
                <label htmlFor="hasBreakfast">
                  Include breakfast (${breakfastPrice} per person per day)
                </label>
              </div>
            </div>

            <div className="mt-3 self-end flex items-center gap-4">
              {!isEditSession && bookingRange?.length === 0 && (
                <p>Start by picking dates</p>
              )}
              <Button
                size="small"
                type="submit"
                disabled={!isEditSession && bookingRange?.length === 0}
              >
                {isSubmitting && (
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
    </div>
  );
}

export default CheckInDetails;
