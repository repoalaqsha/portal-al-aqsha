"use client";

import { motion } from "framer-motion";

export default function LoadingText() {
  const text = "MTSS AL-AQSHA".split("");

  return (
    <div className="flex justify-center items-center h-screen bg-white relative overflow-hidden">
      {/* Ring loading di belakang */}
      <motion.div
        className="absolute w-40 h-40 border-4 border-gray-300 border-t-[#009688] rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />

      {/* Animasi teks */}
      <motion.h1
        className="text-3xl font-bold tracking-widest flex gap-1 z-10"
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        {text.map((char, i) => (
          <motion.span
            key={i}
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: [1, 1.1, 1], opacity: 1, y: [0, -4, 0] }}
            transition={{
              delay: i * 0.15,
              repeat: Infinity,
              repeatType: "mirror",
              duration: 1.5,
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
      </motion.h1>
    </div>
  );
}
