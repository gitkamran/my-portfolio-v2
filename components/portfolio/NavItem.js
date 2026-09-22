import React from "react";

const NavItem = ({ title, content, contentPortfolio, setContentPortfolio }) => {
  return (
    <li
      onClick={() => setContentPortfolio(content)}
      className={`${contentPortfolio == content ? "text-rose-600 font-bold border border-rose-500" : "text-rose-500"} cursor-pointer px-2 md:px-4 py-2 text-sm md:text-base backdrop-blur-sm ${content === "webapp" ? "rounded-r-2xl" : content==="logo" ? "rounded-l-2xl" : "rounded-none"}`}
    >
      {title}
    </li>
  );
};

export default NavItem;
