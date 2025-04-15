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
        className="text-blue-800 px-[80px] flex items-center flex-col pb-[5rem] justify-center gap-[88px] text-center"
      >
        <div className="w-full flex items-center justify-center rounded-br-[250px] rounded-tl-[250px] gap-[100px] rounded-bl-[60px] rounded-tr-[60px] shadow-soft-lg bg-blue-50 py-[121px] px-[170px]">
          <div className="flex flex-col items-center gap-7">
            <h3 className="font-semibold text-5xl font-nunito leading-[62px] flex items-center gap-[20px]">
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
              className="flex flex-col gap-7 items-center "
            >
              <p className="text-xl font-normal  leading-[30px]">
                Want to be the first to know when the app drops?
              </p>
              <div className="flex *:py-[8px] items-center">
                <input
                  type="email"
                  name="email"
                  placeholder="Please enter your email adress"
                  className="w-[420px] border-r-0 rounded-r-none h-14.5 pl-4 text-base font-normal rounded-xl border border-input outline-input placeholder:text-input"
                />
                <Button style="rounded-l-none bg-blue-800  flex-row">
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
