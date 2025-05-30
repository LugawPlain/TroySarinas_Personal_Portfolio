"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiHackerrank } from "react-icons/si";
import Link from "next/link";
import ContactModal from "./ContactModal";

const ContactMe = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup function to reset overflow when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <div className="mt-20 relative top-0 min-w-screen mx-auto bg-card py-8 border-t-2">
        <div className="max-w-7xl mx-auto ">
          <h3 className=" font-bold text-center mb-8">
            <span className="text-3xl sm:text-4xl">
              Let&apos;s Get in Touch
            </span>
          </h3>
          <p className="text-center text-muted-foreground/80">
            Feel free to reach out through any of my social platforms or by
            email. I always appreciate your feedback, suggestions, or just a
            friendly hello. I&apos;m looking forward to hearing from you!
          </p>
          <div className="flex flex-col md:flex-row">
            <div className="mt-4 flex flex-col justify-center items-start space-y-2 px-8 text-primary">
              <Link href="https://www.facebook.com/TroyGwapoOmsim/">
                <div className="flex flex-row justify-center items-center space-x-4">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    whileHover={{ opacity: 1 }}
                    whileTap={{ opacity: 0.9 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <FaFacebookSquare size={40} />
                  </motion.span>
                  <p>Facebook</p>
                </div>
              </Link>
              <Link href="#">
                <div className="flex flex-row justify-center items-center space-x-4">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    whileHover={{ opacity: 1 }}
                    whileTap={{ opacity: 0.9 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <FaSquareXTwitter size={40} />
                  </motion.span>
                  <p>Twitter</p>
                </div>
              </Link>
              <Link href="https://www.instagram.com/troysarinas/">
                <div className="flex flex-row justify-center items-center space-x-4">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    whileHover={{ opacity: 1 }}
                    whileTap={{ opacity: 0.9 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <FaInstagramSquare size={40} />
                  </motion.span>
                </div>
              </Link>
              <Link href="https://www.linkedin.com/in/troy-sarinas-47062b1ba/">
                <div className="flex flex-row justify-center items-center space-x-4">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    whileHover={{ opacity: 1 }}
                    whileTap={{ opacity: 0.9 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <FaLinkedin size={40} />
                  </motion.span>
                  <p>Linkedin</p>
                </div>
              </Link>
              <Link href="https://github.com/LugawPlain">
                <div className="flex flex-row justify-center items-center space-x-4">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    whileHover={{ opacity: 1 }}
                    whileTap={{ opacity: 0.9 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <FaGithubSquare size={40} />
                  </motion.span>
                  <p>Github</p>
                </div>
              </Link>
              <Link href="mailto:troysarinas22@gmail.com">
                <div className="flex flex-row justify-center items-center space-x-4">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    whileHover={{ opacity: 1 }}
                    whileTap={{ opacity: 0.9 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <MdEmail size={40} />
                  </motion.span>
                  <p>Email (Troysarinas22@gmail.com)</p>
                </div>
              </Link>
              <Link href="https://www.hackerrank.com/profile/troysarinas22">
                <div className="flex flex-row justify-center items-center space-x-4">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    whileHover={{ opacity: 1 }}
                    whileTap={{ opacity: 0.9 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <SiHackerrank size={40} />
                  </motion.span>
                  <p>HackerRank</p>
                </div>
              </Link>
            </div>
            <motion.div
              className="px-4 mx-auto mt-4 md:mt-20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="space-y-5 py-4 px-2 text-foreground">
                <h3 className="text-4xl tracking-tighter word-spacing font-bold text-center">
                  Let&apos;s get that <br /> project Started!!
                </h3>

                <div className="flex-center">
                  <motion.button
                    onClick={() => setIsOpen(true)}
                    className="text-2xl text-nowrap text-primary-foreground mx-auto bg-primary px-6 py-2 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started 🚀
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
