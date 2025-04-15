import React from "react";
import { motion } from "framer-motion";
import useRevealOnScroll from "../../../utils/motions/MotionHooks/useRevealOnScroll";
import {
  revealFromBottom,
  slideInLeftRight,
  slideInRightLeft,
} from "../../../utils/motions/motionVariants";

export function Section_two() {
  const reveal = useRevealOnScroll();
  const slideRight = slideInRightLeft();
  const slideLeft = slideInLeftRight();
  const slideBottom = revealFromBottom();
  return (
    <>
      <section className="flex flex-col px-20.5 gap-20 items-center text-blue-800">
        <motion.div
          {...reveal}
          className="items-center bg-darky-gray py-[53px] px-28 gap-[180px] rounded-3xl flex "
        >
          <motion.div
            variants={slideLeft}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            className="flex w-[40rem] items-start flex-col gap-6"
          >
            <h1 className="font-nunito font-bold text-[56px] leading-[130%] tracking-[-0.28px] ">
              Track, understand and improve your well-being
            </h1>
            <span className="text-xl font-normal tracking-[-0.1px] w-[490px] leading-8">
              Record and monitor your health metrics, symptoms, and treatments.
              Gain valuable insights into your health trends and patterns.
            </span>
          </motion.div>

          <motion.fieldset
            variants={slideRight}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
          >
            <img
              src="/public/assets/Record_keeping/image 62.png"
              alt="image 62"
            />
          </motion.fieldset>
        </motion.div>

        <motion.div
          {...reveal}
          className="flex items-end  gap-8 *:bg-blue-50 *:rounded-3xl h-full w-full"
        >
          <motion.fieldset
            variants={slideLeft}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            className="flex flex-col pt-[180px] justify-end items-end *:rounded-b-3xl h-full"
          >
            <img
              src="/public/assets/Record_keeping/lady_and_baby.png"
              alt="lady_and_baby"
            />
          </motion.fieldset>
          <motion.div className="flex flex-col items-end justify-end gap-9 pr-[100px]">
            <motion.div
              variants={slideRight}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="flex  justify-start pl-16 pt-16  w-[40rem] items-start flex-col gap-6"
            >
              <h1 className="font-nunito font-bold text-[56px] leading-[130%] tracking-[-0.28px] ">
                Your data, your privacy!
              </h1>
              <span className="text-xl font-normal tracking-[-0.1px] w-[490px] leading-8">
                Record and monitor your health metrics, symptoms, and
                treatments. Gain valuable insights into your health trends and
                patterns.
              </span>
            </motion.div>
            <motion.fieldset
              variants={slideBottom}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ amount: 0.2, once: true }}
              className="flex items-end justify-end pb-4"
            >
              <img src="/public/assets/Record_keeping/key.png" alt="privacy" />
            </motion.fieldset>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
