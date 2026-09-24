import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineCube } from "react-icons/hi";
import ImageViewer from "../ui/ImageViewer";

const WebAppItem = ({
  number,
  title,
  description,
  longDescription,
  url,
  tech,
  category,
  year,
  gallery,
}) => {
  const [show, setShow] = useState(false);
  const [showImage, setShowImage] = useState(null);
  console.log(showImage);
  return (
    <div className="flex flex-col gap-4 border-b border-b-indigo-400 last:border-none pb-4">
      <div className="flex flex-wrap items-end gap-2">
        <span className="text-lg md:text-4xl font-bold w-10 h-10 md:w-14 md:h-14 flex items-center justify-center bg-indigo-500 text-white rounded-xl shadow-md">
          {number}
        </span>
        <div className="flex flex-wrap items-center gap-2">
          <h2>{title}</h2>
          <span className="bg-indigo-100 text-xs p-1 rounded-md text-neutral-600">
            {category}
          </span>
        </div>
      </div>
      <div className="flex flex-wrap gap-1">
        <div className="flex items-center gap-1 text-neutral-600 whitespace-nowrap">
          <HiOutlineCube className="" />
          <h3 className="text-sm font-bold">تکنولوژی ها:</h3>
        </div>
        {tech.map((t, i) => (
          <span
            key={i}
            className="text-indigo-500 bg-indigo-100 p-1 rounded-md text-sm ltr"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex flex-col gap-2 border-r border-r-neutral-300 pr-2">
        <h3 className="text-neutral-600 font-bold text-sm">توضیحات</h3>
        <p className="text-neutral-500 text-sm leading-7">{description}</p>
      </div>
      {gallery.length > 0 && (
        <div className="flex flex-col gap-4">
          {showImage && (
            <ImageViewer
              src={showImage}
              alt={title}
              setShowImage={setShowImage}
              width={2704}
              height={1682}
            />
          )}
          <h3 className="text-neutral-600 font-bold text-sm">تصاویر پروژه</h3>
          <div className="flex items-center flex-wrap gap-2">
            {gallery.map((g, i) => (
              <div key={i} className="w-[225.33px] h-[140.16px]">
                <Image
                  src={g}
                  alt={title}
                  width={225.33}
                  height={140.16}
                  className="rounded-2xl w-auto h-auto cursor-pointer"
                  onClick={() => setShowImage(g)}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="flex flex-col gap-2 border-r border-r-neutral-300 pr-2">
        <div className="flex items-center gap-2">
          <h3 className="text-neutral-600 font-bold text-sm">توضیحات کامل</h3>
          <button
            onClick={() => setShow(!show)}
            className="bg-indigo-100 text-neutral-700 rounded-lg p-1 text-sm"
          >
            {show ? "بستن" : "مشاهده"}
          </button>
        </div>
        {show && (
          <p className="text-neutral-500 text-sm leading-7">
            {longDescription}
          </p>
        )}
      </div>
      {url && (
        <Link
          href={url}
          target="_blank"
          className="bg-indigo-500 p-2 text-white text-sm w-fit rounded-md shadow-md shadow-indigo-300"
        >
          مشاهده وبسایت
        </Link>
      )}
    </div>
  );
};

export default WebAppItem;
