"use client";
import { HiX } from "react-icons/hi";
import CheckInDetails from "./CheckInDetails";
import CustomDatePicker from "./customDatePicker/CustomDatePicker";
import useReservationContext from "@/app/_contexts/reservationContext/useReservationContext";
import { differenceInCalendarDays, isSameDay } from "date-fns";

function CheckIn({ cabin = {}, settings = {}, bookedDates = [], user = {} }) {
  const { minBookingLength, maxBookingLength, maxGuestsPerBooking } = settings;
  const priceWithDiscount = cabin.regularPrice - cabin?.discount;
  const { bookingRange } = useReservationContext();
  const bookingNumNights =
    isSameDay(bookingRange?.[0], bookingRange?.[1]) ||
    bookingRange?.length === 1
      ? 1
      : differenceInCalendarDays(bookingRange?.[1], bookingRange?.[0]) || 0;

  return (
    <div className="flex flex-col md:flex-row min-h-80 border-2 border-primary-800 w-full">
      <div className="flex flex-col md:w-1/2 justify-between">
        <CustomDatePicker
          minRangeLength={minBookingLength}
          maxRangeLength={maxBookingLength}
          cabinId={cabin?.id}
          key={cabin?.id}
          bookedDates={bookedDates}
        />
        <div className="flex items-center py-1.5 px-3 justify-between gap-4 bg-accent-500 text-stone-800">
          <div className="flex items-center gap-4">
            <p className="flex items-end gap-2">
              <span className="text-xl font-semibold">
                ${priceWithDiscount?.toLocaleString()}
              </span>
              <span className="line-through">
                ${cabin?.regularPrice?.toLocaleString()}
              </span>
              <span>/night</span>
            </p>

            <p p className="bg-accent-600 flex items-center p-1.5">
              <HiX className="text-sm" /> {bookingNumNights}
            </p>
          </div>

          <p className="font-semibold text-xl">
            Total ${(priceWithDiscount * bookingNumNights).toLocaleString()}
          </p>
        </div>
      </div>

      <CheckInDetails cabin={cabin} user={user} />
    </div>
  );
}

export default CheckIn;
