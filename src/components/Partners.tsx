import { motion } from "framer-motion";
import useRevealOnScroll from "../utils/motions/MotionHooks/useRevealOnScroll";
import Carousel from "./Carousel";

export function Partners() {
  const scrollIn = useRevealOnScroll();

  return (
    <>
      <section className="text-blue-600 flex-nowrap whitespace-nowrap w-full overflow-hidden px-[20px] sm:px-[80px] flex items-center flex-col justify-center gap-[40px] sm:gap-[88px]">
        <motion.h1
          {...scrollIn}
          className=" flex-wrap whitespace-normal font-nunito md:text-5xl text-center sm:text-left font-semibold sm:leading-16 leading-[41px] text-[32px]"
        >
          See our partners and collaborators
        </motion.h1>

        {/* <Carousel directions="right" axis="x" speed={50} /> */}
        <Carousel directions="left" axis="x" speed={50} />
      </section>
    </>
  );
}
