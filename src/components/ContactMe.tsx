"use client";
import React, { useState } from "react";
import ContactForm from "./ContactForm";
import { motion, AnimatePresence } from "framer-motion";

const ContactMe = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-16">
      <div className="space-y-5 py-4 px-2 text-foreground">
        <h3 className="text-4xl tracking-tighter word-spacing font-serif font-extrabold text-center">
          Let's get that project Started!!
        </h3>
        {/* <p className="text-sm text-foreground/80">
          Conteact me now alsdaskdlakdlawkdlaksd
        </p> */}
        <div className="flex-center">
          <button
            onClick={() => setIsOpen(true)}
            className="text-2xl text-nowrap text-card-foreground mx-auto bg-card px-6 py-2 rounded-lg hover:bg-card/90 transition-colors"
          >
            Get Started 🚀
          </button>
        </div>

        {/* Modal */}
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
      </div>
    </div>
  );
};

export default ContactMe;
