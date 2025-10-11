import ReservationList from "@/app/_components/accountReservations/ReservationList";
import { Suspense } from "react";

export const metadata = {
  title: "Reservations",
};

async function ReservationsPage() {
  return (
    <div className="min-h-[70vh]">
      <h1 className="text-accent-400 text-xl sm:text-2xl font-semibold mb-4">
        Your Reservations
      </h1>
      <Suspense fallback={<ReservationList isLoading />}>
        <ReservationList />
      </Suspense>
    </div>
  );
}

export default ReservationsPage;
