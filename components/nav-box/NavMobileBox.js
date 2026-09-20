"use client";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FaGithub, FaInstagram } from "react-icons/fa";
import NavLink from "./NavLink";
import { getLinks } from "@/app/lib/data";

const NavMobileBox = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuHandler = () => {
    setShowMenu(!showMenu);
  };

  const links = getLinks();

  return (
    <div className="relative md:hidden">
      <button onClick={menuHandler} className="fixed right-2 top-2 z-50">
        {showMenu ? (
          <HiOutlineX className="text-indigo-500 text-4xl bg-indigo-100 rounded-md" />
        ) : (
          <HiOutlineMenu className="text-indigo-500 text-4xl bg-indigo-100 rounded-md" />
        )}
      </button>
      <nav
        className={
          showMenu
            ? "fixed right-0 top-0 bottom-0 flex justify-center items-center ease-linear duration-500 z-40 bg-neutral-100/70"
            : "fixed -right-[100%] top-0 bottom-0 flex justify-center items-center ease-linear duration-500"
        }
      >
        <ul className="bg-neutral-300 rounded-l-3xl flex flex-col justify-around shadow-md shadow-indigo-300 overflow-hidden">
          {links.map((l) => (
            <NavLink
              key={l.id}
              link={l.link}
              title={l.title}
              start={l.start}
              end={l.end}
            />
          ))}
        </ul>
        <ul className="flex items-center gap-2 absolute bottom-5 left-1/2 -translate-x-1/2 z-50">
          <li>
            <a href="https://www.instagram.com/mkamran.ir" target="_blank">
              <FaInstagram className="text-indigo-500 text-3xl bg-neutral-100 rounded-md" />
            </a>
          </li>
          <li>
            <a href="https://github.com/gitkamran" target="_blank">
              <FaGithub className="text-indigo-500 text-3xl bg-neutral-100 rounded-md" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavMobileBox;
