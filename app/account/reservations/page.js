import ReservationCard from "@/app/_components/accountReservations/ReservationCard";
import { getUsersReservations } from "@/app/_lib/data_services";

export const metadata = {
  title: "Reservations",
};

async function Page() {
  const bookings = await getUsersReservations();

  return (
    <div className="flex flex-col gap-4 pr-8">
      {bookings?.map((booking, index) => (
        <ReservationCard key={index} booking={booking} />
      ))}
    </div>
  );
}

export default Page;
