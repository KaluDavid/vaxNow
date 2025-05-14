import React from "react";
import { motion } from "framer-motion";
import useRevealOnScroll from "../../../utils/motions/MotionHooks/useRevealOnScroll";
import { revealFromBottom } from "../../../utils/motions/motionVariants";
export function Section_Two() {
  const scaleIn = useRevealOnScroll();
  const scaleBottom = revealFromBottom();
  return (
    <>
      <motion.div
        {...scaleIn}
        className="flex flex-col text-white bg-blue-600 bg-[url('/public/assets/Record_keeping/herovirus.png')] items-center bg-cover justify-between w-full lg:px-[100px] sm:px-[50px] px-[20px] text-blue-800 gap-[60px] sm:py-[100px] py-[50px] sm:text-center overflow-x-hidden"
      >
        <h1 className="font-nunito font-bold leading-[41px] text-[32px] sm:text-[56px] sm:leading-[130%] tracking-[-0.28px] ">
          Learn about vaccines <br className="sm:block hidden" /> through
          engaging videos
        </h1>
        <motion.fieldset
          variants={scaleBottom}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          className=" object-fill flex items-center relative "
        >
          <img
            src="/public/assets/Vaccine_education/doc.png"
            alt="doc"
            className=""
          />
        </motion.fieldset>
      </motion.div>
    </>
  );
}
