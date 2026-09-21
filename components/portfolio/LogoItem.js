import Image from "next/image";
import React from "react";

const LogoItem = ({ title, description, image }) => {
  return (
    <div className="flex flex-col gap-2 bg-neutral-200/50 rounded-2xl shadow-md shadow-indigo-300 overflow-hidden bg-neutral-300 w-full">
      <div className="overflow-hidden w-full min-h-[260px] flex items-center justify-center p-4">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          priority
          className="w-full h-auto"
        />
      </div>
      <div className="w-full flex flex-col gap-2 p-3">
        <h3 className="text-neutral-600">{title}</h3>
        <p className="text-xs text-neutral-500">{description}</p>
      </div>
    </div>
  );
};

export default LogoItem;
