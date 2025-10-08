import ReservationCardHeader from "@/app/_components/accountReservations/ReservationCardHeader";
import CheckIn from "@/app/_components/cabins/cabin/checkIn/CheckIn";
import { auth } from "@/app/_lib/auth";
import { getReservation, getSettings } from "@/app/_lib/data_services";
import Link from "next/link";
import { TbArrowBackUp } from "react-icons/tb";

export const generateMetadata = async ({ params }) => {
  const { reservationId } = await params;
  return { title: `reservation ${reservationId}` };
};

async function ReservationPage({ params }) {
  const { reservationId } = await params;
  const [session, booking, settings] = await Promise.all([
    auth(),
    getReservation(reservationId),
    getSettings(),
  ]);

  return (
    <div className="space-y-4">
      <input type="hidden" name="id" defaultValue={reservationId} />
      <h1 className="text-accent-400 text-xl sm:text-2xl flex items-center gap-2 font-semibold">
        <Link href="/account/reservations">
          <TbArrowBackUp className="hover:text-white text-primary-500 transition-all duration-300 cursor-pointer text-3xl" />
        </Link>
        <p>Edit Reservation #{reservationId}</p>
      </h1>
      <ReservationCardHeader reservation={booking} />
      <CheckIn
        reservation={booking}
        user={session?.user}
        cabin={booking?.cabins}
        settings={settings}
      />
    </div>
  );
}

export default ReservationPage;
