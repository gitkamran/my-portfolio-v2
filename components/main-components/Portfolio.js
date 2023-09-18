"use client"
import { useEffect, useState } from "react"
import NavPortfolio from "../portfolio-components/NavPortfolio"
import WebApp from "../portfolio-components/WebApp"
import Website from "../portfolio-components/Website"
import UiUx from "../portfolio-components/UiUx"
import Logo from "../portfolio-components/Logo"

const Portfolio = () => {
  const [detailsPortfolio, setDetailsPortfolio] = useState(<WebApp />)
  const [contentPortfolio, setContentPortfolio] = useState("webapp")

  useEffect(() => {
    if (contentPortfolio == "webapp") {
      setDetailsPortfolio(<WebApp />)
    } else if (contentPortfolio == "website") {
      setDetailsPortfolio(<Website />)
    } else if (contentPortfolio == "uiux") {
      setDetailsPortfolio(<UiUx />)
    } else if (contentPortfolio == "logo") {
      setDetailsPortfolio(<Logo />)
    }
  }, [contentPortfolio])
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-neutral-100">
      <div className="flex flex-col gap-4">
      <NavPortfolio setContentPortfolio={setContentPortfolio} contentPortfolio={contentPortfolio} />
      {detailsPortfolio}
      </div>
    </div>
  )
}

export default Portfolio