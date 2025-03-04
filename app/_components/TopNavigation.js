"use client";

import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

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
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/cabins">Cabins</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/account">Guest Area</Link>
        </li>
      </ul>
    </div>
  );
}

export default TopNavigation;
