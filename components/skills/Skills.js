import "@/app/custom.css";
import SkillBox from "./SkillBox";
import OldSkill from "./OldSkill";
import { getSkills } from "@/app/lib/data";
const SkillsComp = () => {
  const skills = getSkills();
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col gap-2 h-full px-4 md:px-0 pt-12">
        {skills.map((s, i) => (
          <div key={i} className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">{s.category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 ltr border-b border-b-neutral-400 pb-4 gap-2">
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
