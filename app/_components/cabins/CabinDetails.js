import Image from "next/image";
import { TextExpander } from "../TextExpander";
import { HiStar, HiUsers } from "react-icons/hi2";
import { HiEyeOff, HiLocationMarker } from "react-icons/hi";

function CabinDetails({ cabin = {} }) {
  const { image, name, description, maxCapacity, discount, regularPrice } =
    cabin;
  const priceWithDiscount = Math?.floor(
    (cabin?.regularPrice * (100 - cabin?.discount)) / 100
  );

  return (
    <div className="flex border-2 border-primary-800 rounded">
      <div className="relative min-w-96 min-h-[450px] border-r-2 border-primary-800">
        <Image
          src={image}
          fill
          alt={name}
          className="object-cover transition-all duration-300"
        />
      </div>
      <div className="flex flex-col justify-around gap-3 py-5 px-7">
        <h1 className="text-5xl font-bold text-accent-200">Cabin {name}</h1>
        <TextExpander>{description}</TextExpander>
        <div className="flex items-end justify-between">
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
          <div className="flex flex-col">
            <p className="flex gap-2 items-end">
              <span className="text-5xl text-white">${priceWithDiscount}</span>/
              night
            </p>
            {discount > 0 && (
              <span className="flex items-center gap-1 text-accent-400">
                <HiStar className="text-lg" />
                <span className="line-through">${regularPrice}</span> (
                {discount}% off)
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CabinDetails;
