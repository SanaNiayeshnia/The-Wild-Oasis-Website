import { getCabins } from "@/app/_lib/data_services";
import CabinCard from "./CabinCard";

async function CabinList({ capacity = "all", isLoading = false }) {
  const cabins = isLoading
    ? Array.from({ length: 12 })
    : await getCabins(capacity);
  if (!isLoading && cabins?.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
      {cabins?.length > 0 ? (
        cabins?.map((cabin, index) => (
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
