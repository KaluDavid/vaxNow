import React from "react";
import { MdTrackChanges } from "react-icons/md";
import { BsGlobeEuropeAfrica } from "react-icons/bs";
import { IoMdTrendingUp } from "react-icons/io";
import { Cards } from "./Cards";
import useRevealOnScroll from "../../../utils/motions/MotionHooks/useRevealOnScroll";
import { motion } from "framer-motion";
import WordAnime from "../../../utils/motions/WordAnime";
import { parentStagger } from "../../../utils/motions/motionVariants";
export function Section_Two() {
  const reveal = useRevealOnScroll();
  const parent = parentStagger();
  return (
    <motion.section {...reveal} className="w-full flex mb-[14rem] items-center">
      <div className="flex items-center flex-col justify-between w-full  h-[29rem] bg-blue-600  bg-[url('/public/assets/home_img/section_two_img/sect.svg')] bg-no-repeat px-16 gap-[8rem] pt-30 text-white">
        <WordAnime text="Why work with us?" />
        <motion.div
          variants={parent}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          className="flex gap-8 items-center justify-center "
        >
          <Cards
            icons={<MdTrackChanges />}
            title="Innovative impact"
            article="              Work on a cutting-edge health tech platform that is transforming
              the way people manage their vaccination and medication records."
          />{" "}
          <Cards
            icons={<BsGlobeEuropeAfrica />}
            title="Collaborative culture"
            article="Be part of a diverse team of designers, medical professionals, & health advocates who believe in the power of technology."
          />{" "}
          <Cards
            icons={<IoMdTrendingUp />}
            title="Growth opportunities"
            article="Whether you're a marketer, health expert, or customer support professional, we provide the tools and mentorship to help you advance."
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
