import NavItem from "./NavItem";

const NavPortfolio = ({ contentPortfolio, setContentPortfolio }) => {
  return (
    <nav className="fixed top-2 md:top-5 left-0 right-0 w-fit mx-auto">
      <ul className="flex items-center bg-white/10 rounded-2xl overflow-hidden backdrop-blur-sm shadow-md">
        <NavItem
          content="webapp"
          title="وب‌اپلیکیشن"
          contentPortfolio={contentPortfolio}
          setContentPortfolio={setContentPortfolio}
        />
        <NavItem
          content="website"
          title="وب‌سایت"
          contentPortfolio={contentPortfolio}
          setContentPortfolio={setContentPortfolio}
        />
        <NavItem
          content="uiux"
          title="UIUX"
          contentPortfolio={contentPortfolio}
          setContentPortfolio={setContentPortfolio}
        />
        <NavItem
          content="logo"
          title="لوگو"
          contentPortfolio={contentPortfolio}
          setContentPortfolio={setContentPortfolio}
        />
      </ul>
    </nav>
  );
};

export default NavPortfolio;
