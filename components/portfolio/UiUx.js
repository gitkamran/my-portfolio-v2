"use client";

import Image from "next/image";
import UIUX from "@/UIUX.json";
import { useState } from "react";
import { HiOutlineX } from "react-icons/hi";

const UiUx = () => {
  const [linkImage, setLinkImage] = useState("");
  const [showImage, setShowImage] = useState(false);
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
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto w-full">
        {UIUX.map((img, i) => (
          <div
            key={i}
            onClick={() => {
              setLinkImage(img.image);
              setShowImage(true);
            }}
            className="cursor-pointer focus:outline-none rounded-2xl outline outline-2 outline-neutral-300 overflow-hidden md:h-[128px] w-full object-cover"
          >
            <Image
              src={img.image}
              alt="طراحی UIUX پلتفرم تبلیغات آنلاین هایلایت"
              width={200}
              height={113}
              priority
              className="w-auto h-full"
            />
          </div>
        ))}
        {showImage && (
          <div className="fixed inset-0 flex items-center justify-center w-full h-full">
            <div
              onClick={() => setShowImage(false)}
              className="fixed inset-0 bg-indigo-200/70 z-40 p-4"
            >
              <HiOutlineX
                onClick={() => setShowImage(false)}
                className="cursor-pointer absolute top-2 left-2 text-5xl text-indigo-500"
              />
            </div>

            <div className="z-50 fixed flex items-center justify-center p-2">
              <Image
                src={linkImage}
                alt="طراحی UI پلتفرم تبلیغات آنلاین هایلایت"
                width={800}
                height={600}
                priority
                className="w-auto h-auto rounded-2xl"
              />
            </div>
          </div>
        )}
      </div>
      <p className="text-neutral-500 text-sm">
        برای مشاهده در اندازه واقعی روی تصاویر کلیک کنید
      </p>
    </div>
  );
};

export default UiUx;
