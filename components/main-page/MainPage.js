"use client";
import { useEffect, useState } from "react";
import About from "../main-components/About";
import Skills from "../main-components/Skills";
import NavBox from "../nav-box/NavBox";
import Portfolio from "../main-components/Portfolio";
import Ejucation from "../main-components/Ejucation";
import Contact from "../main-components/Contact";
import NavMobileBox from "../nav-box/NavMobileBox";

const MainPage = () => {
  const [details, setDetails] = useState(<About />);
  const [content, setContent] = useState("about");

  useEffect(() => {
    if (content == "about") {
      setDetails(<About setContent={setContent} />);
    } else if (content == "skills") {
      setDetails(<Skills />);
    } else if (content == "portfolio") {
      setDetails(<Portfolio />);
    } else if (content == "ejucation") {
      setDetails(<Ejucation />);
    } else if (content == "contact") {
      setDetails(<Contact />);
    }
  }, [content]);
  return (
    <main>
      <NavBox setContent={setContent} content={content} />
      <NavMobileBox setContent={setContent} content={content} />
      {details}
    </main>
  );
};

export default MainPage;
