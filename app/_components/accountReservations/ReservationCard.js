import { formatDate } from "@/app/_lib/functions";
import Image from "next/image";
import Link from "next/link";
import ReservationCardsBtns from "./ReservationCardsBtns";
import moment from "moment";

function ReservationCard({ booking = {} }) {
  const {
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
    <div className="flex border-primary-900  border-2 divide-x-2 divide-primary-900 rounded-sm">
      <Link
        href={`/cabins/${cabins?.id}`}
        className="w-32 aspect-square relative group overflow-hidden"
      >
        <Image
          src={cabins?.image}
          alt={cabins?.name}
          className="object-cover group-hover:scale-120 transition-all duration-300"
          placeholder="empty"
          fill
        />
      </Link>

      <div className=" flex flex-col flex-grow  justify-between py-2 px-3 min-w-[550px] ">
        <div className="space-y-1">
          <div className="flex justify-between items-center">
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
          </div>
          <p className="text-primary-200">
            {formatDate(startDate, "ddd, MMM D YYYY")} (
            {moment(new Date(startDate)).fromNow()}) -{" "}
            {formatDate(endDate, "ddd, MMM D YYYY")}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <p className="">
            <span className="text-accent-400 text-lg">${totalPrice}</span>
            {"  "}•{"  "}
            <span className="text-primary-200">{numGuests} guests</span>
          </p>
          <p className="text-primary-200 text-sm">
            Booked at {formatDate(created_at, "MMM D, YYYY")}
          </p>
        </div>
      </div>
      <ReservationCardsBtns />
    </div>
  );
}

export default ReservationCard;
