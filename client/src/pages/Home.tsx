import { Navigation } from "@/components/Navigation";
import { SocialLinks } from "@/components/SocialLinks";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillCard } from "@/components/SkillCard";
import { ContactForm } from "@/components/ContactForm";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Code, Smartphone, Database, Terminal, ExternalLink } from "lucide-react";

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
            title="Restaurant Landing Page"
            description="A responsive, high-performance landing page for a local bistro. Optimized for SEO and accessibility, featuring an interactive menu and reservation form."
            tags={["HTML", "CSS", "JavaScript", "GSAP"]}
            image="/images/project-4.PNG"
           links={{ 
              github: "https://github.com/yourusername/beirut-bistro", 
              demo: "https://mosiac-cafe-example.netlify.app/" 
            }}
          />
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
        >
          <p className="font-mono text-[#64ffda] mb-4">03. Connect With Me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#e6f1ff] mb-6">Let's Build Together</h2>
          <p className="max-w-xl mx-auto text-[#8892b0] mb-12">
            Ready to bring your ideas to life? Reach out through any of these platforms.
          </p>
          
          {/* Simple Social Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <SocialLink 
              href="https://wa.me/96181670354"
              icon="whatsapp"
              label="WhatsApp"
              color="#25D366"
            />
            <SocialLink 
              href="https://github.com/mohamadalnabhan"
              icon="github"
              label="GitHub"
              color="#64ffda"
            />
            <SocialLink 
              href="https://instagram.com/heyweb0"
              icon="instagram"
              label="Instagram"
              color="#E4405F"
            />
            <SocialLink 
              href="https://www.linkedin.com/in/mohamad-alnabhan-a87b89383"
              icon="linkedin"
              label="LinkedIn"
              color="#0A66C2"
            />
          </div>

          {/* WhatsApp Quick Action */}
          <div className="bg-gradient-to-r from-[#112240] to-[#0a192f] border border-[#233554] rounded-2xl p-8 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                {/* WhatsApp icon */}
                <WhatsAppIcon />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-[#e6f1ff]">Quickest Response</h3>
                <p className="text-sm text-[#8892b0]">Message me on WhatsApp</p>
              </div>
            </div>
            <a 
              href="https://wa.me/96181670354"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#25D366]/90 transition-colors"
            >
              <span>Message Now</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm font-mono text-[#8892b0] hover:text-[#64ffda] transition-colors">
        <a href="https://github.com" target="_blank" rel="noreferrer">
          Designed & Built by Mohammed
        </a>
      </footer>
    </div>
  );
}

// SocialLink Component (move outside main component)
interface SocialLinkProps {
  href: string;
  icon: string;
  label: string;
  color: string;
}

function SocialLink({ href, icon, label, color }: SocialLinkProps) {
  const getIcon = () => {
    switch (icon) {
      case 'whatsapp':
        return <WhatsAppIcon />;
      case 'github':
        return <GitHubIcon />;
      case 'instagram':
        return <InstagramIcon />;
      case 'linkedin':
        return <LinkedInIcon />;
      default:
        return null;
    }
  };

  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center p-4 rounded-xl bg-[#112240] border border-[#233554] hover:border-opacity-50 transition-all duration-300 min-w-[120px] group"
      style={{ borderColor: `${color}30` }}
    >
      <div 
        className="w-10 h-10 rounded-full mb-3 flex items-center justify-center group-hover:scale-110 transition-transform"
        style={{ backgroundColor: `${color}20` }}
      >
        {getIcon()}
      </div>
      <span className="font-medium text-[#e6f1ff]">{label}</span>
      <span className="text-xs text-[#8892b0] mt-1">Click to visit</span>
    </motion.a>
  );
}

// Icon Components
function WhatsAppIcon() {
  return (
    <svg className="w-6 h-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.826 9.826 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-6 h-6 text-[#64ffda]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-6 h-6 text-[#E4405F]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-6 h-6 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
