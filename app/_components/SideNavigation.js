"use client";
import Link from "next/link";
import { PiSignOutBold } from "react-icons/pi";
import { signOutAction } from "../_lib/actions";
import { usePathname } from "next/navigation";

function SideNavigation({ items = [] }) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="flex flex-col py-6 pl-2  pr-4  min-w-48 justify-between gap-2 border-r-2 border-primary-900 ">
      <ul className="flex flex-col gap-1 ">
        {items?.map((item, index) => (
          <li key={index}>
            <Link
              href={item?.link}
              className={`flex items-center gap-3 [&_svg]:text-xl py-2 px-2 rounded-md    transition-all duration-300 ${
                pathname === item?.link
                  ? "bg-primary-500 text-primary-950 font-semibold [&_svg]:text-primary-900"
                  : "hover:bg-primary-900 [&_svg]:text-primary-500 hover:pl-3"
              }`}
            >
              {item?.icon}
              <p> {item?.title}</p>
            </Link>
          </li>
        ))}
      </ul>
      <form action={signOutAction}>
        <button className="flex items-center hover:gap-4 transition-all duration-300 w-full justify-center gap-2 cursor-pointer">
          <PiSignOutBold className="text-xl text-primary-500 " />
          sign out
        </button>
      </form>
    </div>
  );
}

export default SideNavigation;
