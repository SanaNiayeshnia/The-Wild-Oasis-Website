import ReservationList from "@/app/_components/accountReservations/ReservationList";
import { Suspense } from "react";

export const metadata = {
  title: "Reservations",
};

async function Page() {
  return (
    <div div>
      <h1 className="text-accent-400 text-xl sm:text-2xl font-semibold mb-4">
        Your Reservations
      </h1>
      <Suspense fallback={<ReservationList isLoading />}>
        <ReservationList />
      </Suspense>
    </div>
  );
}

export default Page;
