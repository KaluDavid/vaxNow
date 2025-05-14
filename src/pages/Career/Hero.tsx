import React from "react";
import { Download } from "../../components/Download";
import useScaleTop from "../../utils/motions/MotionHooks/useScaleTop";
import { motion } from "framer-motion";
import { parentStagger } from "../../utils/motions/motionVariants";
import HeroImg from "./HeroImg";

export function Hero() {
  const scaleFromTop = useScaleTop();
  const parent = parentStagger();
  return (
    <>
      <div className="flex lg:flex-row flex-col items-center justify-between w-full xl:px-[100px] sm:px-[50px] px-[20px]  text-blue-800  overflow-x-hidden xl:gap-0 gap-10 sm:gap-18 lg:gap-4">
        <motion.div
          {...scaleFromTop}
          className="flex flex-col items-start text-left"
        >
          <div className="flex lg:w-[35rem] xl:w-[40rem] items-start flex-col gap-6">
            <h1 className="font-nunito font-bold text-[32px] leading-[41px] sm:text-[56px] sm:leading-[130%] tracking-[-0.28px] ">
              Join us to revolutionize healthcare in Africa!
            </h1>
            <span className="sm:text-xl text-lg font-normal tracking-[-0.1px] sm:w-[490px] w-full leading-8">
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
          className="*:size-full *:object-contain grid  grid-cols-2 sm:gap-5 gap-2 lg:max-xl:gap-0 *:first:row-span-2 items-center"
        >
          <HeroImg src="/assets/Career/img1.png" />
          <HeroImg src="/assets/Career/img2.png" />
          <HeroImg src="/assets/Career/im3.png" />
        </motion.fieldset>
      </div>
    </>
  );
}
