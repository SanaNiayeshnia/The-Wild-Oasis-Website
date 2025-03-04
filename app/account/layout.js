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
    <div className="flex gap-4 flex-grow  border-t-2 border-primary-900">
      <SideNavigation items={sideNavItems} />
      <div className="pt-6">{children}</div>
    </div>
  );
}

export default layout;
