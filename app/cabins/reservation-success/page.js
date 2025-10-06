import Button from "@/app/_components/Button";
import MakeBookingRangeEmpty from "@/app/_components/cabins/cabin/checkIn/makeBookingRangeEmpty";
import EmptyMessage from "@/app/_components/EmptyMessage";
import { getReservation } from "@/app/_lib/data_services";
import { formatBookingRange } from "@/app/_lib/functions";
import { BsFillCalendarCheckFill } from "react-icons/bs";

export default async function Page({ searchParams }) {
  const reservationId = await searchParams.reservationId;
  const booking = await getReservation(reservationId);

  return (
    <div className="grid place-items-center -mt-16 flex-grow">
      <MakeBookingRangeEmpty />
      <EmptyMessage
        iconComponent={<BsFillCalendarCheckFill />}
        title="Successful Reservation"
        description={`You've successfully reserved Cabin ${
          booking?.cabins?.name
        } ${formatBookingRange([
          booking?.startDate,
          booking?.endDate,
        ])}. Visit reservations page for more details.`}
      >
        <Button size="small" href="/account/reservations">
          Go to reservations
        </Button>
      </EmptyMessage>
    </div>
  );
}
