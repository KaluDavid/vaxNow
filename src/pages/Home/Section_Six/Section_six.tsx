import React from "react";
import { User } from "./User";
import { parentStagger } from "../../../utils/motions/motionVariants";
import { motion } from "framer-motion";
import useRevealOnScroll from "../../../utils/motions/MotionHooks/useRevealOnScroll";
import WordAnime from "../../../utils/motions/WordAnime";

export function Section_six() {
  const parent = parentStagger();
  const scrollIn = useRevealOnScroll();
  return (
    <>
      <section className="bg-blue-600 bg-[url('/public/assets/home_img/section_six_img/bg.png')] py-[100px] w-full px-[80px] flex items-center flex-col justify-center gap-[88px]">
        <motion.div
          {...scrollIn}
          className="text-white flex-col text-center flex items-center justify-center gap-2"
        >
          <WordAnime
            text="Hear from our satisfied users"
            style="!sm:text-5xl font-semibold"
          />
          <h3 className="font-nunito-sans text-lg sm:text-2xl font-normal">
            Discover how ImmuniSafe is transforming lives
          </h3>
        </motion.div>

        <motion.div
          variants={parent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center gap-6"
        >
          <User
            img="/assets/home_img/section_six_img/lady1.png"
            name=" Melvin James"
            article="            
          As a frequent traveler, ImmuniSafe has been invaluable for ensuring
          that I'm up-to-date on all necessary vaccinations. The app's
          easy-to-use interface and the reminders have made it a breeze to stay
          organized."
          />

          <User
            img="/assets/home_img/section_six_img/lady2.png"
            name="Delphine Isong"
            article="Vacineapp has been a lifesaver for me as a busy parent. It helps me stay on top of my child's vaccinations and medication schedule, and the health blog has been a great resource for information. "
          />

          <User
            img="/assets/home_img/section_six_img/lady3.png"
            name="Miriam Abang"
            article="As a frequent traveler, ImmuniSafe has been invaluable for ensuring that I'm up-to-date on all necessary vaccinations. The app's easy-to-use interface and the reminders have made it a breeze to stay organized. "
          />
        </motion.div>
      </section>
    </>
  );
}
