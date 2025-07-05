"use client";
import { createContext, useState } from "react";
export const reservationContext = createContext();

export default function ReservationContextProvider({ children }) {
  const [bookingRange, setBookingRange] = useState([]);
  const [bookingCabin, setBookingCabin] = useState(null);
  const value = {
    bookingRange,
    setBookingRange,
    bookingCabin,
    setBookingCabin,
  };
  return (
    <reservationContext.Provider value={value}>
      {children}
    </reservationContext.Provider>
  );
}
