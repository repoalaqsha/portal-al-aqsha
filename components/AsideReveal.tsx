"use client";

import { motion, Variants } from "framer-motion";
import { PropsWithChildren } from "react";
import clsx from "clsx";

type AsideRevealProps = PropsWithChildren<{
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
}>;

export default function AsideReveal({
  children,
  className,
  direction = "up",
  delay = 0,
}: AsideRevealProps) {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.aside
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={clsx("w-full", className)}
    >
      {children}
    </motion.aside>
  );
}
