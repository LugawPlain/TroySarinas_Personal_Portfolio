"use client";
import React, { useEffect } from "react";

const LogAccordionHeight: React.FC = () => {
  useEffect(() => {
    const accordionContent = document.querySelector<HTMLDivElement>(
      ".your-accordion-content"
    );
    if (accordionContent) {
      const computedStyle = getComputedStyle(accordionContent);
      const heightValue = computedStyle
        .getPropertyValue("--radix-accordion-content-height")
        .trim();
      console.log("Accordion content height:", heightValue);
    } else {
      console.log("Accordion content element not found");
    }
  }, []);

  return null;
};

export default LogAccordionHeight;
