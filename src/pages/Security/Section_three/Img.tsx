import React from "react";
import { motion } from "framer-motion";
import { slideInLeftRight } from "../../../utils/motions/motionVariants";
export function Img() {
  const slideLeft = slideInLeftRight();

  return (
    <motion.fieldset
      variants={slideLeft}
      initial="initial"
      whileInView={"animate"}
      viewport={{ once: true }}
      className="*:size-full *:object-contain items-center"
    >
      <img src="/assets/security/data.png" alt="data breach" />
    </motion.fieldset>
  );
}
