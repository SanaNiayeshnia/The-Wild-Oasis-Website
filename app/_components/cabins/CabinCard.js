import Image from "next/image";
import Link from "next/link";
import { HiStar, HiUsers } from "react-icons/hi2";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Skeleton } from "../ui/skeleton";

async function CabinCard({ cabin = {}, isLoading = false }) {
  const priceWithDiscount = Math?.floor(
    (cabin?.regularPrice * (100 - cabin?.discount)) / 100
  );

  return (
    <div className="border-2 border-primary-800 rounded flex">
      <div className="w-30 border-r-2 relative min-h-[146px] border-primary-800 overflow-hidden">
        {isLoading ? (
          <Skeleton className="w-full h-full" />
        ) : (
          <Image
            src={cabin?.image}
            alt={cabin?.name}
            fill
            className="object-cover"
          />
        )}
      </div>
      <div className="flex-grow flex flex-col">
        <div className="py-3 px-4 flex flex-col gap-1 flex-grow">
          {isLoading ? (
            <>
              <Skeleton className="rounded-sm w-28 h-5" />
              <Skeleton className="rounded-sm w-40 h-5" />
            </>
          ) : (
            <>
              <h4 className="text-accent-200 text-xl font-semibold">
                Cabin {cabin?.name}
              </h4>
              <p className="text-sm flex items-center gap-2">
                <HiUsers className="text-primary-500" />
                For up to{" "}
                <span className="text-white">{cabin?.maxCapacity}</span> guests
              </p>
            </>
          )}

          {!isLoading && (
            <div className="flex items-center gap-2 self-end">
              {cabin?.discount > 0 && (
                <span className="flex items-center gap-1 text-sm text-accent-400">
                  <HiStar />
                  <span className="line-through">${cabin?.regularPrice}</span> (
                  {cabin?.discount}% off)
                </span>
              )}
              <p className="flex gap-1 items-center text-sm">
                <span className="text-xl text-white">
                  ${priceWithDiscount || 0}
                </span>
                / night
              </p>
            </div>
          )}
        </div>
        <div
          className={`border-t-2 border-primary-800 flex justify-end  ${
            isLoading ? "p-1.5" : ""
          }`}
        >
          {isLoading ? (
            <Skeleton className="rounded-sm w-32 h-5 " />
          ) : (
            <Link
              href={`cabins/${cabin?.id}`}
              className="border-l-2 border-primary-800 p-2 text-sm flex items-center gap-1 hover:bg-primary-900 transition-all duration-300 hover:gap-3"
            >
              Details &reservation
              <HiOutlineArrowNarrowRight className="text-primary-500" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
