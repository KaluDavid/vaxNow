import React, { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { childStagger } from "../../utils/motions/motionVariants";
import { motion } from "framer-motion";
interface DropDown {
  text: string;
  children?: React.ReactNode;
  article?: string;
}

export function DropDown({ text, children, article }: DropDown) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const child = childStagger();
  return (
    <>
      <motion.div
        variants={child}
        className="flex flex-col gap-2.5 items-center py-7.5 pl-6 pr-10  bg-blue-50 rounded-lg text-lg font-nunito font-semibold text-blue-800 cursor-pointer w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-start justify-between w-full">
          <p>{text} </p>
          {isOpen ? <BiMinus /> : <BiPlus />}
        </div>
        {isOpen && (
          <article className="font-normal text-base leading-7">
            {children || article}
          </article>
        )}
      </motion.div>
    </>
  );
}
