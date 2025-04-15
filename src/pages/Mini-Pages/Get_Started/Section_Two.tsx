import React from "react";
import { MdTrackChanges } from "react-icons/md";
import { BsGlobeEuropeAfrica } from "react-icons/bs";
import { IoMdTrendingUp } from "react-icons/io";
import { Cards } from "../../Career/section_two/Cards";
import useRevealOnScroll from "../../../utils/motions/MotionHooks/useRevealOnScroll";
import {
  childStagger,
  parentStagger,
} from "../../../utils/motions/motionVariants";
import { motion } from "framer-motion";

export function Section_Two() {
  const parent = parentStagger();
  const child = childStagger();
  const scrollIn = useRevealOnScroll();
  return (
    <section className="w-full flex mb-[14rem] items-center">
      <div className="flex items-center flex-col justify-between w-full  h-[29rem] bg-blue-600  bg-[url('/public/assets/home_img/section_two_img/sect.svg')] bg-no-repeat px-16 gap-[8rem]">
        <motion.h1
          {...scrollIn}
          className="text-snow text-center font-nunito text-5xl font-semibold pt-30 leading-16"
        >
          What You Can Do with VaxNow
        </motion.h1>

        <motion.div
          variants={parent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="*:size-[370px]  flex gap-8 items-center justify-center "
        >
          <motion.span variants={child}>
            <Cards
              icons={<MdTrackChanges />}
              title="🔹Track Your Vaccinations"
              article="Never miss a dose again. Our smart tracker keeps your records updated and reminds you when it’s time."
            />
          </motion.span>

          <motion.span variants={child}>
            <Cards
              icons={<BsGlobeEuropeAfrica />}
              title="🔹Stay Informed"
              article="Be part of a diverse team of designers, medical professionals, & health advocates who believe in the power of technology."
            />
          </motion.span>
          <motion.span variants={child}>
            <Cards
              icons={<IoMdTrendingUp />}
              title="🔹Record Keeping, Simplified"
              article="Securely store and manage your health records—accessible on the go."
            />
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
