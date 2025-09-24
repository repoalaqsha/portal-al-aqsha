// components/Reveal.tsx
"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export default function KepsekReveal({ children }: PropsWithChildren) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 50 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 2, ease: "easeIn" }}
      className="w-full col-span-1 lg:col-span-6 mb-20 lg:mb-0"
    >
      {children}
    </motion.div>
  );
}
