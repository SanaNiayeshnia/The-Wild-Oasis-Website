import CabinCard from "../_components/cabins/CabinCard";
import { getCabins } from "../_lib/data_services";

export const metadata = { title: "Cabins" };
async function Page() {
  const cabins = await getCabins();
  console.log(cabins);

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
      <div className="grid grid-cols-3 gap-6 mb-8">
        {cabins?.map((cabin, index) => (
          <CabinCard key={index} cabin={cabin} />
        ))}
      </div>
    </div>
  );
}

export default Page;
