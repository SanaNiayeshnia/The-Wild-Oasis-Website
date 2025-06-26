"use client";

import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

const topNavRoutes = [
  { text: "Home", href: "/" },
  { text: "Cabins", href: "/cabins" },
  { text: "About", href: "/about" },
  { text: "Guest Area", href: "/account" },
];

function TopNavigation() {
  const pathname = usePathname();
  const isOnHomePage = pathname === "/";

  return (
    <div
      className={`flex items-center gap-4 justify-between py-4 z-30 sticky top-0  ${
        !isOnHomePage ? "bg-primary-950" : ""
      }`}
    >
      <Logo />
      <ul className="flex items-center gap-8 [&_li]:hover:text-accent-400 transition-all duration-300 [&_li]:text-primary-50">
        {topNavRoutes?.map((route, index) => (
          <li key={index}>
            <Link
              href={route?.href}
              className={`transition-all duration-300 underline-offset-6 ${
                route?.href === pathname
                  ? "text-accent-400 underline font-bold"
                  : ""
              }`}
            >
              {route?.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopNavigation;
