"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LoadingText() {
  const text = "MTSS AL-AQSHA".split("");
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Minimal tampil 3 detik
    const timer = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="flex justify-center items-center h-screen bg-white relative">
      {/* Ring loading di belakang */}
      <div className="absolute w-40 h-40 border-4 border-gray-300 border-t-[#009688] rounded-full animate-spin" />

      {/* Teks animasi */}
      <h1 className="text-3xl font-bold tracking-widest flex gap-1 z-10">
        {text.map((char, i) => (
          <motion.span
            key={i}
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{
              delay: i * 0.15,
              type: "spring",
              stiffness: 500,
              damping: 20,
            }}
            className={`inline-block px-2 py-1 rounded-md ${
              i % 2 === 0
                ? "bg-[#009688] text-white"
                : "bg-white text-[#009688] border border-[#009688]"
            }`}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h1>
    </div>
  );
}
