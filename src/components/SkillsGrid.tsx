import {
  SiLaravel,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiAmazon,
  SiFirebase,
  SiTailwindcss,
  SiCloudinary,
  SiGit,
  SiBootstrap,
  SiCss3,
  SiJavascript,
  SiPostman,
} from "react-icons/si";

const skills = [
  { name: "Laravel", icon: SiLaravel, color: "text-red-600" },
  { name: "React", icon: SiReact, color: "text-cyan-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
  { name: "PHP", icon: SiPhp, color: "text-indigo-600" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "AWS", icon: SiAmazon, color: "text-orange-500" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "Cloudinary", icon: SiCloudinary, color: "text-blue-500" },
  { name: "REST APIs", icon: SiPostman, color: "text-orange-600" },
  { name: "Git & GitHub", icon: SiGit, color: "text-red-500" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-600" },
  { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
];

export default function SkillsGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {skills.map((skill, index) => {
        const Icon = skill.icon;
        return (
          <div
            key={index}
            className="group bg-[#F6EBFE] dark:bg-slate-900
             rounded-xl px-5 py-6 text-center
             shadow-md hover:-translate-y-1
             hover:shadow-xl transition-all duration-300"
          >
            <Icon
              className={`text-4xl mx-auto mb-3 ${skill.color}
              animate-float
              transition-transform duration-300
              group-hover:scale-125`}
            />

            <p className="font-semibold text-gray-800 dark:text-gray-100">
              {skill.name}
            </p>
          </div>
        );
      })}
    </div>
  );
}
