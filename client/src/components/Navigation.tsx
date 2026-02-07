import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Work", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a192f]/90 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-[#64ffda] font-bold text-2xl font-mono border-2 border-[#64ffda] p-1 rounded-sm cursor-pointer hover:bg-[#64ffda]/10 transition-colors"
        >
          MD
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link, i) => (
              <motion.li 
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="font-mono text-sm text-[#e6f1ff] hover:text-[#64ffda] cursor-pointer transition-colors"
                >
                  <span className="text-[#64ffda] mr-1">0{i + 1}.</span>
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a 
              href="/resume.pdf" 
              className="px-4 py-2 border border-[#64ffda] text-[#64ffda] rounded font-mono text-sm hover:bg-[#64ffda]/10 transition-colors"
            >
              Resume
            </a>
          </motion.div>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden z-50">
          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-[#64ffda] p-2"
          >
            {mobileOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="fixed inset-0 bg-[#112240] flex items-center justify-center md:hidden"
            >
              <nav className="flex flex-col items-center gap-8">
                {navLinks.map((link, i) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    onClick={() => setMobileOpen(false)}
                    className="font-mono text-lg text-[#e6f1ff] hover:text-[#64ffda] cursor-pointer flex flex-col items-center gap-2"
                  >
                    <span className="text-[#64ffda]">0{i + 1}.</span>
                    {link.name}
                  </Link>
                ))}
                <a 
                  href="/resume.pdf" 
                  className="mt-8 px-8 py-4 border border-[#64ffda] text-[#64ffda] rounded font-mono text-lg hover:bg-[#64ffda]/10 transition-colors"
                >
                  Resume
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
