import React from "react";
import { scaleIn } from "../../../utils/motions/motionVariants";
import { motion } from "framer-motion";
import { MdLock, MdAddToDrive, MdOutlineSecurity } from "react-icons/md";
import { BsCloudUploadFill } from "react-icons/bs";
import { GoPasskeyFill } from "react-icons/go";

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
export function Item() {
  const slideIn = scaleIn();
  return (
    <motion.fieldset
      variants={slideIn}
      initial="initial"
      whileInView={"animate"}
      viewport={{ once: true }}
      className="flex  items-center justify-center w-full h-full "
    >
      <img
        src="/public/assets/Record_keeping/cloud.png"
        alt="cloud security"
        className="relative flex max-lg:mr-[-20rem] max-sm:mr-[-15rem] sm-lg:mr-[-11rem] sm-lg:ml-0 ml-[-5rem] lg:mr-0"
      />

      <div className="relative ">
        {rotateItems.map((items, index) => (
          <motion.div
            key={index}
            initial="initial"
            whileInView={["animate", "initialHide"]}
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
            className="flex mid-sm:h-[50vh] tab27:max-lgPX:ml-[8rem] md:max-tab27:ml-[5rem] sm-sm:h-[64vh] h-[55vh] items-end justify-end  [&_span]:rounded-full [&_span]:flex [&_span]:items-center text-white [&_span]:justify-center *:text-[32px] *:p-3.5 *:w-[50px] *:h-[50px]  sm:h-full fixed -top-20 left-35 overflow-hidden gap-3 "
          >
            <span className={items.className}>{items.icon}</span>
          </motion.div>
        ))}
      </div>
    </motion.fieldset>
  );
}
