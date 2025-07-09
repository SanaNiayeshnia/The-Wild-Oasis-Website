"use client";

import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { PiSignInBold } from "react-icons/pi";

function TopNavigation({ user = null }) {
  const pathname = usePathname();
  const isOnHomePage = pathname === "/";
  const isAuthenticated = !!user;

  const topNavRoutes = [
    { text: "Home", href: "/" },
    { text: "Cabins", href: "/cabins" },
    { text: "About", href: "/about" },
    {
      text: isAuthenticated ? (
        "Guest Area"
      ) : (
        <p className="flex items-center gap-2">
          <PiSignInBold className="text-lg" /> Sign In
        </p>
      ),
      href: "/account",
      image: isAuthenticated ? user?.image : null,
    },
  ];

  return (
    <div
      className={`flex items-center gap-4 justify-between py-4 z-30 sticky top-0  ${
        !isOnHomePage ? "bg-primary-950" : ""
      }`}
    >
      <Logo />
      <ul className="flex items-center gap-8 [&_li]:hover:text-accent-400 transition-all duration-300 [&_li]:text-primary-50">
        {topNavRoutes?.map((route, index) => (
          <li key={index} className="group">
            <Link
              href={route?.href}
              className={`transition-all duration-300 underline-offset-6 flex items-center gap-3 ${
                route?.href === pathname
                  ? "text-accent-400 underline font-bold"
                  : ""
              }`}
            >
              {route?.image && (
                <Image
                  src={route?.image}
                  alt={user?.name}
                  width="25"
                  height="25"
                  referrerPolicy="no-referrer"
                  className={`rounded-full object-cover outline-2 transition-all duration-300 outline-offset-2  group-hover:outline-accent-400 ${
                    route?.href === pathname
                      ? "outline-accent-400"
                      : "outline-white"
                  }`}
                />
              )}
              {route?.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopNavigation;
