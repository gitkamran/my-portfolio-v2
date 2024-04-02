import EducationBox from "../education-components/EducationBox"

const Education = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-neutral-100">
      <div className="flex flex-col gap-4 md:w-[80%] lg:w-[70%] xl:w-[60%] px-4 md:px-0 my-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
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
        <p className="text-neutral-500 text-sm">برای مشاهده در اندازه واقعی روی تصاویر کلیک کنید</p>
      </div>
    </div>
  )
}

export default Education