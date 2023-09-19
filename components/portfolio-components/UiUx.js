"use client"

import Image from "next/image"
import UIUX from "@/UIUX.json"
import { useState } from "react"
import { HiOutlineX } from 'react-icons/hi'

const UiUx = () => {
  const [linkImage, setLinkImage] = useState("")
  const [showImage, setShowImage] = useState(false)
  return (
    <div className="flex flex-col gap-4 my-14 px-4 md:px-0">
      <h2 className="text-neutral-600 text-sm md:text-base">طراحی UI UX پلتفرم تبلیغات آنلاین صنعت و ساختمان <a href="https://panel.hilite.ir/register" target="_blank" className="text-blue-500 underline underline-offset-4">هایلات</a></h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-auto">
        {UIUX.map((img, i) => (
          <div key={i}>
            <div onClick={() => {
              setLinkImage(img.image);
              setShowImage(true)
            }}
              className="cursor-pointer focus:outline-none w-[150px] lg:w-[200px] rounded-md outline outline-2 outline-neutral-300"
            >
              <Image
                src={img.image}
                alt='طراحی UIUX پلتفرم تبلیغات آنلاین هایلایت'
                width={200}
                height={200}
                priority
                className='w-auto h-auto rounded-md'
              />
            </div>

          </div>
        ))}
        {
          showImage &&
          <div className="fixed inset-0 bg-neutral-500/50 z-50 px-2">
            <div className='flex items-center justify-center w-full h-full'>
              <Image
                src={linkImage}
                alt='طراحی UI پلتفرم تبلیغات آنلاین هایلایت'
                width={800}
                height={800}
                priority
                className='w-auto h-auto rounded-md'
              />
            </div>
            <HiOutlineX onClick={() => setShowImage(false)} className="cursor-pointer absolute top-2 right-2 text-3xl text-white" />
          </div>
        }
      </div>
      <p className="text-neutral-500 text-sm">برای مشاهده در اندازه واقعی روی تصاویر کلیک کنید</p>
    </div>
  )
}

export default UiUx