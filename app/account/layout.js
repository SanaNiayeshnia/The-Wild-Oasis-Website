import SideNavigation from "../_components/SideNavigation";
import { HiHome, HiCalendar, HiUser } from "react-icons/hi2";

import AccountSheet from "../_components/accountSheet/AccountSheet";

function Layout({ children }) {
  const sideNavItems = [
    { title: "Home", icon: <HiHome />, link: "/account" },
    {
      title: "Reservations",
      icon: <HiCalendar />,
      link: "/account/reservations",
    },
    { title: "Guest Profile", icon: <HiUser />, link: "/account/profile" },
  ];

  return (
    <div className="flex flex-col py-3 md:py-0 md:flex-row gap-2 md:gap-3 xl:gap-8 flex-grow border-t-2 border-primary-900">
      <div className="hidden md:block border-r-2 border-primary-900 pl-2 pr-4">
        <SideNavigation items={sideNavItems} />
      </div>
      <AccountSheet items={sideNavItems} />
      <div
        className="md:py-6 overflow-auto max-h-[86vh] flex-grow [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-primary-900
    [&::-webkit-scrollbar-thumb]:bg-primary-500
    [&::-webkit-scrollbar-thumb]:rounded-full"
      >
        {children}
      </div>
    </div>
  );
}

export default Layout;
