"use client";
import { useState } from "react";
import { Calendar } from "react-multi-date-picker";
import styles from "./customeDatePicker.module.scss";

function CustomDatePicker() {
  const [date, setDate] = useState();

  return (
    <div className={`p-3 grid place-items-center  `}>
      <Calendar
        value={date}
        onChange={(value) => setDate(value)}
        range
        className={styles.customDatePicker}
      />
    </div>
  );
}

export default CustomDatePicker;
