"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
import {
  LucideIcon,
  Code,
  PenTool,
  Smartphone,
  ShoppingCart,
  Zap,
  CheckCircle,
} from "lucide-react";
import {
  Accordion,
  // AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// import { Button } from "@/components/ui/button";
import {
  servicesData,
  ServiceItemData,
  // ServiceListItem,
} from "@/data/services";

// const listVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 10 },
//   visible: { opacity: 1, y: 0 },
// };

interface AccordionMotionItemPassedProps
  extends Omit<ServiceItemData, "iconName"> {
  IconComponent?: LucideIcon;
  CheckIcon: LucideIcon;
}

const AccordionMotionItem: React.FC<AccordionMotionItemPassedProps> = (
  props
) => {
  const {
    value,
    title,
    IconComponent,
    // image,
    // listItems,
    // ctaText,
    // ctaUrl,
    // CheckIcon,
  } = props;
  const ref = useRef(null);
  const router = useRouter();

  const handleClick = () => {
    router.push(`/services/ai_agents_automations`);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      onClick={handleClick}
      className="cursor-pointer"
    >
      <AccordionItem
        className="bg-secondary border-none overflow-hidden shadow-sm "
        value={value}
      >
        <AccordionTrigger className="text-xl text-left  hover:no-underline px-4 py-4 group ">
          <div className="sm:mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl sm:w-7xl px-4">
            <div className="flex items-center sm:text-start space-x-3 ">
              {IconComponent && (
                <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-10 lg:h-10 text-secondary-foreground flex-shrink-0" />
              )}
              <span className="text-md font-extrabold sm:text-xl md:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl group-hover:translate-x-20 transition-all duration-400">
                {title}
              </span>
            </div>
          </div>
        </AccordionTrigger>
        {/* <AccordionContent className="md:max-h-80">
          <motion.div
            key="content"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={listVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex flex-col md:flex-row items-start py-4 px-4 overflow-hidden max-w-7xl mx-auto"
          >
            <div className="relative w-sm md:w-2/5 aspect-[350/400] mb-4 md:mb-0 md:mr-6 flex-shrink-0">
              <Image
                src={image}
                fill
                style={{ objectFit: "contain" }}
                alt={`${title} service illustration`}
                sizes="(max-width: 768px) 50vw, 30vw"
              />
            </div>

            <div className="flex flex-col w-full md:w-3/5">
              <motion.ul
                className="text-start w-full text-sm  list-none space-y-2 mb-4"
                variants={listVariants}
                initial="hidden"
                animate="visible"
              >
                {listItems.map((item: ServiceListItem, idx: number) => (
                  <motion.li
                    key={idx}
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    {CheckIcon && (
                      <CheckIcon className="w-4 h-4 mr-2 mt-0.5 text-secondary-foreground flex-shrink-0" />
                    )}

                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {ctaText && ctaUrl && (
                <motion.div
                  variants={itemVariants}
                  className="mt-auto w-fit pt-4"
                >
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="bg-accent"
                  >
                    <Link href={ctaUrl}>{ctaText}</Link>
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </AccordionContent> */}
      </AccordionItem>
    </motion.div>
  );
};

const iconMap: Record<string, LucideIcon> = {
  Code,
  PenTool,
  Smartphone,
  ShoppingCart,
  Zap,
};

const ScrollRevealAccordion = () => {
  if (!servicesData || servicesData.length === 0) {
    return (
      <div className="text-center py-10 text-muted-foreground">
        No services information available at the moment.
      </div>
    );
  }

  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-center  my-4 font-bold pt-10 sm:pt-20 mb-8"
      >
        <span className="text-3xl sm:text-4xl">My Services ✨</span>
      </motion.h2>
      <Accordion
        type="single"
        collapsible
        className="w-full text-secondary-foreground mx-auto "
      >
        {servicesData.map((data: ServiceItemData) => {
          const Icon = iconMap[data.iconName];
          return (
            <AccordionMotionItem
              key={data.value}
              {...data}
              IconComponent={Icon}
              CheckIcon={CheckCircle}
            />
          );
        })}
      </Accordion>
    </>
  );
};

export default ScrollRevealAccordion;
