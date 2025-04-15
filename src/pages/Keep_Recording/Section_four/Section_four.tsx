import React from "react";
import { DownloadAppContent } from "../../../components/DownloadAppContent";
import { MdLock, MdAddToDrive, MdOutlineSecurity } from "react-icons/md";
import { BsCloudUploadFill } from "react-icons/bs";
import { GoPasskeyFill } from "react-icons/go";
import { motion } from "framer-motion";
import useRevealOnScroll from "../../../utils/motions/MotionHooks/useRevealOnScroll";
import {
  scaleIn,
  slideInRightLeft,
} from "../../../utils/motions/motionVariants";

const rotateItems = [
  {
    icon: <MdAddToDrive />,
    className: "bg-orange-400   ",
  },
  {
    icon: <MdLock />,
    className: "bg-blue-600",
  },
  {
    icon: <MdOutlineSecurity />,
    className: "bg-blue-600 ",
  },
  {
    icon: <GoPasskeyFill />,
    className: "bg-pink-500  ",
  },
  {
    icon: <BsCloudUploadFill />,
    className: "bg-blue-500",
  },
  {
    icon: <BsCloudUploadFill />,
    className: "bg-blue-900 ",
  },
];
export function Section_four() {
  const reveal = useRevealOnScroll();
  const slideIn = scaleIn();
  const slideRight = slideInRightLeft();
  return (
    <>
      <motion.section
        {...reveal}
        className="text-blue-800 flex items-center justify-center bg-snow px-[92px]"
      >
        <motion.fieldset
          variants={slideIn}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true }}
          className="flex items-center justify-center w-full h-full "
        >
          <img
            src="/public/assets/Record_keeping/cloud.png"
            alt="cloud security"
            className="relative"
          />

          <div className="relative ">
            {rotateItems.map((items, index) => (
              <motion.div
                key={index}
                initial="initial"
                animate={["animate", "initialHide"]}
                variants={{
                  initial: {
                    opacity: 0,
                  },
                  initialHide: {
                    opacity: 1,
                    transition: {
                      delay: index,
                    },
                  },
                  animate: {
                    rotate: -360,
                    transition: {
                      duration: rotateItems.length,
                      repeat: Infinity,
                      delay: index,
                      ease: "linear",
                    },
                  },
                }}
                className="flex  items-end justify-end  [&_span]:rounded-full [&_span]:flex [&_span]:items-center text-white [&_span]:justify-center *:text-[32px] *:p-3.5 *:w-[50px] *:h-[50px]  h-full fixed -top-20 left-35 overflow-hidden gap-3 "
              >
                <span className={items.className}>{items.icon}</span>
              </motion.div>
            ))}
          </div>
        </motion.fieldset>
        <motion.div
          variants={slideRight}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true }}
          className="w-[80%]"
        >
          <DownloadAppContent
            width="w-full"
            heading="Securely backup and secure your health records"
            article="Have the option to manually back up your data for added security. Your backups are stored using advanced encryption for maximum protection."
          />
        </motion.div>
      </motion.section>
    </>
  );
}
