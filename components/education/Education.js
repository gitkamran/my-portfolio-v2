import { getEducation } from "@/app/lib/data";
import EducationBox from "./EducationBox";

const EducationComp = () => {
  const education = getEducation();
  return (
    <div className="flex flex-col items-center justify-center gap-4 max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl px-4 md:px-0 mx-auto xl:h-full my-14 md:my-20 xl:my-0">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {education.map((ed, i) => (
          <EducationBox
            key={ed.title}
            title={ed.title}
            desc={ed.desc}
            courseDur={ed.courseDur}
            score={ed.score}
            src={ed.src}
            alt={ed.alt}
          />
        ))}
      </div>
      <p className="text-neutral-500 text-sm">
        برای مشاهده در اندازه واقعی روی تصاویر کلیک کنید
      </p>
    </div>
  );
};

export default EducationComp;
