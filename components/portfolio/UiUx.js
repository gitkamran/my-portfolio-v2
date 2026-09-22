"use client";

import Image from "next/image";
import { useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import { getUiux } from "@/app/lib/data";
import ImageViewer from "../ui/ImageViewer";

const UiUx = () => {
  const [linkImage, setLinkImage] = useState("");
  const [showImage, setShowImage] = useState(null);

  const uiux = getUiux();
  return (
    <div className="flex flex-col gap-4 my-14 px-4 md:px-0 w-full">
      <h2 className="text-neutral-600 text-sm md:text-base">
        طراحی UI UX پلتفرم تبلیغات آنلاین صنعت و ساختمان{" "}
        <a
          href="https://panel.hilite.ir/register"
          target="_blank"
          className="text-blue-500 underline underline-offset-4"
        >
          هایلات
        </a>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto w-full">
        {uiux.map((img, i) => (
          <div
            key={i}
            onClick={() => {
              setLinkImage(img.image);
              setShowImage(img.image);
            }}
            className="cursor-pointer focus:outline-none rounded-2xl outline outline-2 outline-neutral-300 overflow-hidden h-[180px] md:h-[160px] lg:h-[120px] w-full flex items-center justify-center"
          >
            <Image
              src={img.image}
              alt="طراحی UIUX پلتفرم تبلیغات آنلاین هایلایت"
              width={800}
              height={800}
              priority
              className="w-full h-auto"
            />
          </div>
        ))}
        {showImage && (
          <ImageViewer
            src={showImage}
            alt="طراحی UI پلتفرم تبلیغات آنلاین هایلایت"
            setShowImage={setShowImage}
          />
        )}
      </div>
      <p className="text-neutral-500 text-sm">
        برای مشاهده در اندازه واقعی روی تصاویر کلیک کنید
      </p>
    </div>
  );
};

export default UiUx;
