import { motion } from "framer-motion";
import { Github, ExternalLink, Folder, Globe } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  links: {
    github?: string;
    demo?: string;
  };
}

export function ProjectCard({ title, description, tags, image, links }: ProjectCardProps) {
  const hasValidDemo = links.demo && links.demo !== "#";
  const hasValidGithub = links.github && links.github !== "#";

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative bg-[#112240] rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-[#233554] hover:border-[#64ffda]/30"
    >
      {/* Image Section */}
      <div className="h-48 overflow-hidden relative flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#112240] via-transparent to-transparent opacity-80 group-hover:opacity-0 transition-opacity duration-500 z-10" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      {/* Content Section */}
      <div className="p-8 flex flex-col flex-grow justify-between">
        <div>
          {/* Header with icons */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <Folder className="w-10 h-10 text-[#64ffda]" />
              <span className="text-xs font-mono text-[#64ffda] opacity-70">PROJECT</span>
            </div>
            
            <div className="flex gap-4 text-[#a8b2d1]">
              {hasValidGithub && (
                <a 
                  href={links.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 hover:bg-[#64ffda]/10 rounded-md hover:text-[#64ffda] transition-all duration-300 group/github"
                  title="View Source Code"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Title and Description */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-[#e6f1ff] mb-4 group-hover:text-[#64ffda] transition-colors">
              {title}
            </h3>
            <p className="text-[#8892b0] text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="mb-6">
          <ul className="flex flex-wrap gap-2 font-mono text-xs text-[#8892b0]">
            {tags.map((tag) => (
              <li 
                key={tag} 
                className="bg-[#64ffda]/10 text-[#64ffda] px-3 py-1.5 rounded-md hover:bg-[#64ffda]/20 transition-colors duration-300"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons - Made more prominent */}
        <div className="flex gap-3 mt-auto">
          {/* Live Demo Button - Primary Action */}
          {hasValidDemo ? (
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#64ffda] to-[#64ffda]/80 text-[#0a192f] font-semibold py-3 px-6 rounded-lg flex-1 hover:shadow-lg hover:shadow-[#64ffda]/20 transition-all duration-300 group/demo"
            >
              <Globe className="w-4 h-4" />
              <span>Live Demo</span>
              <ExternalLink className="w-3 h-3 group-hover/demo:translate-x-0.5 transition-transform" />
            </motion.a>
          ) : (
            <div className="flex items-center justify-center gap-3 bg-[#233554] text-[#8892b0] font-medium py-3 px-6 rounded-lg flex-1 cursor-not-allowed">
              <Globe className="w-4 h-4" />
              <span>Demo Coming Soon</span>
            </div>
          )}

          {/* GitHub Button - Secondary */}
          {hasValidGithub && (
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-[#64ffda]/30 text-[#64ffda] font-medium py-3 px-6 rounded-lg hover:bg-[#64ffda]/10 transition-all duration-300 flex-1"
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </motion.a>
          )}
        </div>

        {/* If no links at all */}
        {!hasValidDemo && !hasValidGithub && (
          <div className="text-center py-4 text-[#8892b0] text-sm italic border-t border-[#233554] mt-4">
            Links coming soon...
          </div>
        )}
      </div>

      {/* Hover effect line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#64ffda] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}