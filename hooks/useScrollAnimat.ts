// hooks/useScrollAnimation.ts
"use client";

import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export function useScrollAnimation() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return { ref, scale, opacity };
}
