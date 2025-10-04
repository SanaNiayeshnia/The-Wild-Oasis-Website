import { formatDate } from "@/app/_lib/functions";
import Image from "next/image";
import Link from "next/link";
import ReservationCardsBtns from "./ReservationCardsBtns";
import moment from "moment";
import { Skeleton } from "../ui/skeleton";

function ReservationCard({ booking = {}, isLoading = false }) {
  const {
    id,
    cabins,
    guests,
    numGuests,
    numNights,
    totalPrice,
    created_at,
    status,
    startDate,
    endDate,
  } = booking;

  const isBookingPast = new Date(startDate) < new Date();
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
        <div className="space-y-1.5">
          <div className="flex justify-between gap-2 items-center">
            {isLoading ? (
              <>
                <Skeleton className="w-48 h-7 rounded-sm" />
                <Skeleton className="w-30 h-7 rounded-sm" />
              </>
            ) : (
              <>
                <p className="font-semibold text-lg">
                  {numNights} nights in{" "}
                  <Link
                    href={`/cabins/${cabins?.id}`}
                    className="hover:text-accent-400 transition-all duration-300"
                  >
                    Cabin {cabins?.name}
                  </Link>
                </p>
                <p
                  className={`rounded-xs  py-0.5 px-2 ${
                    isBookingPast ? "bg-accent-700" : "bg-green-700"
                  }`}
                >
                  {isBookingPast ? "past" : "upcomming"}
                </p>
              </>
            )}
          </div>
          {isLoading ? (
            <Skeleton className="h-6 w-6/10 rounded-sm" />
          ) : (
            <p className="text-primary-200">
              {formatDate(startDate, "ddd, MMM D YYYY")} (
              {moment(new Date(startDate)).fromNow()}) -{" "}
              {formatDate(endDate, "ddd, MMM D YYYY")}
            </p>
          )}
        </div>

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
