import EducationBox from "./EducationBox";

const EducationComp = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl my-14 md:my-20 px-4 md:px-0 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <EducationBox
          title="Web Design Pack"
          desc="html, css, bootstrap, sass, javascript, git and github"
          courseDur="150"
          score="100"
          src="/assets/images/education/web-design-pack.webp"
          alt="web desgin pack course"
        />
        <EducationBox
          title="React Js"
          desc="react js, node js"
          courseDur="40"
          score="89"
          src="/assets/images/education/reactjs.webp"
          alt="react js course"
        />
        <EducationBox
          title="Photoshop and Illustrator"
          desc="adobe photoshop and adobe illustrator"
          courseDur="80"
          score="100"
          src="/assets/images/education/ps-ai.webp"
          alt="photoshop and illustrator course"
        />
      </div>
      <p className="text-neutral-500 text-sm">
        برای مشاهده در اندازه واقعی روی تصاویر کلیک کنید
      </p>
    </div>
  );
};

export default EducationComp;
