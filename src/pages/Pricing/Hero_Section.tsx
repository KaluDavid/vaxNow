import React from "react";
import { Download } from "../../components/Download";
import useScaleTop from "../../utils/motions/MotionHooks/useScaleTop";
import { motion } from "framer-motion";
import { parentStagger } from "../../utils/motions/motionVariants";
import WordAnime from "../../utils/motions/WordAnime";
export function Hero_Section() {
  const scaleFromTop = useScaleTop();

  return (
    <>
      <motion.section
        {...scaleFromTop}
        className="flex flex-col justify-center text-center items-start gap-16"
      >
        <div className="flex w-full items-center flex-col gap-6">
          <WordAnime text="Affordable and transparent pricing" />
          <span className="text-xl font-normal tracking-[-0.1px] w-[70%] leading-8">
            Choose the plan that works best for you and your family. Enjoy full
            access to our premium features.
          </span>
          <div className="flex mt-16 items-center w-[52%]">
            <Download playstore="bg-gray-100 *:text-nowrap *:text-blue-800" />
          </div>
        </div>
      </motion.section>
    </>
  );
}
