"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const FilterBox = ({ items, filterName = "" }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeFilter = searchParams.get(filterName) || "all";
  const router = useRouter();

  function handleFiltering(value) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", value);
    router.replace(`${pathname}?${params?.toString()}`);
  }

  return (
    <ul className="flex  border-primary-800 rounded-sm  border-2 w-max">
      {items?.map((item, index) => (
        <li
          key={index}
          className={`py-2 px-2.5 grid place-items-center text-center transition-all duration-300 cursor-pointer ${
            activeFilter === item?.value
              ? "bg-primary-800"
              : "hover:text-primary-300"
          }`}
          onClick={() => handleFiltering(item?.value)}
        >
          {item?.label}
        </li>
      ))}
    </ul>
  );
};
