import React from "react";
import { motion } from "framer-motion";
import useRevealOnScroll from "../../../utils/motions/MotionHooks/useRevealOnScroll";
import WordAnime from "../../../utils/motions/WordAnime";
import {
  slideInLeftRight,
  slideInRightLeft,
} from "../../../utils/motions/motionVariants";

export function Section_three() {
  const reveal = useRevealOnScroll();
  const slideLeft = slideInLeftRight();
  const slideRight = slideInRightLeft();

  return (
    <>
      <div className="flex items-center flex-col justify-between size-full text-blue-800  bg-no-repeat  gap-20 text-left">
        <WordAnime style="!text-5xl" text="Data breach response plan" />

        <motion.div
          {...reveal}
          className="grid grid-cols-2 gap-20 items-center *:last:grid *:last:grid-cols-1 *:last:gap-20 pr-52"
        >
          <motion.fieldset
            variants={slideLeft}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            className="*:size-full *:object-contain items-center"
          >
            <img src="/assets/security/data.png" alt="data breach" />
          </motion.fieldset>
          <motion.div
            variants={slideRight}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
          >
            <p className="text-xl col-span-1 font-nunito-sans font-normal leading-[30px]">
              In the unlikely event of a data breach, Vaxnow has a comprehensive
              response plan in place. We will promptly inform affected users,
              take immediate steps to mitigate the breach, and work with
              regulatory bodies to resolve the situation.
            </p>
            <p className="text-xl font-nunito-sans font-normal leading-[30px]">
              Our team is trained to handle such incidents swiftly and
              transparently to minimize any risk to your data.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          {...reveal}
          className="bg-blue-50 px-20 pb-[76px] pt-[84px] w-full text-blue-800"
        >
          <div className="py-6 pl-6 rounded-2xl flex   w-full items-center border border-blue-600 rounded-tr-[100px] gap-8 *:last:grid *:last:gap-4 *:last:grid-cols-1 pr-44">
            <motion.fieldset
              variants={slideLeft}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="*:w-[450px]  *:object-contain items-center"
            >
              <img src="/assets/security/security.png" alt="security" />
            </motion.fieldset>
            <motion.div
              variants={slideRight}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
            >
              <h1 className="text-left font-nunito text-[42px] font-semibold leading-16">
                Questions about your data security?
              </h1>
              <p className="text-xl font-nunito-sans font-normal leading-[30px]">
                If you have any questions or concerns regarding how we handle
                and protect your data, feel free to reach out to our Security
                Team at security@vacineapp.com.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
