import React from "react";
import { FaPlayCircle } from "react-icons/fa";
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
        className="flex flex-col text-white bg-blue-600 bg-[url('/public/assets/Record_keeping/herovirus.png')] items-center bg-cover justify-between w-full px-[100px] text-blue-800 gap-[60px] py-[100px] text-center overflow-x-hidden"
      >
        <h1 className="font-nunito font-bold text-[56px] leading-[130%] tracking-[-0.28px] ">
          Learn about vaccines <br /> through engaging videos
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
          <span className="absolute text-xl ml-[25rem] ">
            <FaPlayCircle />
          </span>
        </motion.fieldset>
      </motion.div>
    </>
  );
}
