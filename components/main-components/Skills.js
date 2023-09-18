import OldSkill from "../skill-components/OldSkill"
import SkillBox from "../skill-components/SkillBox"
import "@/app/custom.css"
const Skills = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-neutral-100">
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-1 md:grid-cols-3 ltr border-b border-b-neutral-400 pb-4 gap-2">
          <SkillBox
            src="/assets/images/skills/html.svg"
            alt="HTML"
            title="HTML"
          />
          <SkillBox
            src="/assets/images/skills/css.svg"
            alt="CSS"
            title="CSS"
          />
          <SkillBox
            src="/assets/images/skills/javascript.svg"
            alt="JavaScript"
            title="JavaScript"
          />
          <SkillBox
            src="/assets/images/skills/react.svg"
            alt="React JS"
            title="React JS"
          />
          <SkillBox
            src="/assets/images/skills/nextjs.svg"
            alt="Next JS"
            title="Next JS"
          />
          <SkillBox
            src="/assets/images/skills/nodejs.svg"
            alt="Node JS"
            title="Node JS"
          />
          <SkillBox
            src="/assets/images/skills/tailwindcss.svg"
            alt="Tailwind CSS"
            title="Tailwind CSS"
          />
          <SkillBox
            src="/assets/images/skills/sass.svg"
            alt="Sass"
            title="Sass"
          />
          <SkillBox
            src="/assets/images/skills/bootstrap.svg"
            alt="Bootstrap"
            title="Bootstrap"
          />
        </div>
        <OldSkill />
      </div>
    </div>
  )
}

export default Skills