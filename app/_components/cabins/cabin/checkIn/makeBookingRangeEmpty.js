"use client";
import useReservationContext from "@/app/_contexts/reservationContext/useReservationContext";
import { useEffect } from "react";

function MakeBookingRangeEmpty() {
  const { setBookingRange } = useReservationContext();
  useEffect(() => {
    setBookingRange([]);
  }, [setBookingRange]);
  return null;
}

export default MakeBookingRangeEmpty;
