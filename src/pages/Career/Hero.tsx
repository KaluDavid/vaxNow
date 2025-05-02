import React from "react";
import { Download } from "../../components/Download";
import useScaleTop from "../../utils/motions/MotionHooks/useScaleTop";
import { motion } from "framer-motion";
import { childStag, parentStagger } from "../../utils/motions/motionVariants";

export function Hero() {
  const scaleFromTop = useScaleTop();
  const parent = parentStagger();
  const child = childStag();
  return (
    <>
      <div className="flex items-center justify-between w-full px-[100px] text-blue-800  overflow-x-hidden">
        <motion.div
          {...scaleFromTop}
          className="flex flex-col items-start text-left"
        >
          <div className="flex w-[40rem] items-start flex-col gap-6">
            <h1 className="font-nunito font-bold text-[56px] leading-[130%] tracking-[-0.28px] ">
              Join us to revolutionize healthcare in Africa!{" "}
            </h1>
            <span className="text-xl font-normal tracking-[-0.1px] w-[490px] leading-8">
              We are passionate about making healthcare accessible, organized,
              and efficient, particularly in Africa.
            </span>

            <div className="flex items-start  flex-col">
              <Download playstore="*:text-blue-800 bg-gray-100" />
            </div>
          </div>
        </motion.div>

        <motion.fieldset
          variants={parent}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          className="*:size-full *:object-contain grid  grid-cols-2 gap-5 *:first:row-span-2 items-center"
        >
          <motion.img
            variants={child}
            initial="hidden"
            animate={"visible"}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
            src="/assets/Career/img1.png"
            alt="health in Africa"
          />
          <motion.img
            variants={child}
            initial="hidden"
            animate={"visible"}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
            src="/assets/Career/img2.png"
            alt="health in Africa"
          />
          <motion.img
            variants={child}
            initial="hidden"
            animate={"visible"}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.9 }}
            src="/assets/Career/im3.png"
            alt="health in Africa"
          />
        </motion.fieldset>
      </div>
    </>
  );
}
