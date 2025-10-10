"use client";

import { motion } from "framer-motion";
import logo from "../app/logo.png";

export default function LogoBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
      <motion.div
        className="absolute w-[150%] h-[200%] top-[-25%] left-[-25%] opacity-10"
        style={{
          backgroundImage: `url('${logo.src}')`,
          backgroundRepeat: "repeat",
          backgroundSize: "120px 120px",
          transform: "rotate(-20deg)",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "200px 200px"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
