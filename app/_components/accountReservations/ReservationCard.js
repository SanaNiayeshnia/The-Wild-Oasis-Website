import { formatDate } from "@/app/_lib/functions";
import Image from "next/image";
import Link from "next/link";
import ReservationCardsBtns from "./ReservationCardsBtns";
import { Skeleton } from "../ui/skeleton";
import ReservationCardHeader from "./ReservationCardHeader";
import { isPast } from "date-fns";

function ReservationCard({ booking = {}, isLoading = false }) {
  const { id, cabins, numGuests, totalPrice, created_at, status, startDate } =
    booking;
  const isBookingPast = isPast(new Date(startDate));

  return (
    <div className="flex flex-col lg:flex-row border-primary-900  border-2 divide-y-2 lg:divide-x-2 divide-primary-900 overflow-hidden rounded-sm">
      {isLoading ? (
        <Skeleton className="lg:w-32 h-30 lg:h-full aspect-square relative group overflow-hidden shrink-0" />
      ) : (
        <Link
          href={`/cabins/${cabins?.id}`}
          className="lg:w-32 h-30 lg:h-full aspect-square relative group overflow-hidden shrink-0"
        >
          <Image
            src={cabins?.image}
            alt={cabins?.name}
            className="object-cover group-hover:scale-120 transition-all duration-300"
            placeholder="empty"
            fill
          />
        </Link>
      )}

      <div className=" flex flex-col flex-grow gap-2 justify-between py-2 px-3 xl:min-w-[550px] ">
        <ReservationCardHeader isLoading={isLoading} reservation={booking} />

        <div className="flex justify-between gap-2 items-center">
          {isLoading ? (
            <>
              <Skeleton className="h-6 w-40 rounded-sm" />
              <Skeleton className="h-5 w-40 rounded-sm" />
            </>
          ) : (
            <>
              <p>
                <span className="text-accent-400 text-lg">
                  ${totalPrice?.toLocaleString()}
                </span>
                {"  "}•{"  "}
                <span className="text-primary-200">{numGuests} guests</span>
              </p>
              <p className="text-primary-200 text-sm">
                Booked at {formatDate(created_at, "MMM D, YYYY")}
              </p>
            </>
          )}
        </div>
      </div>
      {!isLoading && !isBookingPast && status === "unconfirmed" && (
        <ReservationCardsBtns bookingId={id} />
      )}
    </div>
  );
}

export default ReservationCard;
