import React from "react";
import useRevealOnScroll from "../../../utils/motions/MotionHooks/useRevealOnScroll";
import {
  revealFromBottom,
  slideInLeftRight,
  slideInRightLeft,
} from "../../../utils/motions/motionVariants";
import { motion } from "framer-motion";

export function Section_three() {
  const reveal = useRevealOnScroll();
  const slideRight = slideInRightLeft();
  const slideLeft = slideInLeftRight();
  const slideBottom = revealFromBottom();

  return (
    <>
      <motion.div
        {...reveal}
        className="flex text-white bg-blue-600 bg-[url('/public/assets/Record_keeping/herovirus.png')] items-center gap-0 bg-cover justify-between w-full px-[100px] text-blue-800 py-[100px] overflow-x-hidden"
      >
        <motion.div
          variants={slideBottom}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          className="flex flex-col items-start text-left"
        >
          <div className="flex items-start flex-col gap-6">
            <h1 className="font-nunito font-bold text-[56px] leading-[130%] tracking-[-0.28px] ">
              Easy sharing with doctors
            </h1>
            <span className="text-xl font-normal tracking-[-0.1px] w-[490px] leading-8">
              Connect with qualified doctors for personalized consultations.
              Your conversations with doctors are strictly confidential.
            </span>
          </div>
        </motion.div>

        <motion.fieldset
          variants={slideRight}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true }}
          className=""
        >
          <img
            src="/public/assets/Record_keeping/sharing_with_doctors.png"
            alt="sharing_with_doctors"
          />
        </motion.fieldset>
      </motion.div>
    </>
  );
}
