import React from "react";
import { motion } from "framer-motion";
import { childStag } from "../../utils/motions/motionVariants";

export default function HeroImg({ src }: { src: string }) {
  const child = childStag();

  return (
    <motion.img
      variants={child}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      src={src}
      alt="health in Africa"
      className="max-w-full sm:min-w-[200px]"
    />
  );
}
