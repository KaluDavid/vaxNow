import React from "react";
import { childStagger } from "../../../utils/motions/motionVariants";
import { motion } from "framer-motion";
export function Input({
  label,
  type,
  placeholder,
  textArea,
}: {
  label: string;
  type: string;
  textArea?: React.ReactNode;
  placeholder: string;
}) {
  const child = childStagger();
  return (
    <motion.div
      variants={child}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true }}
      className="flex flex-col text-xl font-normal tracking-[-0.1px] w-full leading-8"
    >
      <label htmlFor={type}>{label}</label>
      {textArea ? (
        /* Textarea 1 */
        <textarea
          name={type}
          placeholder={placeholder}
          className="min-md:w-[420px] w-full placeholder:text-input h-[113px] py-2.5 px-3 outline-gray-400 text-base border border-input rounded-2xl"
        ></textarea>
      ) : (
        <input
          type={type}
          name={type}
          placeholder={placeholder}
          className="min-md:w-[420px] w-full h-11 pl-4 text-base font-normal rounded-xl border border-input outline-gray-400 placeholder:text-input"
        />
      )}
    </motion.div>
  );
}
