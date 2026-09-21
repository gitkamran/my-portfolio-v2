import React from "react";

const NavItem = ({ title, content, contentPortfolio, setContentPortfolio }) => {
  return (
    <li
      onClick={() => setContentPortfolio(content)}
      className={`${contentPortfolio == content ? "bg-rose-100 text-rose-600 font-bold ease-linear duration-300" : "ease-linear duration-300 text-rose-500"} cursor-pointer px-2 md:px-4 py-2 text-sm md:text-base`}
    >
      {title}
    </li>
  );
};

export default NavItem;
