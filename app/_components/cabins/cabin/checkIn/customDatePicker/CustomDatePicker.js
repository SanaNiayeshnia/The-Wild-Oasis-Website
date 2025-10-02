"use client";
import { Calendar } from "react-multi-date-picker";
import styles from "./customeDatePicker.module.scss";
import { differenceInCalendarDays } from "date-fns";
import toast from "react-hot-toast";
import { HiMiniInformationCircle } from "react-icons/hi2";
import useReservationContext from "@/app/_contexts/reservationContext/useReservationContext";
import { useEffect } from "react";

function CustomDatePicker({
  minRangeLength = 1,
  maxRangeLength = Infinity,
  cabinId = null,
}) {
  const { bookingRange, setBookingRange, setBookingCabin } =
    useReservationContext();

  function onChange(value) {
    const rangeLength = differenceInCalendarDays(value?.[1], value?.[0]);
    console.log(
      value,
      minRangeLength,
      maxRangeLength,
      rangeLength >= minRangeLength && rangeLength <= maxRangeLength,
      rangeLength
    );
    if (
      (value.length === 2 &&
        rangeLength >= minRangeLength &&
        rangeLength <= maxRangeLength) ||
      value.length === 1
    ) {
      setBookingRange(value);
      setBookingCabin(cabinId);
    } else {
      setBookingRange([]);
      toast(
        `You should select between ${minRangeLength} to ${maxRangeLength} days.`,
        {
          icon: (
            <HiMiniInformationCircle className="text-2xl text-accent-700" />
          ),
        }
      );
    }
  }
  return (
    <div className={`p-3 grid place-items-center relative`}>
      <Calendar
        value={bookingRange}
        onChange={(value) => onChange(value)}
        range
        className={`${styles.customDatePicker} !z-0`}
        minDate={new Date()}
      />
    </div>
  );
}

export default CustomDatePicker;
