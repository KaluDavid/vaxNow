import React from "react";
import { Subscribe } from "../../../components/Subscribe";
import { motion } from "framer-motion";
import useRevealOnScroll from "../../../utils/motions/MotionHooks/useRevealOnScroll";
export function Section_Five() {
  const scrollIn = useRevealOnScroll();
  return (
    <>
      <section className="bg-blue-50 flex flex-col w-full justify-center text-blue-800 items-center gap-16 py-[100px] ">
        <motion.h3
          {...scrollIn}
          className="font-semibold text-5xl font-nunito leading-[62px]"
        >
          Affordable health solutions for everyone
        </motion.h3>

        <Subscribe />
      </section>
    </>
  );
}
