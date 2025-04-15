import React from "react";
import { DownloadAppContent } from "../../../components/DownloadAppContent";
import { motion } from "framer-motion";
import { slideInLeftRight } from "../../../utils/motions/motionVariants";
import { slideInRightLeft } from "../../../utils/motions/motionVariants";

export function Top() {
  const slideFromLeft = slideInLeftRight();
  const slideFromRight = slideInRightLeft();
  return (
    <>
      <section className="flex items-center gap-[100px] bg-gray-150 self-stretch pr-[123px] justify-between w-full">
        <motion.fieldset
          variants={slideFromLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <img
            src="/assets/home_img/section_three_img/family1.png"
            alt="family photo"
            className=" w-auto h-auto object-contain"
          />
        </motion.fieldset>
        <motion.span
          variants={slideFromRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <DownloadAppContent
            heading="Tired of losing track of your vaccinations?"
            article="Our app makes it easy to stay organized and up-to-date. Keep your
            family safe and healthy with our vaccination tracker."
          />
        </motion.span>
      </section>
    </>
  );
}
