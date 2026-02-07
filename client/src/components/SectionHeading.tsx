import { motion } from "framer-motion";

interface SectionHeadingProps {
  number: string;
  title: string;
  className?: string;
}

export function SectionHeading({ number, title, className = "" }: SectionHeadingProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex items-center gap-4 mb-10 ${className}`}
    >
      <h2 className="flex items-center whitespace-nowrap text-2xl md:text-3xl font-bold text-[#e6f1ff]">
        <span className="font-mono text-[#64ffda] text-lg md:text-xl mr-2">{number}.</span>
        {title}
      </h2>
      <div className="h-[1px] w-full max-w-[300px] bg-[#233554]" />
    </motion.div>
  );
}
