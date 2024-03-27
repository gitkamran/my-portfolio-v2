import Image from "next/image";

const SkillBox = ({ src, alt, title }) => {
  return (
    <div className="text-neutral-700 flex items-center rounded-md shadow-md shadow-indigo-300">
      <div className="bg-neutral-200 w-12 md:w-16 h-12 md:h-16 rounded-l-md flex items-center justify-center overflow-hidden">
        <div className="w-[48px] md:w-[64px] h-12 md:h-16 flex items-center justify-center">
          <Image
            src={src}
            alt={alt}
            width={64}
            height={64}
            priority
            className="w-auto h-auto md:hover:scale-150 ease-linear duration-300"
          />
        </div>
      </div>
      <div className="rounded-r-md bg-neutral-300 h-12 md:h-16 w-full flex items-center justify-center px-4">
        <h2 className="md:text-xl">{title}</h2>
      </div>
    </div>
  );
};

export default SkillBox;
