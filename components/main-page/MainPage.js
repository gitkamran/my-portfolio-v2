import {
  HiOutlineAcademicCap,
  HiOutlineCalendar,
  HiOutlineCode,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import Pictures from "./Pictures";
import Link from "next/link";

const MainPage = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <div className="flex flex-col gap-2 px-4 md:px-0">
        <div className="flex flex-col md:flex-row items-center gap-4 border-b border-b-neutral-400 pb-4">
          <Pictures />
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl text-neutral-500 font-bold">محمد کامران</h1>
            <div className="flex items-center gap-1 text-neutral-600 text-lg">
              <HiOutlineLocationMarker className="text-xl text-neutral-400" />
              <h2>ساکن کرج</h2>
            </div>
            <div className="flex items-center gap-1 text-neutral-600 text-lg">
              <HiOutlineCalendar className="text-xl text-neutral-400" />
              <h2>متولد 1371</h2>
            </div>
            <div className="flex items-center gap-1 text-neutral-600 text-lg">
              <HiOutlineAcademicCap className="text-xl text-neutral-400" />
              <h2>لیسانس کامپیوتر</h2>
            </div>
            <div className="flex items-center gap-1 text-neutral-600 text-lg">
              <HiOutlineCode className="text-xl text-neutral-400" />
              <h2>برنامه نویس وب</h2>
            </div>
          </div>
        </div>
        <div>
          <p className="text-neutral-500 text-sm">
            توسعه‌دهنده اپلیکیشن‌های مقیاس‌پذیر وب. می تونید پروژهای من را{" "}
            <Link
              href="/portfolio"
              className="text-blue-500 underline underline-offset-4 cursor-pointer"
            >
              اینجا
            </Link>{" "}
            مطالعه بفرمائید.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
