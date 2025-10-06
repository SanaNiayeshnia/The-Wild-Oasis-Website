"use client";
import { HiX } from "react-icons/hi";
import CheckInDetails from "./CheckInDetails";
import CustomDatePicker from "./customDatePicker/CustomDatePicker";
import useReservationContext from "@/app/_contexts/reservationContext/useReservationContext";
import { differenceInCalendarDays, isSameDay } from "date-fns";
import { useState } from "react";

function CheckIn({ cabin = {}, settings = {}, bookedDates = [], user = {} }) {
  const { minBookingLength, maxBookingLength } = settings;
  const priceWithDiscount = cabin.regularPrice - cabin?.discount;
  const { bookingRange, setBookingRange } = useReservationContext();
  const [hasBreakfast, setHasBreakfast] = useState(false);
  const bookingNumNights =
    isSameDay(bookingRange?.[0], bookingRange?.[1]) ||
    bookingRange?.length === 1
      ? 1
      : differenceInCalendarDays(bookingRange?.[1], bookingRange?.[0]) || 0;

  const breakfastPrice = hasBreakfast
    ? bookingNumNights * settings?.breakfastPrice
    : 0;
  const totalPrice = priceWithDiscount * bookingNumNights + breakfastPrice;

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
        <div className="flex items-center flex-wrap py-1.5 px-3 justify-between gap-4 bg-accent-500 text-stone-800">
          <div className="flex items-center gap-2 ">
            <div className="flex items-center gap-2">
              <p className="flex items-end gap-2">
                <span className="text-xl font-semibold">
                  ${priceWithDiscount?.toLocaleString()}
                </span>
                {cabin?.discount > 0 && (
                  <span className="line-through">
                    ${cabin?.regularPrice?.toLocaleString()}
                  </span>
                )}
                <span>/night</span>
              </p>
              {bookingNumNights > 0 && (
                <p p className="bg-accent-600 flex items-center p-1.5">
                  <HiX className="text-sm" /> {bookingNumNights}
                </p>
              )}
            </div>
            {hasBreakfast && bookingNumNights > 0 && (
              <p>+ ${breakfastPrice} for breakfast</p>
            )}
          </div>

          <div className="flex items-center gap-2">
            {bookingRange?.length > 0 && (
              <button
                onClick={() => setBookingRange([])}
                className="border-1 hover:bg-accent-600 transition-all duration-300 border-accent-900 p-1 rounded-sm"
              >
                Clear
              </button>
            )}

            <p className="font-semibold text-xl">
              Total ${totalPrice.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <CheckInDetails
        cabin={cabin}
        user={user}
        hasBreakfast={hasBreakfast}
        setHasBreakfast={setHasBreakfast}
      />
    </div>
  );
}

export default CheckIn;
