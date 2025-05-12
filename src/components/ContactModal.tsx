"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "./ContactForm";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.15 }}
            onClick={onClose} // Close modal when backdrop is clicked
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
                onClick={onClose}
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
  );
};

export default ContactModal;
