"use client";
import { Calendar } from "react-multi-date-picker";
import styles from "./customeDatePicker.module.scss";
import {
  differenceInCalendarDays,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import toast from "react-hot-toast";
import { HiMiniInformationCircle } from "react-icons/hi2";
import useReservationContext from "@/app/_contexts/reservationContext/useReservationContext";

function CustomDatePicker({
  minRangeLength = 1,
  maxRangeLength = Infinity,
  cabinId = null,
  bookedDates = [],
}) {
  const { bookingRange, setBookingRange, setBookingCabin } =
    useReservationContext();

  function onChange(value) {
    const numNights = isSameDay(value?.[0], value?.[1])
      ? 1
      : differenceInCalendarDays(value?.[1], value?.[0]) || 0;
    const isRangeBooked = bookedDates?.some((bookedDate) =>
      isWithinInterval(bookedDate, { start: value?.[0], end: value?.[1] })
    );

    if (isRangeBooked) {
      setBookingRange([]);
      toast(`You can't choose a date range that includes booked dates!`, {
        icon: (
          <HiMiniInformationCircle className="text-2xl shrink-0 text-accent-700" />
        ),
      });
    } else if (
      value?.length === 2 &&
      (numNights < minRangeLength || numNights > maxRangeLength)
    ) {
      setBookingRange([]);
      toast(
        `You should select between ${minRangeLength} to ${maxRangeLength} days.`,
        {
          icon: (
            <HiMiniInformationCircle className="text-2xl shrink-0 text-accent-700" />
          ),
        }
      );
    } else {
      setBookingRange(value);
      setBookingCabin(cabinId);
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
        mapDays={({ date }) => {
          const disabled = bookedDates.some((bookedDate) =>
            isSameDay(bookedDate, date)
          );
          return { disabled };
        }}
      />
    </div>
  );
}

export default CustomDatePicker;
