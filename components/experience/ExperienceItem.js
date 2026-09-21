import React from "react";

const ExperienceItem = ({
  company,
  role,
  period,
  location,
  description,
  highlights,
  tech,
}) => {
  return (
    <div className="flex flex-col gap-2 w-full p-4 relative">
      <div className="absolute top-0 bottom-0 -right-6 hidden w-0.5 bg-indigo-500 md:block" />
      <span className="absolute -right-14 top-4 hidden h-16 w-16 items-center justify-center rounded-full bg-indigo-500 text-xs font-bold shadow-md md:flex text-white">
        {period}
      </span>
      <span className="md:hidden bg-indigo-500 text-xs font-bold shadow-md text-white p-2 rounded-lg w-fit">
        {period}
      </span>
      <div className="flex items-center gap-4 w-full">
        <h3 className="text-lg font-bold text-neutral-700">{company}</h3>
        <span className="p-2 rounded-xl text-xs bg-indigo-100 text-indigo-500">
          {location}
        </span>
      </div>
      <span className="text-sm text-neutral-500">{role}</span>
      <div className="flex items-center flex-wrap gap-2">
        <span className="text-neutral-500 text-sm">تکنولوژی‌ها:</span>
        {tech.map((t, i) => (
          <span
            key={i}
            className="p-2 rounded-lg text-xs bg-indigo-100 text-indigo-500"
          >
            {t}
          </span>
        ))}
      </div>
      <p className="text-neutral-500 text-sm leading-7">{description}</p>
      <div className="flex flex-col gap-3 border-r border-neutral-300 pr-4 border-b border-b-neutral-300 pb-4">
        {highlights.map((h, i) => (
          <p key={i} className="text-neutral-500 text-sm">
            {h}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ExperienceItem;
