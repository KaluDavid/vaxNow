import React from "react";
import { motion } from "framer-motion";
import Atropos from "atropos/react";
interface OurAppProps {
  style?: string;
  img: string;
  alt: string;
}
const phoneVaraint = {
  initial: { width: "0%" },

  animate: {
    width: "235px",
    transition: { duration: 0.8 },
  },
};

const fanVariant = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } },
};
export function OurApp({ style, img, alt }: OurAppProps) {
  return (
    <>
      <div className="flex  items-center justify-center relative ">
        <motion.div
          variants={fanVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className={`relative sm:w-[378px] h-[200px] sm-lg:w-[358px] sm-sm:w-[340px] w-[300px]  bg-blue-600 rounded-tl-3xl rounded-br-3xl rounded-tr-[100px] rounded-bl-[100px] ${style}`}
        ></motion.div>
        <motion.fieldset
          variants={phoneVaraint}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="rounded-[35px] border-[#002F56] border-[10px] object-fill absolute w-[235px] h-[480px]"
        >
          <Atropos>
            <img src={img} alt={alt} className=" object-fill rounded-none" />
          </Atropos>
        </motion.fieldset>
      </div>
    </>
  );
}
