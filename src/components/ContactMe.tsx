"use client";
import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

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
      <motion.div
        className="mt-16 px-4 "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="space-y-5 py-4 px-2 text-foreground">
          <h3 className="text-4xl tracking-tighter word-spacing font-serif font-extrabold text-center">
            Let&apos;s get that project Started!!
          </h3>
          {/* <p className="text-sm text-foreground/80">
          Conteact me now alsdaskdlakdlawkdlaksd
        </p> */}

          <div className="flex-center">
            <motion.button
              onClick={() => setIsOpen(true)}
              className="text-2xl text-nowrap text-card-foreground mx-auto bg-accent2 px-6 py-2 rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started 🚀
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Modal moved outside the animated div */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.15 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{
                  type: "spring",
                  duration: 0.5,
                }}
                className="bg-background rounded-lg p-6 max-w-3xl w-[90%] max-h-[90vh] overflow-y-auto relative"
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-foreground/70 hover:text-foreground"
                >
                  ✕
                </button>
                <h2 className="text-2xl font-bold text-center mb-4">
                  Contact Me
                </h2>
                <ContactForm />
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      <div className="px-4 py-4 mt-8">
        <h3 className="text-4xl font-bold text-center mb-4">
          Let&apos;s Get in Touch
        </h3>
        <p className="text-center text-muted-foreground">
          Feel free to reach out through any of my social platforms or by email.
          I always appreciate your feedback, suggestions, or just a friendly
          hello. I&apos;m looking forward to hearing from you!
        </p>
        <div className="mt-4 flex flex-col justify-center items-start space-y-2 px-4 text-accent">
          <Link href="https://www.facebook.com/lugawplain">
            <div className="flex flex-row justify-center items-center space-x-4">
              <FaFacebookSquare size={40} />
              <p>Facebook</p>
            </div>
          </Link>
          <Link href="#">
            <div className="flex flex-row justify-center items-center space-x-4">
              <FaSquareXTwitter size={40} />
              <p>Twitter</p>
            </div>
          </Link>
          <Link href="https://www.instagram.com/troysarinas/">
            <div className="flex flex-row justify-center items-center space-x-4">
              <FaInstagramSquare size={40} />
              <p>Instagram</p>
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/troy-sarinas-47062b1ba/">
            <div className="flex flex-row justify-center items-center space-x-4">
              <FaLinkedin size={40} />
              <p>Linkedin</p>
            </div>
          </Link>
          <Link href="https://github.com/LugawPlain">
            <div className="flex flex-row justify-center items-center space-x-4">
              <FaGithubSquare size={40} />
              <p>Github</p>
            </div>
          </Link>
          <Link href="mailto:troysarinas22@gmail.com">
            <div className="flex flex-row justify-center items-center space-x-4">
              <MdEmail size={40} />
              <p>Email (Troysarinas22@gmail.com)</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
