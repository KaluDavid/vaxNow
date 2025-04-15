import React from "react";
import { Download } from "../../components/Download";
import { motion, useReducedMotion } from "framer-motion";
import useScaleTop from "../../utils/motions/MotionHooks/useScaleTop";

const entryVariants = {
  hidden: { opacity: 0, x: "100vh" },
  visible: { opacity: 1, x: -0 },
};

export function Hero() {
  const scaleFromTop = useScaleTop();
  const shouldReducedMotion = useReducedMotion();

  return (
    <>
      <section className="flex items-center justify-between w-full px-[100px] text-blue-800  overflow-x-hidden">
        <motion.div
          {...scaleFromTop}
          className="flex flex-col items-start text-left"
        >
          <div className="flex w-[40rem] items-start flex-col gap-6">
            <h1 className="font-nunito font-bold text-[56px] leading-[130%] tracking-[-0.28px] ">
              Track, Manage, Protect All in one place
            </h1>
            <span className="text-xl font-normal tracking-[-0.1px] w-[490px] leading-8">
              With ImmuniSafe, you have access to vital health services at your
              fingertips, ensuring better care, timely reminders, and reliable
              records wherever you are.
            </span>

            <div className="flex items-start  flex-col">
              <Download playstore="bg-gray-100 *:text-blue-800" />
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
          }}
          className="rounded-tl-[250px] rounded-sm bg-blue-50 "
        >
          <fieldset className="w-full h-full flex items-end justify-end object-contain pt-[49px] pl-[114px]">
            <img
              src="/public/assets/Features_img/hand.png"
              alt=""
              className=" object-fill"
            />
          </fieldset>
        </motion.div>
      </section>
    </>
  );
}
