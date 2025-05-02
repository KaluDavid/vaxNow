import React from "react";
import { Card_one } from "./Card_one";
import Card from "./Card";
import { Card_Two } from "./Card_two";
import { Card_Three } from "./Card_Three";
import { animate, motion } from "framer-motion";
import useRevealOnScroll from "../../../utils/motions/MotionHooks/useRevealOnScroll";

const wordVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, duration: 0.8, ease: "easeOut" },
  },
};
export function Section_Two() {
  const revealOnScroll = useRevealOnScroll();
  return (
    <>
      {/* mx-[50px] */}
      <motion.section {...revealOnScroll} className=" px-[50px] mb-[12rem]">
        <div className="flex items-center flex-col justify-between w-full  h-[29rem] bg-blue-600 rounded-tr-[200px] rounded-2xl bg-[url('/public/assets/home_img/section_two_img/sect.svg')] bg-no-repeat px-16 gap-14">
          <motion.h1
            variants={wordVariant}
            initial="hidden"
            animate="visible"
            className="text-snow text-center font-nunito !text-5xl font-semibold pt-10 leading-16"
          >
            A centralized platform for managing your medications and
            vaccinations.
          </motion.h1>

          <div className="flex gap-8 items-centber justify-center">
            <motion.span
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 2 }}
            >
              <Card style="gap-[90px]">
                <Card_one />
              </Card>
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ type: "spring", duration: 0.7, delay: 0.5 }}
            >
              <Card style="justify-start pt-[0px] gap-[40px]">
                <Card_Two />
              </Card>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: -0 }}
              transition={{ type: "spring", duration: 0.9, delay: 0.9 }}
            >
              <Card>
                <Card_Three />
              </Card>
            </motion.span>
          </div>
        </div>
      </motion.section>
    </>
  );
}
