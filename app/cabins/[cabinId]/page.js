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

export async function generateStaticParams() {
  try {
    const cabins = await getCabins();
    const staticParams = cabins?.map((cabin) => ({
      cabinId: String(cabin?.id),
    }));
    return staticParams;
  } catch (err) {
    console.error("Error in generateStaticParams:", err);
    return [];
  }
}

async function Page({ params }) {
  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);

  return (
    <div className="mt-4 mb-10 grid place-items-center">
      <CabinDetails cabin={cabin} />
      <p className="text-4xl my-10 [&_svg]:text-xl items-center flex justify-center text-accent-400 font-medium ">
        <HiChevronDoubleLeft />
        Reserve {cabin?.name} today. Pay on arrival
        <HiChevronDoubleRight />
      </p>
      <Suspense fallback={<Loader />}>
        <CheckIn cabin={cabin} />
      </Suspense>
    </div>
  );
}

export default Page;
