import React from "react";
import { motion } from "framer-motion";
import { childStagger, parentStagger } from "./motionVariants";

function WordAnime({ text, style }: { text: string; style?: string }) {
  const child = childStagger();
  const parent = parentStagger();

  const words = typeof text === "string" ? text.split(" ") : [text];
  return (
    <>
      <motion.h1
        variants={parent}
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true }}
        className={`font-nunito font-bold sm:text-[56px] text-[32px] sm:leading-[130%] leading-[41px] tracking-[-0.28px] ${style} `}
      >
        {words.map((word, i) => (
          <motion.span variants={child} key={i} className="">
            {word}
            {i !== words.length - 1 && " "}
          </motion.span>
        ))}
      </motion.h1>
    </>
  );
}

export default WordAnime;
