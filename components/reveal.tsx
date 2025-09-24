// components/Reveal.tsx
"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export default function Reveal({ children }: PropsWithChildren) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className="w-full lg:col-span-3"
    >
      {children}
    </motion.div>
  );
}
