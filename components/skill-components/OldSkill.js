import { copyToClipboard } from "@/helper/copyToClipboard";
import Image from "next/image";

const OldSkill = () => {
  const copyVless = () => {
    copyToClipboard("process.env.NEXT_PUBLIC_VLESS_KEY");
  };
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center justify-between w-full">
      <h2 className="text-neutral-500">
        قبل از برنامه نویسی اینها رو انجام میدادم
      </h2>
      <div className="flex items-center justify-between gap-4 ltr">
        <div className="flex items-center gap-1 md:gap-2 text-sm md:text-lg text-neutral-500 w-fit">
          <Image
            src="/assets/images/skills/photoshop.svg"
            alt="HTML"
            width={28}
            height={28}
            priority
            className="w-5 md:w-7 h-auto"
          />
          <h2 onClick={copyVless} className="">
            Photoshop
          </h2>
        </div>
        <div className="flex items-center gap-1 md:gap-2 md:text-lg text-neutral-500 w-fit">
          <Image
            src="/assets/images/skills/illustrator.svg"
            alt="HTML"
            width={28}
            height={28}
            priority
            className="w-5 md:w-7 h-auto"
          />
          <h2 className="">Illustrator</h2>
        </div>
        <div className="flex items-center gap-1 md:gap-2 md:text-lg text-neutral-500 w-fit">
          <Image
            src="/assets/images/skills/wordpress.svg"
            alt="HTML"
            width={28}
            height={28}
            priority
            className="w-5 md:w-7 h-auto"
          />
          <h2 className="">Wordpress</h2>
        </div>
      </div>
    </div>
  );
};

export default OldSkill;
