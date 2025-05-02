"use client";
import React, { useRef, ComponentType } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  servicesData,
  ServiceItemData,
  ServiceListItem,
} from "@/data/services";

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

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
    image,
    listItems,
    ctaText,
    ctaUrl,
    CheckIcon,
  } = props;
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <AccordionItem
        className="bg-card mb-4 border-none rounded-md overflow-hidden shadow-sm"
        value={value}
      >
        <AccordionTrigger className="text-xl text-left hover:bg-muted/50 hover:no-underline px-4 py-3 group">
          <div className="flex items-center space-x-3">
            {IconComponent && (
              <IconComponent className="w-5 h-5 text-primary flex-shrink-0" />
            )}
            <span>{title}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <motion.div
            key="content"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={listVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex flex-col md:flex-row items-start py-4 px-4 overflow-hidden"
          >
            <div className="relative w-full md:w-2/5 aspect-[350/400] mb-4 md:mb-0 md:mr-6 flex-shrink-0">
              <Image
                src={image}
                fill
                style={{ objectFit: "contain" }}
                alt={`${title} service illustration`}
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>

            <div className="flex flex-col w-full md:w-3/5">
              <motion.ul
                className="text-start w-full text-sm list-none space-y-2 mb-4"
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
                      <CheckIcon className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                    )}
                    {item.url ? (
                      <Link
                        href={item.url}
                        className="hover:underline text-foreground hover:text-primary transition-colors"
                      >
                        {item.text}
                      </Link>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </motion.li>
                ))}
              </motion.ul>

              {ctaText && ctaUrl && (
                <motion.div variants={itemVariants} className="mt-auto pt-4">
                  <Button asChild variant="outline" size="sm">
                    <Link href={ctaUrl}>{ctaText}</Link>
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </AccordionContent>
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
    <Accordion
      type="multiple"
      className="w-full text-card-foreground max-w-4xl mx-auto space-y-4 px-4"
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
  );
};

export default ScrollRevealAccordion;
