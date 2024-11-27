"use client";

import { ChevronDown } from "lucide-react";
import { clsx } from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import FlyoutContent from "./flyoutContent";
import navData from "@/data/navData.json";

interface NavlinkProps {
  href: string;
  link: string;
  flyoutContent?: boolean;
}

const NavLink = ({ href, link, flyoutContent }: NavlinkProps) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<any[]>([]); // Changed state type to any[]

  const navigationData = navData.Navigation;

  const handleMouseEnter = () => {
    setOpen(true);
    if (link === "Services") {
      setItems(navigationData.Services || []); // Ensure a fallback for undefined values
    } else if (link === "Projects") {
      setItems(navigationData.Projects || []);
    }
  };

  const handleMouseLeave = () => {
    setOpen(false);
    setItems([]); // Clear items when mouse leaves
  };

  return (
    <div className="">
      <Link
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex flex-row gap-1 capitalize tracking-wide hover:text-primary"
        href={href}
      >
        {link}
        {flyoutContent && (
          <ChevronDown
            className={clsx(
              "rotate-0 transition-transform duration-300 ease-in",
              { "rotate-180": open },
            )}
            color="#29a8a8"
            strokeWidth={1.2}
          />
        )}
        {flyoutContent && open && (
          <FlyoutContent items={items} /> // Pass items to FlyoutContent
        )}
      </Link>
    </div>
  );
};

export default NavLink;
