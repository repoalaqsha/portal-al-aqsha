"use client";

import SchoolProfilePage from "@/components/profile-school";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HomePage() {
  const targetRef = useRef(null);

  // Track scroll section "about"
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["0 1", "1 1"],
  });

  // Scale dari kecil (0.5) ke normal (1)
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  // Bisa kasih sedikit fade biar smooth
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <div className="space-y-10 ">
      {/* Hero */}
      <section className=" flex items-center justify-center bg-gray-200">
      
        <SchoolProfilePage />
      </section>

      {/* About dengan animasi scale on scroll */}
      <motion.section
        ref={targetRef}
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ scale, opacity }}
        className="h-screen flex items-center justify-center bg-green-200"
      ></motion.section>

      {/* Extra section biar ada space scroll */}
      <section className="h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-xl">Scroll terus untuk lihat efek kombinasi ✨</p>
      </section>
    </div>
  );
}
