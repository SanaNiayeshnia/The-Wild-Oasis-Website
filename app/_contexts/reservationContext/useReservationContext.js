"use client";
import { useContext } from "react";
import { reservationContext } from "./ReservationContextProvider";

function useReservationContext() {
  const state = useContext(reservationContext);
  return state;
}

export default useReservationContext;
