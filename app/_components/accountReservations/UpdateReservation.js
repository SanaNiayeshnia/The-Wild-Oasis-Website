"use client";
import { useState } from "react";
import CheckInDetails from "../cabins/cabin/checkIn/CheckInDetails";

function UpdateReservation({ booking = {}, user = {} }) {
  const [hasBreakfast, setHasBreakfast] = useState(booking?.hasBreakfast);
  return (
    <CheckInDetails
      reservation={booking}
      cabin={booking?.cabins}
      user={user}
      hasBreakfast={hasBreakfast}
      setHasBreakfast={setHasBreakfast}
    />
  );
}

export default UpdateReservation;
