import "@/app/custom.css";
import SkillBox from "./SkillBox";
import OldSkill from "./OldSkill";
import { getSkills } from "@/app/lib/data";
const SkillsComp = () => {
  const skills = getSkills();
  return (
    <div className="flex flex-col items-center justify-center gap-4 max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl my-14 md:my-20 px-4 md:px-0 mx-auto">
      <div className="flex flex-col gap-2">
        {skills.map((s, i) => (
          <div key={i} className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">{s.category}</h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 ltr border-b border-b-neutral-400 pb-4 gap-4">
              {s.items.map((item) => (
                <SkillBox
                  key={item.name}
                  src={item.image}
                  alt={item.name}
                  title={item.name}
                  level={item.level}
                />
              ))}
            </div>
          </div>
        ))}
        <OldSkill />
      </div>
    </div>
  );
};

export default SkillsComp;
