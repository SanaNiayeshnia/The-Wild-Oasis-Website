import { getUsersReservations } from "@/app/_lib/data_services";
import ReservationCard from "./ReservationCard";
import EmptyMessage from "../EmptyMessage";
import { TbBuildingCottage } from "react-icons/tb";
import Button from "../Button";

export const revalidate = 3600;

async function ReservationList({ isLoading = false }) {
  const bookings = isLoading
    ? Array.from({ length: 10 })
    : await getUsersReservations();

  return (
    <div
      className={`flex flex-col gap-4 ${
        bookings?.length > 0 ? "pr-4 lg:pr-8" : ""
      }`}
    >
      {!isLoading && bookings?.length === 0 ? (
        <div className="grid place-items-center  h-[75vh] place-content-center">
          <EmptyMessage
            title="No Reservation Found"
            description="Start with choosing a cabin."
            iconComponent={<TbBuildingCottage />}
          >
            <Button href="/cabins" size="small">
              Explore Cabins
            </Button>
          </EmptyMessage>
        </div>
      ) : (
        bookings?.map((booking, index) => (
          <ReservationCard
            key={index}
            booking={booking}
            isLoading={isLoading}
          />
        ))
      )}
    </div>
  );
}

export default ReservationList;
