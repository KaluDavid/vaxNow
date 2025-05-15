import { Right } from "./Right";
import { Left } from "./Left";
import { OurApp } from "../../../components/OurApp";
import { motion } from "framer-motion";
import useRevealOnScroll from "../../../utils/motions/MotionHooks/useRevealOnScroll";
import useWindowWidth from "../../../Hooks/use-window-width";
export function Section_Four() {
  const scrollIn = useRevealOnScroll();
  const { windowWidth } = useWindowWidth();
  return (
    <>
      <motion.section
        {...scrollIn}
        className="flex flex-col justify-center text-blue-800 items-center gap-16 sm:px-[50px] px-5 xl:px-[100px]"
      >
        <h3 className="font-semibold text-[32px] sm:text-5xl font-nunito sm:leading-[62px]">
          Why should you use our app?
        </h3>
        <div className="flex max-sm:flex-col items-center gap-10 xl:gap-[69px]">
          <Left />
          {windowWidth > 884 && (
            <OurApp
              img="/assets/home_img/Section_Four_img/Home.png"
              alt="our app"
            />
          )}
          <Right />
        </div>
      </motion.section>
    </>
  );
}
