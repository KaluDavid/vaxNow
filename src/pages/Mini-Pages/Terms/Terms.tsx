import React from "react";
import { fadeIn } from "../../../utils/motions/motionVariants";
import { motion } from "framer-motion";

export function Terms({
  head,
  children,
}: {
  head: string;
  children: React.ReactNode;
}) {
  // const child = childStagger();
  const scale = fadeIn();
  return (
    <motion.div
      variants={scale}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true }}
      className="flex flex-col items-left gap-2 sm:gap-5"
    >
      <h3 className="font-semibold text-[28px] sm:text-4xl font-nunito sm:leading-[62px]">
        {head}
      </h3>
      <div className="sm:text-xl text-lg font-normal leading-[30px]">
        {children}
      </div>
    </motion.div>
  );
}
