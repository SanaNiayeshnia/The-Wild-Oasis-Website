import { getCabins } from "@/app/_lib/data_services";
import CabinCard from "./CabinCard";

async function CabinList() {
  const cabins = await getCabins();
  console.log(cabins);

  return (
    <div className="grid grid-cols-3 gap-6 mb-8">
      {cabins?.map((cabin, index) => (
        <CabinCard key={index} cabin={cabin} />
      ))}
    </div>
  );
}

export default CabinList;
