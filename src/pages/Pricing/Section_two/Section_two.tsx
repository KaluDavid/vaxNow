import React from "react";
import { Subscribe } from "../../../components/Subscribe";
import { Button } from "../../../components/Button";
import { motion } from "framer-motion";
import useRevealOnScroll from "../../../utils/motions/MotionHooks/useRevealOnScroll";
import { revealFromBottom } from "../../../utils/motions/motionVariants";

export function Section_two() {
  const slideBottom = revealFromBottom();
  const reveal = useRevealOnScroll();

  return (
    <>
      <motion.section
        {...reveal}
        className="bg-blue-50 w-full flex flex-col justify-center text-blue-800 items-center gap-16 py-[100px] "
      >
        <motion.span viewport={{ amount: 20 }}>
          {" "}
          <Subscribe />{" "}
        </motion.span>
        <motion.div
          variants={slideBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center flex-col gap-9"
        >
          <p className="font-nunito-sans text-2xl font-normal">
            14-day free trial. No card required. Cancel anytime
          </p>
          <Button to="/DownloadApp">Download App</Button>
        </motion.div>
      </motion.section>
    </>
  );
}
