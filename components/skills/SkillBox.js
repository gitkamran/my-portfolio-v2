import Image from "next/image";

const SkillBox = ({ src, alt, title, level }) => {
  return (
    <div className="text-neutral-700 flex items-center rounded-2xl shadow-md shadow-indigo-300 w-full bg-indigo-200 overflow-hidden relative px-2">
      <div className="w-12 md:w-16 h-12 md:h-16 flex items-center justify-center overflow-hidden z-10">
        <Image
          src={src}
          alt={alt}
          width={64}
          height={64}
          priority
          className="w-auto h-auto bg-transparent"
        />
      </div>
      <div className="w-full flex items-center justify-center px-2 z-10">
        <h2 className="text-sm md:text-xl whitespace-nowrap">{title}</h2>
      </div>
      <div className="font-sans text-indigo-500 z-10">
        <span className="text-xs md:text-base font-bold">{level}%</span>
      </div>
      <div
        style={{ width: `${level}%` }}
        className="flex items-center bg-indigo-100 rounded-l-2xl absolute inset-0"
      ></div>
    </div>
  );
};

export default SkillBox;
