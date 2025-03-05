import { Suspense } from "react";
import CabinList from "../_components/cabins/CabinList";
import Loader from "../_components/Loader";

export const metadata = { title: "Cabins" };
function Page() {
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
      <Suspense
        fallback={
          <div className="flex-grow place-items-center">
            <Loader />
          </div>
        }
      >
        <CabinList />
      </Suspense>
    </div>
  );
}

export default Page;
