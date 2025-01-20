"use client";
import React from "react";
import { motion } from "motion/react";
import { ChildrenProps } from "@/types/global.t";
function TransitionRoute({ children }: ChildrenProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 100 }}
      transition={{ease:"easeInOut",duration:.5}}
    >
      {children}
    </motion.div>
  );
}

export default TransitionRoute;
