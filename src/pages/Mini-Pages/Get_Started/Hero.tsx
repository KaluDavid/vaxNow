import React from "react";
import { motion } from "framer-motion";
import useScaleTop from "../../../utils/motions/MotionHooks/useScaleTop";
import Atropos from "atropos/react";
import useRevealOnScroll from "../../../utils/motions/MotionHooks/useRevealOnScroll";

const phoneVaraint = {
  initial: { width: 0 },

  animate: {
    width: "390px",
    transition: { duration: 0.8 },
  },
};
function Hero() {
  const scaleFromTop = useScaleTop();
  const reveal = useRevealOnScroll();

  return (
    <>
      <motion.div
        {...reveal}
        className="flex text-white bg-blue-600 bg-[url('/public/assets/Record_keeping/herovirus.png')] items-center bg-cover justify-between w-full px-[100px] text-blue-800 py-[100px] overflow-x-hidden"
      >
        <motion.div
          {...scaleFromTop}
          className="flex w-[40rem] *:text-white items-start flex-col gap-6"
        >
          <h1 className="font-nunito font-bold text-[56px] leading-[130%]  tracking-[-0.28px] flex items-center gap-4">
            🛡️ Welcome to VaxNow
          </h1>
          <motion.span className="text-xl font-normal tracking-[-0.1px] w-[590px] leading-8">
            With VaxNow, taking charge of your health and your family's
            well-being has never been easier. We connect you with trusted
            vaccination insights, reminders, and tools to help you stay
            protected—anytime, anywhere.
          </motion.span>
        </motion.div>

        <motion.fieldset
          variants={phoneVaraint}
          initial="initial"
          animate="animate"
          className="w-[390px] h-[575px] object-contain flex *:bg-white"
        >
          <img
            src="/public/assets/Doc.png"
            alt="vaccine tracker"
            className=" rounded-[30px] border-[#002F56] border-[10px] object-fill size-auto  mr-[8.5%]"
          />
        </motion.fieldset>
      </motion.div>
    </>
  );
}

export default Hero;
