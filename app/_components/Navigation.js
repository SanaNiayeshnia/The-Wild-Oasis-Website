"use client";
import Link from "next/link";
import Logo from "./Logo";

function Navigation() {
  return (
    <div className="flex items-center gap-4 justify-center">
      <Logo />
      <ul className="flex items-center gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/account">Account</Link>
        </li>
        <li>
          <Link href="/cabins">Cabins</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
