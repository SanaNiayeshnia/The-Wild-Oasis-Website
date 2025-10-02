import { getCabin, getCabins } from "@/app/_lib/data_services";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi2";
import { Suspense } from "react";
import Loader from "@/app/_components/Loader";
import CabinDetails from "@/app/_components/cabins/cabin/CabinDetails";
import CheckIn from "@/app/_components/cabins/cabin/checkIn/CheckIn";

export async function generateMetadata({ params }) {
  const { cabinId } = await params;
  const { name } = await getCabin(cabinId);
  return {
    title: `Cabin ${name}`,
  };
}

// export async function generateStaticParams() {
//   try {
//     const cabins = await getCabins();
//     const staticParams = cabins?.map((cabin) => ({
//       cabinId: String(cabin?.id),
//     }));
//     return staticParams;
//   } catch (err) {
//     console.error("Error in generateStaticParams:", err);
//     return [];
//   }
// }

async function Page({ params }) {
  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);

  return (
    <div className="mt-4 mb-10 grid place-items-center">
      <CabinDetails cabin={cabin} />
      <p className="text-2xl md:text-4xl my-6 md:my-10 [&_svg]:text-xl items-center flex justify-between w-full text-accent-400 font-medium text-center">
        <HiChevronDoubleLeft />
        <div className="flex flex-col gap-2 md:flex-row px-2">
          <span>Reserve {cabin?.name} today,</span>
          <span>Pay on arrival</span>
        </div>
        <HiChevronDoubleRight />
      </p>
      <Suspense fallback={<Loader />}>
        <CheckIn cabin={cabin} />
      </Suspense>
    </div>
  );
}

export default Page;
