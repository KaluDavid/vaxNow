import React from "react";
import { motion } from "framer-motion";
import { childStagger } from "../../../utils/motions/motionVariants";
interface CardsProps {
  icons: React.ReactNode;
  title: string;
  article: string;
}
export function Card({ icons, title, article }: CardsProps) {
  const child = childStagger();
  return (
    <>
      <motion.div
        variants={child}
        className="flex text-start sm:items-center justify-center flex-col sm:gap-8 gap-4 sm:*:items-center *:flex *:flex-col sm:*:gap-5 text-white lg:px-5 max-md:py-6"
      >
        <span className="rounded-full bg-darker-gray sm:p-2 flex items-center justify-center  sm:text-[40px] size-10">
          {icons}
        </span>
        <h4 className="font-bold text-xl font-nunito ">{title}</h4>
        <p className="sm:text-xl sm:text-center font-nunito-sans font-normal leading-[30px] text-lg">
          {article}
        </p>
      </motion.div>
    </>
  );
}
