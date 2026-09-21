"use client";
import { useEffect, useState } from "react";
import WebApp from "./WebApp";
import Website from "./Website";
import UiUx from "./UiUx";
import Logo from "./Logo";
import NavPortfolio from "./NavPortfolio";

const PortfolioComp = () => {
  const [detailsPortfolio, setDetailsPortfolio] = useState(<WebApp />);
  const [contentPortfolio, setContentPortfolio] = useState("webapp");

  useEffect(() => {
    if (contentPortfolio == "webapp") {
      setDetailsPortfolio(<WebApp />);
    } else if (contentPortfolio == "website") {
      setDetailsPortfolio(<Website />);
    } else if (contentPortfolio == "uiux") {
      setDetailsPortfolio(<UiUx />);
    } else if (contentPortfolio == "logo") {
      setDetailsPortfolio(<Logo />);
    }
  }, [contentPortfolio]);
  return (
    <div className="flex flex-col items-center justify-center gap-4 max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl my-14 md:my-20 px-4 md:px-0 mx-auto">
      <NavPortfolio
        setContentPortfolio={setContentPortfolio}
        contentPortfolio={contentPortfolio}
      />
      {detailsPortfolio}
    </div>
  );
};

export default PortfolioComp;
