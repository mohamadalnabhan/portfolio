import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SkillCardProps {
  title: string;
  icon: ReactNode;
  skills: string[];
}

export function SkillCard({ title, icon, skills }: SkillCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-[#112240] p-6 rounded-lg shadow-lg border border-[#233554] hover:border-[#64ffda] transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-4 text-[#64ffda]">
        {icon}
        <h3 className="text-lg font-bold text-[#e6f1ff]">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill} 
            className="text-sm px-3 py-1 bg-[#233554] text-[#a8b2d1] rounded-full hover:text-[#64ffda] hover:bg-[#64ffda]/10 transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
