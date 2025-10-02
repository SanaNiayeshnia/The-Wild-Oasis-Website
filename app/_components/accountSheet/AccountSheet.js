"use client";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import SideNavigation from "../SideNavigation";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "../ui/sheet";

function AccountSheet({ items = [] }) {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="self-end">
        <HiOutlineMenuAlt3 className="md:hidden text-3xl" />
      </SheetTrigger>
      <SheetContent className="bg-primary-950 text-white border-0">
        <SideNavigation items={items} onItemClick={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  );
}

export default AccountSheet;
