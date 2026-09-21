import {
  HiOutlineAcademicCap,
  HiOutlineCalendar,
  HiOutlineCode,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import Pictures from "./Pictures";
import Link from "next/link";
import { getProfile, getSocials } from "@/app/lib/data";
import Image from "next/image";

const MainPage = () => {
  const profile = getProfile();
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <div className="flex flex-col gap-2 px-4 md:px-0">
        <div className="flex flex-col md:flex-row items-center gap-4 border-b border-b-neutral-400 pb-4">
          <Pictures fullName={profile.fullName} image={profile.avatar} />
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl text-neutral-500 font-bold">
              {profile.fullName}
            </h1>
            <div className="flex items-center gap-1 text-neutral-600 text-lg">
              <HiOutlineLocationMarker className="text-xl text-neutral-400" />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-1 text-neutral-600 text-lg">
              <HiOutlineCalendar className="text-xl text-neutral-400" />
              <span>متولد {profile.birthYear}</span>
            </div>
            <div className="flex items-center gap-1 text-neutral-600 text-lg">
              <HiOutlineAcademicCap className="text-xl text-neutral-400" />
              <span>{profile.degree}</span>
            </div>
            <div className="flex items-center gap-1 text-neutral-600 text-lg">
              <HiOutlineCode className="text-xl text-neutral-400" />
              <span>{profile.title}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-wrap gap-2">
          <p className="text-neutral-500 text-sm">{profile.summary}</p>
          <p className="text-neutral-500 text-sm">
            می تونید پروژهای من را{" "}
            <Link
              href="/portfolio"
              className="text-blue-500 underline underline-offset-4 cursor-pointer"
            >
              اینجا
            </Link>{" "}
            مطالعه بفرمائید.
          </p>
        </div>
        {/* <div className="flex items-center gap-6 w-full">
          {socials.map((s, i) => (
            <Link
              key={i}
              href={s.url}
              target="_blank"
              className="flex items-center gap-1"
            >
              <Image
                src={s.icon}
                alt={s.name}
                width={64}
                height={64}
                className="w-6"
              />
              {s.name}
            </Link>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default MainPage;
