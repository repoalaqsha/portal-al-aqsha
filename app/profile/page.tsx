"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HomePage() {
  const targetRef = useRef(null);

  // Scroll tracking untuk animasi progresif
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["0 1", "1 1"],
    // "0 1" => top of section ketemu bottom viewport
    // "1 1" => bottom of section ketemu bottom viewport
  });

  // Animasi dinamis bergantung scroll
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);

  return (
    <div className="space-y-40 p-10">
      {/* Hero */}
      <section className="h-screen flex items-center justify-center bg-gray-200">
  
          <h1 className="text-4xl font-bold">Hero Section</h1>
      
      </section>

      {/* About dengan kombinasi animasi */}
      <motion.section
        ref={targetRef}
        id="about"
        // Animasi sekali saat masuk viewport
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        // Animasi progresif saat scroll
        style={{ scale, rotate }}
        className="h-screen flex items-center justify-center bg-green-200"
      >
        <h2 className="text-4xl font-bold">About Section 🚀</h2>
      </motion.section>

      {/* Extra section biar ada space scroll */}
      <section className="h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-xl">Scroll terus untuk lihat efek kombinasi ✨</p>
      </section>
    </div>
  );
}
