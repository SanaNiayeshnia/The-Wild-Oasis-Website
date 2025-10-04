import CheckInDetails from "@/app/_components/cabins/cabin/checkIn/CheckInDetails";
import { updateReservation } from "@/app/_lib/actions";
import { auth } from "@/app/_lib/auth";
import { getReservation } from "@/app/_lib/data_services";
import Link from "next/link";
import { TbArrowBackUp } from "react-icons/tb";

export const generateMetadata = async ({ params }) => {
  const { reservationId } = await params;
  return { title: `reservation ${reservationId}` };
};

async function Page({ params }) {
  const { reservationId } = await params;
  const booking = await getReservation(reservationId);
  const session = await auth();

  return (
    <form className="space-y-4" action={updateReservation}>
      <input type="hidden" name="id" defaultValue={reservationId} />
      <h1 className="text-accent-400 text-2xl flex items-center gap-2 font-semibold">
        <Link href="/account/reservations">
          <TbArrowBackUp className="hover:text-white text-primary-500 transition-all duration-300 cursor-pointer text-3xl" />
        </Link>
        Edit Reservation #{reservationId} for
        <Link
          href={`/cabins/${booking?.cabins?.id}`}
          className="hover:text-white transition-colors duration-300"
        >
          Cabin {booking?.cabins?.name}
        </Link>
      </h1>
      <CheckInDetails
        reservation={booking}
        cabin={booking?.cabins}
        user={session?.user}
      />
    </form>
  );
}

export default Page;
