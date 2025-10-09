"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type HoverLiftAnimatedProps = {
  children: ReactNode;
};

export default function HoverLiftAnimated({
  children,
}: HoverLiftAnimatedProps) {
  return (
    <div className="flex flex-col ">
      {Array.isArray(children) ? (
        children.map((child, i) => (
          <motion.div
            key={i}
            whileHover={{
              y: -8,
              boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className=" p-3 rounded-xl shadow-md cursor-pointer"
          >
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div
          whileHover={{
            y: -8,
            boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
          className=" p-3 rounded-xl shadow-md cursor-pointer"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}
