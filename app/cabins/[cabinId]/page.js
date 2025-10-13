import {
  getBookedDatesByCabinId,
  getCabin,
  getSettings,
} from "@/app/_lib/data_services";
import CabinDetails from "@/app/_components/cabins/cabin/CabinDetails";
import CheckIn from "@/app/_components/cabins/cabin/checkIn/CheckIn";
import { auth } from "@/app/_lib/auth";
import { TbChevronsLeft, TbChevronsRight } from "react-icons/tb";

export async function generateMetadata({ params }) {
  const { cabinId } = await params;
  const { name } = await getCabin(cabinId);
  return {
    title: `Cabin ${name}`,
  };
}

async function CabinPage({ params }) {
  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);
  const [session, settings, bookedDates] = await Promise.all([
    auth(),
    getSettings(),
    getBookedDatesByCabinId(cabin?.id),
  ]);

  return (
    <div className="mt-4 mb-10 grid place-items-center">
      <CabinDetails cabin={cabin} />
      <p className="text-2xl md:text-4xl my-6 md:my-10 [&_svg]:text-2xl md:[&_svg]:text-3xl items-center flex justify-center w-full text-accent-400 font-medium text-center">
        <TbChevronsLeft />
        <div className="flex flex-col gap-2 sm:flex-row px-2">
          <span>Reserve {cabin?.name} today,</span>
          <span>Pay on arrival</span>
        </div>
        <TbChevronsRight />
      </p>
      <CheckIn
        cabin={cabin}
        user={session?.user}
        settings={settings}
        bookedDates={bookedDates}
      />
    </div>
  );
}

export default CabinPage;
