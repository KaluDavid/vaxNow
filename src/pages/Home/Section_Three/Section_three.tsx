import React from "react";
import { Top } from "./Top";
import { Bottom } from "./Bottom";
import useRevealOnScroll from "../../../utils/motions/MotionHooks/useRevealOnScroll";
import { motion } from "framer-motion";

export function Section_three() {
  const scrollIn = useRevealOnScroll();
  return (
    <>
      <motion.section
        {...scrollIn}
        className="flex flex-col xl:gap-0 gap-[64px] items-center w-full bg-gray-150"
      >
        <Top />
        <Bottom />
      </motion.section>
    </>
  );
}
