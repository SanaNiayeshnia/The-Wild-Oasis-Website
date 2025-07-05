import { getCabin, getCabins } from "@/app/_lib/data_services";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi2";
import { Suspense } from "react";
import CheckIn from "@/app/_components/cabins/CheckIn/CheckIn";
import CabinDetails from "@/app/_components/cabins/CabinDetails";
import Loader from "@/app/_components/Loader";

export async function generateMetadata({ params }) {
  const { name } = await getCabin(params?.cabinId);
  return {
    title: `Cabin ${name}`,
  };
}

export async function generateStaticParams() {
  const cabins = await getCabins();
  const staticParams = cabins?.map((cabin) => ({
    cabinId: String(cabin?.id),
  }));
  return staticParams;
}

async function Page({ params }) {
  const cabin = await getCabin(params?.cabinId);

  return (
    <div className="mt-4 mb-10">
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
