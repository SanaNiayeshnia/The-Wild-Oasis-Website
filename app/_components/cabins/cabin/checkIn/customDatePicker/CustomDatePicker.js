"use client";
import { useState } from "react";
import { Calendar } from "react-multi-date-picker";
import styles from "./customeDatePicker.module.scss";
import { differenceInCalendarDays } from "date-fns";
import toast from "react-hot-toast";
import { HiMiniInformationCircle } from "react-icons/hi2";

function CustomDatePicker({
  minRangeLength = 1,
  maxRangeLength = Infinity,
  range = false,
}) {
  const [value, setValue] = useState([]);

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
      setValue(value);
    } else {
      setValue([]);
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
    <div className={`p-3 grid place-items-center`}>
      <Calendar
        value={value}
        onChange={(value) => (range ? onChange(value) : setValue(value))}
        range={range}
        className={styles.customDatePicker}
        minDate={new Date()}
      />
    </div>
  );
}

export default CustomDatePicker;
