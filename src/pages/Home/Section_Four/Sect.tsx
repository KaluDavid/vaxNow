import React from "react";
import { motion } from "framer-motion";
import {
  rotateIcon,
  slideInRightLeft,
  slideInLeftRight,
} from "../../../utils/motions/motionVariants";
interface SectProps {
  title1: string;
  title2: string;
  body1: string;
  body2: string;
  img1: string;
  img2: string;
}

export default function Sect({
  title1,
  title2,
  body1,
  body2,
  img1,
  img2,
}: SectProps) {
  const rotate = rotateIcon();
  const slideInRight = slideInRightLeft();
  const slideInLeft = slideInLeftRight();
  return (
    <>
      <motion.div
        variants={{}}
        className="flex items-start flex-col gap-8 *:flex *:flex-col *:gap-5 "
      >
        <div>
          <fieldset>
            <motion.img
              variants={rotate}
              whileInView="animate"
              viewport={{ once: true }}
              src={img1}
              alt="health record"
            />
          </fieldset>
          <motion.h4
            variants={slideInRight}
            whileInView={"animate"}
            initial={"initial"}
            viewport={{ once: true }}
            className="font-semibold text-xl font-nunito "
          >
            {title1}
          </motion.h4>
          <motion.p
            variants={slideInLeft}
            whileInView={"animate"}
            initial={"initial"}
            viewport={{ once: true }}
            className="text-xl font-normal leading-[30px]"
          >
            {body1}
          </motion.p>
        </div>
        <div>
          <fieldset>
            <motion.img
              variants={rotate}
              whileInView="animate"
              viewport={{ once: true }}
              src={img2}
              alt="health record"
            />
          </fieldset>
          <motion.h4
            variants={slideInLeft}
            whileInView={"animate"}
            initial={"initial"}
            viewport={{ once: true }}
            className="font-semibold text-xl font-nunito "
          >
            {title2}
          </motion.h4>
          <motion.p
            variants={slideInRight}
            whileInView={"animate"}
            initial={"initial"}
            viewport={{ once: true }}
            className="text-xl font-normal leading-[30px]"
          >
            {body2}
          </motion.p>
        </div>
      </motion.div>
    </>
  );
}
