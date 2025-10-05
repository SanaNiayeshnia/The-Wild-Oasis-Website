"use client";
import { Calendar } from "react-multi-date-picker";
import styles from "./customeDatePicker.module.scss";
import { differenceInCalendarDays, isSameDay } from "date-fns";
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
    const numNights = differenceInCalendarDays(value?.[1], value?.[0]);

    if (
      (value.length === 2 &&
        numNights >= minRangeLength &&
        numNights <= maxRangeLength) ||
      value.length === 1 ||
      isSameDay(value?.[0], value?.[1])
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
