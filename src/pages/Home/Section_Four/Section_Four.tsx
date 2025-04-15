import { Right } from "./Right";
import { Left } from "./Left";
import { OurApp } from "../../../components/OurApp";
import { motion } from "framer-motion";
import useRevealOnScroll from "../../../utils/motions/MotionHooks/useRevealOnScroll";
export function Section_Four() {
  const scrollIn = useRevealOnScroll();

  return (
    <>
      <motion.section
        {...scrollIn}
        className="flex flex-col justify-center text-blue-800 items-center gap-16 px-[100px]"
      >
        <h3 className="font-semibold text-5xl font-nunito leading-[62px]">
          Why should you use our app?
        </h3>
        <div className="flex items-center gap-[69px]">
          <Left />
          <OurApp
            img="/assets/home_img/Section_Four_img/Home.png"
            alt="our app"
          />
          <Right />
        </div>
      </motion.section>
    </>
  );
}
