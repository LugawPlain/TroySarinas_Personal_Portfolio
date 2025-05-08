"use client";
import React, { useEffect, useState } from "react";
import { RiHome3Line } from "react-icons/ri";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { GoProject } from "react-icons/go";
import { GiMapleLeaf } from "react-icons/gi";
import { motion } from "framer-motion";

interface MenuBarProps {
  className?: string;
}

const MenuBar: React.FC<MenuBarProps> = ({ className }) => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Update active section when section is more than 50% visible
          if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    // Cleanup
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 16;
      const elementPosition = element.offsetTop;

      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1.75, duration: 2, type: "spring" }}
      className={`${className} fixed w-md bg-accent/80 bottom-0 py-2 z-30 shadow-[0_-1px_10px_rgba(0,0,0,0.25)] rounded-t-3xl backdrop-blur`}
    >
      <ul className="flex justify-evenly text-accent-foreground">
        <li>
          <button
            onClick={() => scrollToSection("hero")}
            className={`flex-center flex-col transition-all duration-300 ${
              activeSection === "hero"
                ? "text-primary scale-110 font-medium"
                : "text-foreground/70 hover:text-foreground hover:scale-110 active:scale-100 active:text-primary"
            }`}
          >
            <RiHome3Line size={24} />
            <p className="select-none touch-none">Home</p>
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("about")}
            className={`flex-center flex-col transition-all duration-300 ${
              activeSection === "about"
                ? "text-primary scale-110 font-medium"
                : "text-foreground/70 hover:text-foreground hover:scale-110 active:scale-100 active:text-primary"
            }`}
          >
            <GiMapleLeaf className="rotate-20" size={24} />
            <p className="select-none touch-none">About Me</p>
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("projects")}
            className={`flex-center flex-col transition-all duration-300 ${
              activeSection === "projects"
                ? "text-primary scale-110 font-medium"
                : "text-foreground/70 hover:text-foreground hover:scale-110 active:scale-100 active:text-primary"
            }`}
          >
            <GoProject size={24} />
            <p className="select-none touch-none">Projects</p>
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("contact")}
            className={`flex-center flex-col transition-all duration-300 ${
              activeSection === "contact"
                ? "text-primary scale-110 font-medium"
                : "text-foreground/50 hover:text-foreground hover:scale-110 active:scale-100 active:text-primary"
            }`}
          >
            <PiPaperPlaneTilt size={24} />
            <p className="select-none touch-none">Contact</p>
          </button>
        </li>
      </ul>
    </motion.div>
  );
};

export default MenuBar;
