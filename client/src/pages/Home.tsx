import { Navigation } from "@/components/Navigation";
import { SocialLinks } from "@/components/SocialLinks";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillCard } from "@/components/SkillCard";
import { ContactForm } from "@/components/ContactForm";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Code, Smartphone, Database, Terminal } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-[#8892b0] overflow-x-hidden selection:bg-[#233554] selection:text-[#64ffda]">
      <Navigation />
      <SocialLinks />

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero-bg.png" alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/90 via-[#0a192f]/80 to-[#0a192f]" />
        </div>
        
        <div className="max-w-4xl w-full relative z-10 px-6 sm:px-12">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="font-mono text-[#64ffda] mb-5 ml-1"
          >
            Hi, my name is
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold text-[#e6f1ff] mb-4 tracking-tight"
          >
            Mohammed.
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#8892b0] mb-8"
          >
            I build mobile experiences.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="max-w-xl text-[#8892b0] text-lg leading-relaxed mb-12"
          >
            I am a Flutter & Mobile App Developer specializing in building exceptional digital experiences. Currently, I'm focused on creating accessible, human-centered products that perform beautifully on any device.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <ScrollLink 
              to="projects" 
              smooth={true} 
              duration={500}
              className="inline-block px-8 py-4 border border-[#64ffda] text-[#64ffda] rounded font-mono text-sm hover:bg-[#64ffda]/10 transition-colors cursor-pointer"
            >
              Check out my work!
            </ScrollLink>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 max-w-5xl mx-auto px-6 sm:px-12">
        <SectionHeading number="01" title="Technical Skills" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard 
            title="Mobile Development" 
            icon={<Smartphone className="w-6 h-6" />}
            skills={["Flutter", "Dart", "GetX", "Firebase", "iOS", "Android"]}
          />
          <SkillCard 
            title="Backend & Web" 
            icon={<Database className="w-6 h-6" />}
            skills={["HTML5", "CSS3", "JavaScript", "PHP", "SQL", "PostgreSQL"]}
          />
          <SkillCard 
            title="Tools & Methods" 
            icon={<Terminal className="w-6 h-6" />}
            skills={["Git", "GitHub", "VS Code", "Figma", "Agile", "REST APIs"]}
          />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 max-w-6xl mx-auto px-6 sm:px-12">
        <SectionHeading number="02" title="Featured Projects" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <ProjectCard 
      title="Restaurant Menu"
      description="A responsive, high-performance Menu. Optimized for SEO and accessibility, featuring an interactive menu and reservation form."
      tags={["React", "TypeScript", "Tailwind CSS", "Framer Motion"]}
      image="/images/project-6.PNG"
      links={{ 
        github: "https://github.com/yourusername/beirut-bistro", 
        demo: "https://lebanese-menu2.netlify.app/" 
      }}
    />
             <ProjectCard 
      title="Interactive-resume"
      description="A responsive, high-performance resume.  featuring an interactive menu and reservation form."
      tags={["React", "TypeScript", "Tailwind CSS", "Framer Motion"]}
      image="/images/project-5.PNG"
      links={{ 
        github: "https://github.com/yourusername/beirut-bistro", 
        demo: "https://interactive-resume-th.netlify.app/" 
      }}
    />

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 max-w-4xl mx-auto px-6 sm:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-[#64ffda] mb-4">03. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#e6f1ff] mb-6">Get In Touch</h2>
          <p className="max-w-xl mx-auto text-[#8892b0] mb-12">
            Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <ContactForm />
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm font-mono text-[#8892b0] hover:text-[#64ffda] transition-colors">
        <a href="https://github.com" target="_blank" rel="noreferrer">
          Designed & Builte by Mohammed
        </a>
      </footer>
    </div>
  );
}
