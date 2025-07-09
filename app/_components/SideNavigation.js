import Link from "next/link";
import { PiSignOutBold } from "react-icons/pi";
import { signOutAction } from "../_lib/actions";

function SideNavigation({ items = [] }) {
  return (
    <div className="flex flex-col py-6 pl-2  pr-4  min-w-48 justify-between gap-2 border-r-2 border-primary-900 ">
      <ul className="flex flex-col  ">
        {items?.map((item, index) => (
          <li key={index}>
            <Link
              href={item?.link}
              className="flex items-center gap-3 [&_svg]:text-xl py-2 px-2 rounded-md [&_svg]:text-primary-500 hover:pl-3 hover:bg-primary-900 transition-all duration-300"
            >
              {item?.icon}
              <p> {item?.title}</p>
            </Link>
          </li>
        ))}
      </ul>
      <form action={signOutAction}>
        <button className="flex items-center w-full justify-center gap-2 cursor-pointer">
          <PiSignOutBold className="text-xl text-primary-500 " />
          sign out
        </button>
      </form>
    </div>
  );
}

export default SideNavigation;
