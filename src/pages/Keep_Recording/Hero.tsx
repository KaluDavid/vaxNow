import React from "react";
import { Download } from "../../components/Download";
import { MdLock, MdAddToDrive, MdOutlineSecurity } from "react-icons/md";
import { BsCloudUploadFill } from "react-icons/bs";
import { motion, useReducedMotion } from "framer-motion";
import useScaleTop from "../../utils/motions/MotionHooks/useScaleTop";
import { childStagger } from "../../utils/motions/motionVariants";
import useRevealOnScroll from "../../utils/motions/MotionHooks/useRevealOnScroll";
const entryVariants = {
  hidden: { opacity: 0, x: "100vh" },
  visible: { opacity: 1, x: 0 },
};

export function Hero() {
  const scaleFromTop = useScaleTop();
  const shouldReducedMotion = useReducedMotion();
  const child = childStagger();
  const reveal = useRevealOnScroll();
  return (
    <>
      <motion.div
        {...reveal}
        className="flex text-white bg-blue-600 bg-[url('/public/assets/Record_keeping/herovirus.png')] items-center bg-cover justify-between w-full px-[100px] text-blue-800 py-[100px] overflow-x-hidden "
      >
        <motion.div
          {...scaleFromTop}
          className="flex !text-white flex-col items-start text-left"
        >
          <div className="flex w-[40rem] items-start flex-col gap-6">
            <h1 className="font-nunito font-bold text-[56px] leading-[130%] tracking-[-0.28px] ">
              Your health history At your fingertips
            </h1>
            <span className="text-xl font-normal tracking-[-0.1px] w-[490px] leading-8">
              Store all your vital health information in one secure place.
              Retrieve your records anytime, anywhere, with just a few taps.
            </span>

            <div className="flex items-start  flex-col">
              <Download
                button=" bg-white *:text-blue-600"
                playstore="bg-dark-gray px-[0px] *:text-white"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={entryVariants}
          initial="hidden"
          animate={shouldReducedMotion ? {} : "visible"}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="relative"
        >
          <fieldset className=" object-fill flex w-[500px] pt-[66px] px-[89px] pb-[53px] items-end justify-end bg-white rounded-full ">
            <img
              src="/public/assets/Record_keeping/Vaccine Tracker.png"
              alt="vaccine tracker"
              className=" rounded-t-[35px] border-[#002F56] border-x-[10px] border-t-[10px] object-fill h-[25rem] mr-[5.5%] rounded-b-[13px] mb-[-16px]"
            />
          </fieldset>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { staggerChildren: 0.25, duration: 0.8, delay: 0.9 },
            }}
            viewport={{ once: true }}
            className="flex items-end justify-end flex-col [&_span]:rounded-full [&_span]:flex [&_span]:items-center [&_span]:justify-center  absolute mt-[-14rem]  ml-[-1rem]"
          >
            <motion.span
              variants={child}
              className="w-[100px] text-[50px] h-[100px] bg-blue-900 z-20 "
            >
              <MdLock />
            </motion.span>
            <motion.span
              variants={child}
              className="w-20 text-5xl p-6.5 h-20 bg-red-600 mt-[-1.2rem] mr-[-1rem]"
            >
              <MdOutlineSecurity />
            </motion.span>
            <motion.span
              variants={child}
              className="w-[60px] h-[60px] p-5 bg-pink-500 text-[40px]  rotate-180 mr-[-3rem] mt-[-1.3rem]"
            >
              <BsCloudUploadFill />
            </motion.span>
            <motion.span
              variants={child}
              className="bg-orange-400 text-[32px] p-3.5 w-[50px] h-[50px] z-10 mr-[-5rem] mt-[-1.5rem]"
            >
              <MdAddToDrive />
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
