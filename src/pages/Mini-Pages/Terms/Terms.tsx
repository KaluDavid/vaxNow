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
      className="flex flex-col items-left gap-5"
    >
      <h3 className="font-semibold text-4xl font-nunito leading-[62px]">
        {head}
      </h3>
      <div className="text-xl font-normal leading-[30px]">{children}</div>
    </motion.div>
  );
}
