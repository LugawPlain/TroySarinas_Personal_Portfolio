"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const HeaderNav = (props: { className?: string }) => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
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

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
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
    <>
      <div className={props.className}>
        {/* <AnimatePresence>
          {showAnnouncement && (
            <>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="text-[13px] bg-gradient-to-r from-purple-700 via-pink-600 to-purple-700 text-white py-1 overflow-hidden"
              >
                <Marquee pauseOnHover speed={100}>
                  <p>Website is still on Beta🥰, Developments are underway</p>
                </Marquee>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="text-[13px] bg-gradient-to-r from-purple-500 via-pink-600 to-purple-500 text-white py-1 overflow-hidden"
              >
                <Marquee direction="right" pauseOnHover speed={100}>
                  <p>Website is not yet developed for desktop layout</p>
                </Marquee>
              </motion.div>
            </>
          )}
        </AnimatePresence> */}
        {/* For smaller screens */}
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 1.75, duration: 2, type: "spring" }}
          className="flex w-full py-2 px-6 text-sm items-center bg-transparent shadow-md justify-between border-b-2 border-border sm:hidden"
        >
          <span className="p-0.5 rounded-lg bg-status  shadow-sm ">
            <Avatar className="w-[40px] h-[40px] rounded-md  ">
              <AvatarImage src="/Icons/Troy_Sarinas_Pfp3.jpg" />
              <AvatarFallback>TS</AvatarFallback>
            </Avatar>
          </span>

          <div className="flex-center gap-2 rounded-full bg-green-500/10 px-4 py-2 shadow-sm">
            <span className="relative flex h-[6px] w-[6px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500/80 opacity-75"></span>
              <span className="relative inline-flex h-full w-full rounded-full bg-green-500"></span>
            </span>
            <p className="text-xs text-text-primary">Available for work</p>
          </div>
        </motion.div>

        {/* For larger screens */}
        <motion.div
          initial={{ maxWidth: "0px" }}
          animate={{ maxWidth: "100vw" }}
          transition={{ duration: 1, ease: "easeIn" }}
          className={`relative z-20 shadow-md min-h-15  sm:fixed sm:flex justify-center top-4 left-1/2 hidden  -translate-x-1/2 transition-all duration-300 rounded-full overflow-hidden`}
        >
          <div
            className={`top-0  flex justify-between relative  rounded-full  px-6 z-20 text-sm items-center bg-popover/70  backdrop-blur-sm  border-b-2 border-border transition-all
              ${
                isScrolled
                  ? "min-w-4xl "
                  : "md:min-w-2xl min-h-15 lg:min-w-4xl xl:min-w-6xl 2xl:min-w-8xl 3xl:min-w-10xl"
              }
              `}
          >
            <div className=" flex items-center xl:w-1/3 ">
              <span className="p-0.5 rounded-lg bg-status  shadow-sm mr-auto ">
                <Avatar className="w-[40px] h-[40px] rounded-md  ">
                  <AvatarImage src="/Icons/Troy_Sarinas_Pfp3.jpg" />
                  <AvatarFallback>TS</AvatarFallback>
                </Avatar>
              </span>
            </div>
            <div className=" flex items-center justify-center xl:w-1/3">
              <div className="">
                <ul className="flex flex-row md:gap-4 *:hover:scale-110 *:transition-all *:duration-300 *:cursor-pointer *:text-nowrap mx-4 sm:*:text-sm sm:gap-2 md:*:text-lg">
                  <li>
                    <button
                      onClick={() => scrollToSection("hero")}
                      className={`${
                        activeSection === "hero"
                          ? "text-popover-foreground font-medium"
                          : "text-popover-foreground/70 hover:text-popover-foreground"
                      } transition-colors duration-300`}
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("about")}
                      className={`${
                        activeSection === "about"
                          ? "text-popover-foreground font-medium"
                          : "text-popover-foreground/70 hover:text-popover-foreground"
                      } transition-colors duration-300`}
                    >
                      About Me
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("projects")}
                      className={`${
                        activeSection === "projects"
                          ? "text-popover-foreground font-medium"
                          : "text-popover-foreground/70 hover:text-popover-foreground"
                      } transition-colors duration-300`}
                    >
                      Projects
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className={`${
                        activeSection === "contact"
                          ? "text-popover-foreground font-medium"
                          : "text-popover-foreground/70 hover:text-popover-foreground"
                      } transition-colors duration-300`}
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" flex items-center xl:w-1/3">
              <div className="flex-center gap-2 ml-auto ">
                <ThemeToggle />

                <div className="flex-center gap-2 rounded-full bg-green-500/10 px-4 py-2 shadow-sm">
                  <span className="relative flex h-[6px] w-[6px]">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500/80 opacity-75"></span>
                    <span className="relative inline-flex h-full w-full rounded-full bg-green-500"></span>
                  </span>
                  <p className="text-xs text-text-primary text-nowrap">
                    Available for work
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default HeaderNav;
