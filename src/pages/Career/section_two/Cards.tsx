import React from "react";
import { motion } from "framer-motion";
import { childStagger } from "../../../utils/motions/motionVariants";
interface CardsProps {
  icons: React.ReactNode;
  title: string;
  article: string;
}
export function Cards({ icons, title, article }: CardsProps) {
  const child = childStagger();

  return (
    <>
      <motion.div
        variants={child}
        className="hover:scale-[1.05] transform transition-transform duration-300 ease-in-out flex items-start flex-col gap-8 *:flex *:flex-col *:gap-5 rounded-tr-[150px] shadow-soft-lg rounded-2xl bg-blue-50 text-blue-800 px-5 py-14 "
      >
        <div>
          <span className="rounded-full bg-blue-200 p-2 flex items-center justify-center border border-gray-200 text-[40px] text-blue-600 size-10">
            {icons}
          </span>
          <h4 className="font-bold text-xl font-nunito ">{title}</h4>
          <p className="text-xl font-nunito-sans font-normal leading-[30px]">
            {article}
          </p>
        </div>
      </motion.div>
    </>
  );
}
