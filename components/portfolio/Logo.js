import { getLogos } from "@/app/lib/data";
import Image from "next/image";
import LogoItem from "./LogoItem";

const Logo = () => {
  const logos = getLogos();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
      {logos.map((logo) => (
        <LogoItem
          key={logo.id}
          title={logo.title}
          description={logo.description}
          image={logo.image}
        />
      ))}
    </div>
  );
};

export default Logo;
