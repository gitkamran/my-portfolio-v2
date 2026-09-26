import Image from "next/image";
import React from "react";
import { HiOutlineX } from "react-icons/hi";

const ImageViewer = ({ src, alt, setShowImage, width = 800, height = 600 }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center w-full h-full">
      <div
        onClick={() => setShowImage(null)}
        className="fixed inset-0 bg-indigo-200/70 z-50 p-4"
      >
        <HiOutlineX
          onClick={() => setShowImage(null)}
          className="cursor-pointer absolute top-2 left-2 text-5xl text-indigo-500"
        />
      </div>

      <div className="z-50 absolute flex items-center justify-center h-full w-full md:w-[80%] p-4 md:p-16">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority
          className="w-auto h-auto rounded-2xl"
        />
      </div>
    </div>
  );
};

export default ImageViewer;
