import { formatDate } from "@/app/_lib/functions";
import { Skeleton } from "../ui/skeleton";
import moment from "moment";
import Link from "next/link";
import { isPast } from "date-fns";

function ReservationCardHeader({ isLoading = false, reservation = {} }) {
  const { numNights, cabins, startDate, endDate } = reservation;
  const isBookingPast = isPast(new Date(startDate));

  return (
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
  );
}

export default ReservationCardHeader;
