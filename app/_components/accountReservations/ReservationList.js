import { getUsersReservations } from "@/app/_lib/data_services";
import ReservationCard from "./ReservationCard";
import Link from "next/link";

export const revalidate = 3600;

async function ReservationList({ isLoading = false }) {
  const bookings = isLoading
    ? Array.from({ length: 10 })
    : await getUsersReservations();

  return (
    <div
      className={`flex flex-col gap-4 ${
        bookings?.length > 0 ? "pr-4 lg:pr-8" : ""
      }`}
    >
      {!isLoading && bookings?.length === 0 ? (
        <div className="grid place-items-center h-[75vh] place-content-center">
          <p> You haven't made any reservation yet. </p>

          <Link
            href="/cabins"
            className="text-accent-400 transition-all duration-300 hover:text-accent-500 text-lg font-bold"
          >
            Click to start with choosing a cabin
          </Link>
        </div>
      ) : (
        bookings?.map((booking, index) => (
          <ReservationCard
            key={index}
            booking={booking}
            isLoading={isLoading}
          />
        ))
      )}
    </div>
  );
}

export default ReservationList;
