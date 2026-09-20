"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ link, title, start, end }) => {
  const pathname = usePathname();

  return (
    <li>
      <Link
        className={`${pathname === link ? "bg-indigo-500 shadow-md shadow-indigo-300 text-white ease-linear duration-300" : "bg-neutral-200/50 ease-linear duration-300"} ${start ? "rounded-tl-3xl " : end ? "rounded-bl-3xl" : "rounded-none"} flex items-center justify-center py-6 px-1 lg:p-6 border-b border-b-indigo-500 text-sm lg:text-base text-center cursor-pointer`}
        href={link}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavLink;
