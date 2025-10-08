import { Suspense } from "react";
import CabinList from "../_components/cabins/CabinList";
import Loader from "../_components/Loader";
import { FilterBox } from "../_components/FilterBox";
import * as React from "react";
import ReservationToast from "../_components/cabins/ReservationToast";

export const metadata = { title: "Cabins" };
export const revalidate = 3600;
const filterByCapacity = [
  { label: "all", value: "all" },
  { label: "2-3 guests", value: "small" },
  { label: "4-7 guests", value: "medium" },
  { label: "8-12 guests", value: "large" },
];

function CabinsPage({ searchParams }) {
  const { capacity } = React.use(searchParams) ?? "all";
  return (
    <div className="flex flex-col gap-8">
      <div className="mt-4">
        <h1 className="text-2xl text-accent-400 font-bold">
          Our Luxury Cabins
        </h1>
        <p className="mt-2 text-justify">
          Cozy yet luxurious cabins, located right in the heart of the Italian
          Dolomites. Imagine waking up to beautiful mountain views, spending
          your days exploring the dark forests around, or just relaxing in your
          private hot tub under the stars. Enjoy nature's beauty in your own
          little home away from home. The perfect spot for a peaceful, calm
          vacation. Welcome to paradise.
        </p>
      </div>
      <div className="flex justify-center md:justify-end">
        <FilterBox items={filterByCapacity} filterName="capacity" />
      </div>
      <Suspense fallback={<CabinList isLoading />} key={capacity}>
        <CabinList capacity={capacity} />
      </Suspense>
      <ReservationToast />
    </div>
  );
}

export default CabinsPage;
