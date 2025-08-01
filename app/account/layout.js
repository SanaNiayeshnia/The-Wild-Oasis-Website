import SideNavigation from "../_components/SideNavigation";
import { HiHome, HiCalendar, HiUser } from "react-icons/hi2";

function layout({ children }) {
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
    <div className="flex gap-8 flex-grow  border-t-2 border-primary-900">
      <SideNavigation items={sideNavItems} />
      <div
        className="py-6 overflow-auto max-h-[86vh] flex-grow [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-primary-900
    [&::-webkit-scrollbar-thumb]:bg-primary-500
    [&::-webkit-scrollbar-thumb]:rounded-full"
      >
        {children}
      </div>
    </div>
  );
}

export default layout;
