import { HiX } from "react-icons/hi";
import CheckInDetails from "./CheckInDetails";
import CustomDatePicker from "./customDatePicker/CustomDatePicker";

function CheckIn() {
  return (
    <form className="flex min-h-80 border-2 border-primary-800 w-full">
      <div className="flex flex-col w-1/2 justify-between">
        <CustomDatePicker />
        <div className="flex items-center py-1.5 px-3 justify-between gap-4 bg-accent-500 text-stone-800">
          <div className="flex items-center gap-4">
            <p className="flex items-end gap-2">
              <span className="text-xl font-semibold">$5</span>
              <span className="line-through">$43</span>
              <span>/night</span>
            </p>

            <p p className="bg-accent-600 flex items-center p-1.5">
              <HiX className="text-sm" /> 23
            </p>
          </div>

          <p className="font-semibold text-xl">Total $465</p>
        </div>
      </div>
      <CheckInDetails />
    </form>
  );
}

export default CheckIn;
