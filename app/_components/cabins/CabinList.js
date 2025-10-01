import { getCabins } from "@/app/_lib/data_services";
import CabinCard from "./CabinCard";

async function CabinList({ capacity = "all", isLoading = false }) {
  const cabins = isLoading ? Array.from({ length: 12 }) : await getCabins();
  if (!isLoading && cabins?.length === 0) return null;

  let filteredCabins;
  if (capacity === "all" || isLoading) {
    filteredCabins = cabins;
  } else if (capacity === "small")
    filteredCabins = cabins.filter(
      (cabin) => cabin?.maxCapacity >= 2 && cabin?.maxCapacity <= 3
    );
  else if (capacity === "medium")
    filteredCabins = cabins?.filter(
      (cabin) => cabin?.maxCapacity >= 4 && cabin?.maxCapacity <= 7
    );
  else if (capacity === "large")
    filteredCabins = cabins?.filter(
      (cabin) => cabin?.maxCapacity >= 8 && cabin?.maxCapacity <= 12
    );

  return (
    <div className="grid grid-cols-3 gap-6 mb-8">
      {filteredCabins?.length > 0 ? (
        filteredCabins?.map((cabin, index) => (
          <CabinCard key={index} cabin={cabin} isLoading={isLoading} />
        ))
      ) : (
        <p className="col-span-3 text-center py-8 text-accent-300">
          There are no cabin available with the selected capacity!
        </p>
      )}
    </div>
  );
}

export default CabinList;
