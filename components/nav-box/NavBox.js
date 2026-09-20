import { FaGithub, FaInstagram } from "react-icons/fa";
import NavLink from "./NavLink";
import { getLinks } from "@/app/lib/data";

const NavBox = () => {
  const links = getLinks();
  return (
    <nav className="fixed right-0 top-0 bottom-0 hidden md:flex justify-center items-center">
      <ul className="bg-indigo-200 rounded-l-3xl flex flex-col justify-around shadow-md shadow-indigo-300 overflow-hidden">
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
  );
};

export default NavBox;
