import { getExperience } from "@/app/lib/data";
import React from "react";
import ExperienceItem from "./ExperienceItem";

const ExperienceComp = () => {
  const experience = getExperience();
  return (
    <div className="flex flex-col items-center justify-center gap-0 max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl my-14 md:my-20 px-4 md:px-0 mx-auto">
      {experience.map((e) => (
        <ExperienceItem
          key={e.id}
          company={e.company}
          role={e.role}
          period={e.period}
          location={e.location}
          description={e.description}
          highlights={e.highlights}
          tech={e.tech}
        />
      ))}
    </div>
  );
};

export default ExperienceComp;
