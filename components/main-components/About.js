import {
  HiOutlineAcademicCap,
  HiOutlineCalendar,
  HiOutlineCode,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import Pictures from "../about-components/Pictures";

const About = ({ setContent }) => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-neutral-100">
      <div className="flex flex-col gap-2 px-4 md:px-0">
        <div className="flex flex-col md:flex-row items-center gap-4 border-b border-b-neutral-400 pb-4">
          <Pictures />
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl text-neutral-500 font-bold">محمد کامران</h1>
            <div className="flex items-center gap-1 text-neutral-600 text-lg">
              <HiOutlineLocationMarker />
              <h2>ساکن کرج</h2>
            </div>
            <div className="flex items-center gap-1 text-neutral-600 text-lg">
              <HiOutlineCalendar />
              <h2>متولد 1371</h2>
            </div>
            <div className="flex items-center gap-1 text-neutral-600 text-lg">
              <HiOutlineAcademicCap />
              <h2>لیسانس کامپیوتر</h2>
            </div>
            <div className="flex items-center gap-1 text-neutral-600 text-lg">
              <HiOutlineCode />
              <h2>برنامه نویس وب</h2>
            </div>
          </div>
        </div>
        <div>
          <p className="text-neutral-500 text-sm">
            در حال حاضر react js، next js و node js کار می کنم. می تونید مهارت
            های من رو{" "}
            <span
              onClick={() => setContent("skills")}
              className="text-blue-500 underline underline-offset-4 cursor-pointer"
            >
              اینجا
            </span>{" "}
            مطالعه بفرمائید.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
