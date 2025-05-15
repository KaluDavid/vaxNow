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
      <section className="flex lg:flex-row flex-col items-center gap-[50px] sm:gap-[100px]  self-stretch xl:pr-[123px] lg:pr-[50px] justify-between w-full sm:max-lg:pb-[50px] pb-5 lg:pb-0">
        <motion.fieldset
          variants={slideFromLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <img
            src="/assets/home_img/section_three_img/family1.png"
            alt="family photo"
            className=" w-auto lg:pr-0 sm:max-lg:pr-[50px] pr-5 h-auto object-contain lg:min-w-[532px]"
          />
        </motion.fieldset>
        <motion.span
          variants={slideFromRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="sm:max-lg:px-[50px] lg:px-0 px-5 "
        >
          <DownloadAppContent
            heading="Tired of losing track of your vaccinations?"
            article="Our app makes it easy to stay organized and up-to-date. Keep your
            family safe and healthy with our vaccination tracker."
            headStyle="lg:max-xl:text-[40px] lg:max-xl:leading-[50px]"
            style="lg:max-xl:gap-8"
          />
        </motion.span>
      </section>
    </>
  );
}
