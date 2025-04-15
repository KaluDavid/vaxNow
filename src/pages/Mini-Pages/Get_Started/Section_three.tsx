import React from "react";
import { Button } from "../../../components/Button";
import {
  slideInRightLeft,
  slideInLeftRight,
  scaleIn,
} from "../../../utils/motions/motionVariants";
import { motion } from "framer-motion";

export function Section_three() {
  const scale = scaleIn();
  const slideRight = slideInRightLeft();
  const slideLeft = slideInLeftRight();
  return (
    <>
      <motion.section
        variants={scale}
        initial={"initial"}
        whileInView={"animate"}
        viewport={{ once: true }}
        className="text-blue-800 px-[80px] flex items-center pb-[5rem] flex-col justify-center gap-[88px] text-center"
      >
        <div className="w-full flex items-center justify-center rounded-br-[250px] rounded-tl-[250px] gap-[100px] rounded-bl-[60px] rounded-tr-[60px] shadow-soft-lg bg-blue-50 py-[121px] px-[170px]">
          <div className="flex flex-col items-center gap-5">
            <h3 className="font-semibold text-5xl font-nunito leading-[62px]">
              Ready to Begin?
            </h3>
            <p className="text-xl font-normal  leading-[30px]">
              Click the button below to download the main app and unlock a world
              of trusted health services designed just for you.
            </p>
            <div className="flex  *:py-[8px] items-center gap-6">
              <motion.span
                variants={slideLeft}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <Button to="/DownloadApp" style="bg-blue-800 w-full flex-row">
                  <img src="/public/assets/whiteapple.svg" alt="" />
                  <span className="flex flex-col items-start text-base text-left">
                    <small className="text-[12px]">Download on the</small>
                    <strong>App Store</strong>
                  </span>
                </Button>
              </motion.span>
              <motion.span
                variants={slideRight}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <Button to="/DownloadApp" style="bg-blue-800 w-full flex-row">
                  <img src="/public/assets/playstore.svg" alt="" />
                  <span className="flex flex-col items-start text-base text-left">
                    <small className="text-[12px]">Download on the</small>
                    <strong>App Store</strong>
                  </span>
                </Button>
              </motion.span>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
