"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Marquee from "react-fast-marquee";
const HeaderNav = () => {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  useEffect(() => {
    setShowAnnouncement(true);

    const timer = setTimeout(() => {
      setShowAnnouncement(false);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
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
      </AnimatePresence>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1.75, duration: 2, type: "spring" }}
        className="flex w-full py-2 px-6 text-sm items-center bg-transparent shadow-md justify-between border-b-2 border-border"
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
    </>
  );
};
export default HeaderNav;
