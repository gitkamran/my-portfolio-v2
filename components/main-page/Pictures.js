"use client";

import React, { useState } from "react";
import Image from "next/image";

const Pictures = () => {
  const [zome, setZome] = useState(false);

  return (
    <div className="w-[200px] overflow-hidden rounded-3xl shadow-md shadow-indigo-300">
      <Image
        src="/assets/images/mk.webp"
        alt="محمد کامران"
        width={800}
        height={800}
        priority
        onClick={() => setZome(!zome)}
        className={`${
          zome
            ? "scale-150 duration-300 cursor-zoom-out-new"
            : "duration-300 cursor-zoom-in-new"
        } w-auto h-auto object-cover`}
      />
    </div>
  );
};

export default Pictures;
