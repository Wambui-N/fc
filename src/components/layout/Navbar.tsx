"use client";

import React from "react";
import FlyoutContent from "../ui/flyoutContent";
import Image from "next/image";
import NavLink from "../ui/NavLink";
import projects from "@/data/projects.json";
import services from "@/data/services.json";
import Button from "../ui/Button";
import Link from "next/link";

const menuLinks = [
  { path: "/about", label: "About", flyout: false },
  { path: "/services", label: "Services", flyout: true },
  { path: "/projects", label: "Projects", flyout: true },
];

const Navbar = () => {
  return (
    <nav className="responsive">
      <section className="relative flex flex-row items-center justify-between">
        <Link href={'/'} id="logo">
          <Image
            src="/FC.svg"
            alt="Frontline Consulting Logo"
            width={50}
            height={50}
            priority
          />
        </Link>
        <div
          id="navlinks"
          className="flex flex-row items-center justify-between gap-6"
        >
          {menuLinks.map((menuLink) => (
            <NavLink
              key={menuLink.label}
              href={menuLink.path}
              link={menuLink.label}
              flyoutContent={menuLink.flyout}
            />
          ))}
          <Button label="Get In Touch" />
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
