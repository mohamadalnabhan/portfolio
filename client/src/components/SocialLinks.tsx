import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export function SocialLinks() {
  const socials = [
    { icon: <Github size={20} />, href: "https://github.com" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com" },
    { icon: <Twitter size={20} />, href: "https://twitter.com" },
    { icon: <Mail size={20} />, href: "mailto:mohammed@example.com" },
  ];

  return (
    <div className="hidden md:fixed left-10 bottom-0 z-50 md:flex flex-col items-center gap-6 after:content-[''] after:w-[1px] after:h-24 after:bg-[#a8b2d1] after:block">
      {socials.map((item, i) => (
        <motion.a
          key={i}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 + (i * 0.1) }}
          whileHover={{ y: -3, color: "#64ffda" }}
          className="text-[#a8b2d1] hover:text-[#64ffda] transition-colors p-2"
        >
          {item.icon}
        </motion.a>
      ))}
    </div>
  );
}
