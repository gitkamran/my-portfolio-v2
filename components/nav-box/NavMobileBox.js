"use client";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FaGithub, FaInstagram } from "react-icons/fa";
import NavLink from "./NavLink";
import { getLinks, getSocials } from "@/app/lib/data";
import Image from "next/image";

const NavMobileBox = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuHandler = () => {
    setShowMenu(!showMenu);
  };

  const links = getLinks();
  const socials = getSocials();

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
            ? "fixed right-0 top-0 bottom-0 flex justify-center items-center ease-linear duration-500 z-40 bg-white/30 backdrop-blur-sm"
            : "fixed -right-[100%] top-0 bottom-0 flex justify-center items-center ease-linear duration-500"
        }
      >
        <ul className="bg-white/10 rounded-l-3xl flex flex-col justify-around shadow-[0_0_10px] shadow-indigo-300 overflow-hidden">
          {links.map((l) => (
            <NavLink
              key={l.id}
              link={l.link}
              title={l.title}
              start={l.start}
              end={l.end}
              onClick={() => setShowMenu(false)}
            />
          ))}
        </ul>
        <ul className="flex items-center gap-2 absolute bottom-5 left-1/2 -translate-x-1/2 z-50">
          {socials.map((s, i) => (
            <li key={i}>
              <a
                href={s.url}
                target="_blank"
                className="flex items-center justify-center bg-indigo-500 p-1 rounded-full w-8 h-8"
              >
                <Image
                  src={s.icon}
                  alt={s.name}
                  width={64}
                  height={64}
                  className="w-7"
                  priority
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavMobileBox;
