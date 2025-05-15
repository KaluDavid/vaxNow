import React from "react";
import { Button } from "../../../components/Button";
import {
  fadeIn,
  revealFromBottom,
  slideInLeftRight,
  slideInRightLeft,
} from "../../../utils/motions/motionVariants";
import { motion } from "framer-motion";
export function Waitlist() {
  const fade = fadeIn();
  const slideRight = slideInRightLeft();
  const slideLeft = slideInLeftRight();
  const slideBottom = revealFromBottom();

  return (
    <>
      <motion.section
        variants={fade}
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true }}
        className="text-blue-800 sm:px-[50px] px-5 xl:px-[80px] flex items-center flex-col pb-[5rem] w-full justify-center gap-[88px] sm:text-center"
      >
        <div className="w-full flex items-center justify-center fold2:rounded-br-[250px] sm:rounded-br-[150px] fold2:rounded-tl-[250px] sm:rounded-tl-[150px] gap-[100px] rounded-bl-[60px] rounded-tr-[60px] shadow-soft-lg bg-blue-50 py-[50px] xl:py-[121px] sm:px-[50px] px-5 xl:px-[170px]">
          <div className="flex flex-col items-center gap-7 w-full">
            <h3 className="font-semibold text-[32px] sm:text-5xl font-nunito sm:leading-[62px] flex items-center sm:gap-[20px] gap-2">
              <motion.span
                variants={slideLeft}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                📬
              </motion.span>
              <motion.span
                variants={slideRight}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                Stay Updated
              </motion.span>
            </h3>

            <motion.div
              variants={slideBottom}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-7 w-full items-center "
            >
              <p className="text-lg sm:text-xl font-normal  leading-[30px]">
                Want to be the first to know when the app drops?
              </p>
              <div className="flex sm:flex-row flex-col *:py-[8px] items-start sm:items-center w-full">
                <input
                  type="email"
                  name="email"
                  placeholder="Please enter your email adress"
                  className="pro11:w-[420px] w-full sm:border-r-0 sm:rounded-r-none h-14.5 pl-4 text-base font-normal rounded-xl border border-input outline-input placeholder:text-input"
                />
                <Button style="sm:rounded-l-none bg-blue-800  flex-row max-sm:text-lg">
                  Subscribe
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
