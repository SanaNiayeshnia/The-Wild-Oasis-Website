import { HiX } from "react-icons/hi";
import CheckInDetails from "./CheckInDetails";
import CustomDatePicker from "./customDatePicker/CustomDatePicker";
import { getBookedDatesByCabinId, getSettings } from "@/app/_lib/data_services";
import { auth } from "@/app/_lib/auth";

async function CheckIn({ cabin = {} }) {
  const [session, settings, bookedDates] = await Promise.all([
    auth(),
    getSettings(),
    getBookedDatesByCabinId(cabin?.id),
  ]);

  const { minBookingLength, maxBookingLength, maxGuestsPerBooking } = settings;
  console.log(minBookingLength, maxBookingLength);

  const priceWithDiscount = cabin.regularPrice - cabin?.discount;

  return (
    <form className="flex flex-col md:flex-row min-h-80 border-2 border-primary-800 w-full">
      <div className="flex flex-col md:w-1/2 justify-between">
        <CustomDatePicker
          minRangeLength={minBookingLength}
          maxRangeLength={maxBookingLength}
          cabinId={cabin?.id}
          key={cabin?.id}
          bookedDates={bookedDates}
        />
        <div className="flex items-center py-1.5 px-3 justify-between gap-4 bg-accent-500 text-stone-800">
          <div className="flex items-center gap-4">
            <p className="flex items-end gap-2">
              <span className="text-xl font-semibold">
                ${priceWithDiscount}
              </span>
              <span className="line-through">${cabin?.regularPrice}</span>
              <span>/night</span>
            </p>

            <p p className="bg-accent-600 flex items-center p-1.5">
              <HiX className="text-sm" /> 23
            </p>
          </div>

          <p className="font-semibold text-xl">
            Total ${(priceWithDiscount * 23).toLocaleString()}
          </p>
        </div>
      </div>

      <CheckInDetails cabin={cabin} user={session?.user} />
    </form>
  );
}

export default CheckIn;
