"use client";

import Loading from "@/app/loading";
import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";

export default function LogoAnimation() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading 3 detik
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Variants sekarang sesuai tipe `Variants`
  const letterVariants: Variants = {
    hidden: (i: number) => ({
      opacity: 0,
      x: i % 2 === 0 ? -50 : 50, // huruf genap ke kiri, ganjil ke kanan
      y: -30,
    }),
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: i * 0.1,
      },
    }),
  };

  const logo = "AQSHA"; // contoh logo teks

  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <motion.div
        className="flex space-x-2 text-6xl font-bold"
        initial="hidden"
        animate="visible"
      >
        {logo.split("").map((char, i) => (
          <motion.span key={i} variants={letterVariants} custom={i}>
            {char}
          </motion.span>
        ))}
      </motion.div>

      {!isLoading && <Loading />}
    </div>
  );
}
