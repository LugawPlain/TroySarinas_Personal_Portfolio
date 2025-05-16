"use client";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const MarqueeGroup1 = () => {
  return (
    <div className="relative max-w-screen max-h-16 z-10 min-h-16 flex-center ">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100vw" }}
        transition={{ delay: 1.75, duration: 1, ease: "easeIn" }}
        className="absolute top-[-1] w-screen h-20 bg-background z-20 "
      ></motion.div>
      <Marquee className="relative flex-center top-0 bg-secondary/80 h-16 text-secondary-foreground py-4 ">
        <div className="flex-center gap-1 md:gap-1 px-2 py-4 group/swift">
          <Image
            className="transition-transform duration-500 group-hover/swift:scale-150"
            src="/Icons/swift-svgrepo-com.svg"
            alt="s"
            width={24}
            height={24}
          ></Image>
          <h1 className="cursor-default">Swift</h1>
        </div>
        <div className="flex-center gap-1 md:gap-1 px-2 py-4 group/kotlin">
          <Image
            className="transition-transform duration-500 group-hover/kotlin:scale-150"
            src="/Icons/kotlin-svgrepo-com.svg"
            alt="s"
            width={24}
            height={24}
          ></Image>
          <h1 className="cursor-default">Kotlin</h1>
        </div>
        <div className="flex-center gap-1 md:gap-1 px-2 py-4 group/wix">
          <Image
            className="transition-transform duration-500 group-hover/wix:scale-150"
            src="/Icons/wix-svgrepo-com.svg"
            alt="s"
            width={24}
            height={24}
          ></Image>
          <h1 className="cursor-default">Wix</h1>
        </div>
        <div className="flex-center gap-1 md:gap-1 px-2 py-4 group/shopify">
          <Image
            className="transition-transform duration-500 group-hover/shopify:scale-150"
            src="/Icons/shopify-svgrepo-com.svg"
            alt="s"
            width={24}
            height={24}
          ></Image>
          <h1 className="cursor-default">Shopify</h1>
        </div>
        <div className="flex-center gap-1 md:gap-1 px-2 py-4 group/woocommerce">
          <Image
            className="transition-transform duration-500 group-hover/woocommerce:scale-150"
            src="/Icons/woocommerce-svgrepo-com.svg"
            alt="s"
            width={70}
            height={70}
          ></Image>
          <h1 className="cursor-default">WooCommerce</h1>
        </div>
        <div className="flex-center gap-1 md:gap-1 px-2 py-4 group/wordpress">
          <Image
            className="transition-transform duration-500 group-hover/wordpress:scale-150"
            src="/Icons/wordpress-color-svgrepo-com.svg"
            alt="s"
            width={24}
            height={24}
          ></Image>
          <h1 className="cursor-default">WordPress</h1>
        </div>
        <div className="flex-center gap-1 md:gap-1 px-2 py-4 group/squarespace">
          <Image
            className="transition-transform duration-500 group-hover/squarespace:scale-150"
            src="/Icons/squarespace-svgrepo-com.svg"
            alt="s"
            width={24}
            height={24}
          ></Image>
          <h1 className="cursor-default">Squarespace</h1>
        </div>
        <div className="flex-center gap-1 md:gap-1 px-2 py-4 group/n8n">
          <Image
            className="transition-transform duration-500 group-hover/n8n:scale-150"
            src="/Icons/n8n-color.svg"
            alt="s"
            width={30}
            height={30}
          ></Image>
          <h1 className="cursor-default">n8n</h1>
        </div>
        <div className="flex-center gap-1 md:gap-1 px-2 py-4 group/make">
          <Image
            className="transition-transform duration-500 group-hover/make:scale-150"
            src="/Icons/make-color.svg"
            alt="s"
            width={28}
            height={28}
          ></Image>
          <h1 className="cursor-default">Make</h1>
        </div>
        <div className="flex-center gap-1 md:gap-1 px-2 py-4 group/zapier">
          <Image
            className="transition-transform duration-500 group-hover/zapier:scale-150"
            src="/Icons/zapier-svgrepo-com.svg"
            alt="s"
            width={40}
            height={40}
          ></Image>
          <h1 className="cursor-default">Zapier</h1>
        </div>
        <div className="flex-center gap-1 md:gap-1 px-2 py-4 group/hubspot">
          <Image
            className="transition-transform duration-500 group-hover/hubspot:scale-150"
            src="/Icons/hubspot-svgrepo-com.svg"
            alt="s"
            width={24}
            height={24}
          ></Image>
          <h1 className="cursor-default">HubSpot</h1>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeGroup1;
