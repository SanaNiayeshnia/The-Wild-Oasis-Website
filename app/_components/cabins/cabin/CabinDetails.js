import Image from "next/image";
import { HiStar, HiUsers } from "react-icons/hi2";
import { HiEyeOff, HiLocationMarker } from "react-icons/hi";
import { TextExpander } from "../../TextExpander";

function CabinDetails({ cabin = {} }) {
  const { image, name, description, maxCapacity, discount, regularPrice } =
    cabin;
  const priceWithDiscount = cabin?.regularPrice - cabin?.discount;
  const discountPercent = Math.floor(
    (cabin?.discount / cabin?.regularPrice) * 100
  );

  return (
    <div className="flex flex-col divide-y-2 md:divide-0 divide-primary-800 md:grid grid-cols-12 border-2 border-primary-800 rounded">
      <div className="relative col-span-12 min-h-96 md:col-span-5 md:border-r-2 border-primary-800">
        <Image
          src={image}
          fill
          alt={name}
          className="object-cover transition-all duration-300"
        />
      </div>
      <div className="flex flex-col justify-around gap-3 py-5 col-span-12 md:col-span-7 px-3 md:px-7">
        <h1 className="text-3xl md:text-5xl font-bold text-accent-200">
          Cabin {name}
        </h1>
        <TextExpander>{description}</TextExpander>
        <div className="flex sm:items-end gap-6 sm:gap-4 justify-between flex-col sm:flex-row">
          <div className="flex flex-col gap-1.5 [&_span]:text-white [&_svg]:text-lg [&_svg]:text-primary-500">
            <p className="flex items-center gap-2 ">
              <HiUsers />
              For up to <span>{maxCapacity}</span> guests
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
          <div className="flex flex-col self-end sm:self-auto">
            <p className="flex gap-2 items-end">
              <span className="text-3xl md:text-5xl text-white">
                ${priceWithDiscount?.toLocaleString()}
              </span>
              / night
            </p>
            {discount > 0 && (
              <span className="flex items-center gap-1 text-accent-400">
                <HiStar className="text-lg" />
                <span className="line-through">
                  ${regularPrice?.toLocaleString()}
                </span>{" "}
                ({discountPercent}% off)
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CabinDetails;
