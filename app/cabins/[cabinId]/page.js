import { TextExpander } from "@/app/_components/TextExpander";
import { getCabin, getCabins } from "@/app/_lib/data_services";
import Image from "next/image";
import { HiEyeOff, HiLocationMarker } from "react-icons/hi";
import {
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
  HiStar,
  HiUsers,
} from "react-icons/hi2";

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

async function page({ params }) {
  const cabin = await getCabin(params?.cabinId);
  console.log(cabin);
  const priceWithDiscount = Math?.floor(
    (cabin?.regularPrice * (100 - cabin?.discount)) / 100
  );

  return (
    <div className="mt-4">
      <div className="flex border-2 border-primary-800 rounded">
        <div className="relative min-w-96 min-h-[450px] border-r-2 border-primary-800">
          <Image
            src={cabin?.image}
            fill
            alt={cabin?.name}
            className="object-cover transition-all duration-300"
          />
        </div>
        <div className="flex flex-col justify-around gap-3 py-5 px-7">
          <h1 className="text-5xl font-bold text-accent-200">
            Cabin {cabin?.name}
          </h1>
          <TextExpander>{cabin?.description}</TextExpander>
          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-1.5 [&_span]:text-white [&_svg]:text-lg [&_svg]:text-primary-500">
              <p className="flex items-center gap-2 ">
                <HiUsers />
                For up to <span>{cabin?.maxCapacity}</span> guests
              </p>
              <p className="flex items-center gap-2 ">
                <HiLocationMarker />
                Located in the heart of the <span>Dolomites (Italy)</span>
              </p>
              <p className="flex items-center gap-2 ">
                <HiEyeOff />
                Privacy <span>100%</span> guaranteed
              </p>
            </div>
            <div className="flex flex-col">
              <p className="flex gap-2 items-end">
                <span className="text-5xl text-white">
                  ${priceWithDiscount}
                </span>
                / night
              </p>
              {cabin?.discount > 0 && (
                <span className="flex items-center gap-1 text-accent-400">
                  <HiStar className="text-lg" />
                  <span className="line-through">${cabin?.regularPrice}</span> (
                  {cabin?.discount}% off)
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <p className="text-4xl mt-10 [&_svg]:text-xl items-center flex justify-center text-accent-400 font-medium ">
        <HiChevronDoubleLeft />
        Reserve today. Pay on arrival
        <HiChevronDoubleRight />
      </p>
    </div>
  );
}

export default page;
