import Image from "next/image"
import { HiOutlineAcademicCap, HiOutlineCalendar, HiOutlineCode, HiOutlineLocationMarker } from 'react-icons/hi'

const About = ({ setContent }) => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-neutral-100">
      <div className="flex flex-col gap-2">
        <div className="flex gap-4 border-b border-b-neutral-400 pb-4">
          <div className="w-[200px] overflow-hidden rounded-md shadow-md shadow-indigo-300">
            <Image
              src="/assets/images/mk.jpg"
              alt='محمد کامران'
              width={800}
              height={800}
              priority
              className='w-auto h-auto object-cover md:hover:scale-125 ease-linear duration-300'
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl text-neutral-500 font-bold">محمد کامران</h1>
            <div className='flex items-center gap-1 text-neutral-600 text-lg'>
              <HiOutlineLocationMarker />
              <h2>ساکن کرج</h2>
            </div>
            <div className='flex items-center gap-1 text-neutral-600 text-lg'>
              <HiOutlineCalendar />
              <h2>متولد 1371</h2>
            </div>
            <div className='flex items-center gap-1 text-neutral-600 text-lg'>
              <HiOutlineAcademicCap />
              <h2>لیسانس کامپیوتر</h2>
            </div>
            <div className='flex items-center gap-1 text-neutral-600 text-lg'>
              <HiOutlineCode />
              <h2>برنامه نویس وب</h2>
            </div>
          </div>
        </div>
        <div>
          <p className="text-neutral-500 text-sm">در حال حاضر react js، next js و node js کار می کنم. می تونید مهارت های من رو <span onClick={() => setContent("skills")} className="text-blue-500 underline underline-offset-4 cursor-pointer">اینجا</span> مطالعه بفرمائید.</p>
        </div>
      </div>
    </div >
  )
}

export default About