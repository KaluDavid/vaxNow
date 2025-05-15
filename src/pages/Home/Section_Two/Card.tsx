import React from "react";
import { motion } from "framer-motion";
import useHoverButton from "../../../utils/motions/MotionHooks/useHoverButton";
interface CardProp {
  children: React.ReactNode;
  style?: string;
}
export default function Card({ style, children }: CardProp) {
  const hoverCards = useHoverButton();

  return (
    <>
      <motion.div
        {...hoverCards}
        className={`sm-lg:pt-10 pt-7 sm-lg:pb-10 pb-7 max-w-full sm-lg:w-[23rem] shadow-blue-30 shadow-soft-lg flex flex-col justify-end items-center gap-20 bg-blue-50  rounded-2xl sm-lg:h-[440px] ${style}`}
      >
        {children}
      </motion.div>
    </>
  );
}
