"use client";
import { useState } from "react";
import DatePicker, { Calendar } from "react-multi-date-picker";

function CustomDatePicker() {
  const [date, setDate] = useState();

  return (
    <div className="p-3 grid place-items-center">
      <Calendar
        value={date}
        onChange={(value) => setDate(value)}
        range
        className="bg-dark"
      />
    </div>
  );
}

export default CustomDatePicker;
