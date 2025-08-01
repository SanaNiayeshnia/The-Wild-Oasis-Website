import CheckInDetails from "@/app/_components/cabins/cabin/checkIn/CheckInDetails";
import { auth } from "@/app/_lib/auth";
import { getReservation } from "@/app/_lib/data_services";

export const generateMetadata = async ({ params }) => {
  const { reservationId } = await params;
  return { title: `reservation ${reservationId}` };
};

async function page({ params }) {
  const { reservationId } = await params;
  const booking = await getReservation(reservationId);
  const session = await auth();
  console.log(booking);

  return (
    <form className="space-y-4">
      <h1 className="text-accent-400 text-2xl font-semibold">
        Edit Reservation #{reservationId}
      </h1>
      <CheckInDetails
        reservation={booking}
        cabin={booking?.cabins}
        user={session?.user}
      />
    </form>
  );
}

export default page;
