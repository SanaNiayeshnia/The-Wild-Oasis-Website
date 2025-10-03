import ReservationList from "@/app/_components/accountReservations/ReservationList";
import { Suspense } from "react";

export const metadata = {
  title: "Reservations",
};

async function Page() {
  return (
    <>
      <Suspense fallback={<ReservationList isLoading />}>
        <ReservationList />
      </Suspense>
    </>
  );
}

export default Page;
