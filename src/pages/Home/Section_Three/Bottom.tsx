import React from "react";
import { DownloadAppContent } from "../../../components/DownloadAppContent";
import { motion } from "framer-motion";
import {
  slideInLeftRight,
  slideInRightLeft,
} from "../../../utils/motions/motionVariants";
export function Bottom() {
  const slideFromLeft = slideInLeftRight();
  const slideFromRight = slideInRightLeft();
  return (
    <>
      <section className="flex items-center gap-[100px] bg-gray-150 self-stretch pl-[123px] justify-between w-full">
        <motion.span
          variants={slideFromLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <DownloadAppContent
            heading="Tired from managing medication schedules?"
            article="        Simplify your life with ImmuniSafe. Track, manage, and adhere to your
                medication plan effortlessly"
          />
        </motion.span>
        <motion.fieldset
          variants={slideFromRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <img
            src="/assets/home_img/section_three_img/lady.png"
            alt="family photo"
            className=" w-auto h-auto object-contain"
          />
        </motion.fieldset>
      </section>
    </>
  );
}
