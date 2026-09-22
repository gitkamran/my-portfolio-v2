import { FaGithub, FaInstagram } from "react-icons/fa";
import NavLink from "./NavLink";
import { getLinks, getSocials } from "@/app/lib/data";
import Image from "next/image";

const NavBox = () => {
  const links = getLinks();
  const socials = getSocials();

  return (
    <nav className="fixed right-0 top-0 bottom-0 hidden md:flex justify-center items-center z-50">
      <ul className="bg-white/30 backdrop-blur-sm rounded-l-3xl flex flex-col justify-around shadow-[0_0_10px] shadow-indigo-300 overflow-hidden">
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
      <ul className="flex items-center gap-2 absolute bottom-5">
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
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBox;
