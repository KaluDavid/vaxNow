import React from "react";
import WordAnime from "../../../utils/motions/WordAnime";
import {
  slideInLeftRight,
  slideInRightLeft,
} from "../../../utils/motions/motionVariants";
import useRevealOnScroll from "../../../utils/motions/MotionHooks/useRevealOnScroll";
import { motion } from "framer-motion";

export function Section_three() {
  const onScroll = useRevealOnScroll();
  const slideRight = slideInRightLeft();
  const slideLeft = slideInLeftRight();
  return (
    <>
      <motion.div
        {...onScroll}
        className="flex gap-[88px] text-white bg-blue-600 bg-[url('/public/assets/Record_keeping/herovirus.png')] items-start gap-0 bg-cover justify-start w-full pr-[100px] text-blue-800  overflow-x-hidden"
      >
        <motion.fieldset
          variants={slideLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <img
            src="/public/assets/larry.png"
            alt="Larry Brilliant"
            className="w-full h-full"
          />
        </motion.fieldset>
        <motion.div
          variants={slideRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex gap-[40px] pt-[110px] flex-col items-start text-left"
        >
          <p className="text-[128px] leading-0 font-bold font-oleo-script text-blue-800 ">
            “
          </p>
          <div className="flex items-start flex-col gap-[20px]">
            <h1 className="font-bold text-[40px] leading-[60px] tracking-[-0.28px]">
              Vaccines are one of the few things that mankind has done where we
              can actually take a disease and eliminate it from the face of the
              earth.
            </h1>
            <span className="flex items-start flex-col text-xl font-normal tracking-[-0.1px]">
              <span className="text-3xl font-semibold font-nunito">
                Larry Brilliant
              </span>
              <small>Epidemiologist</small>
            </span>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
