import useRevealOnScroll from "../../../utils/motions/MotionHooks/useRevealOnScroll";
import {
  revealFromBottom,
  slideInRightLeft,
} from "../../../utils/motions/motionVariants";
import { motion } from "framer-motion";

export function Section_three() {
  const reveal = useRevealOnScroll();
  const slideRight = slideInRightLeft();
  const slideBottom = revealFromBottom();

  return (
    <>
      <motion.div
        {...reveal}
        className="flex lg:flex-row flex-col gap-[48px] text-white bg-blue-600 bg-[url('/assets/Record_keeping/herovirus.png')] items-center gap-0 bg-cover justify-between w-full xl:px-[100px] sm:px-[50px] text-blue-800 lg:py-[100px] py-[50px] px-[20px] overflow-x-hidden"
      >
        <motion.div
          variants={slideBottom}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          className="flex flex-col items-start text-left"
        >
          <div className="flex items-start flex-col gap-6">
            <h1 className="font-nunito font-bold sm:text-[56px] sm:leading-[130%] text-[32px] leading-[41px] tracking-[-0.28px] ">
              Easy sharing with doctors
            </h1>
            <span className="sm:text-xl text-lg font-normal tracking-[-0.1px] lg:w-[490px] leading-8">
              Connect with qualified doctors for personalized consultations.
              Your conversations with doctors are strictly confidential.
            </span>
          </div>
        </motion.div>

        <motion.fieldset
          variants={slideRight}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true }}
          className=""
        >
          <img
            loading="lazy"
            src="/assets/Record_keeping/sharing_with_doctors.png"
            alt="sharing_with_doctors"
            className=" md:min-w-[450px]  object-cover"
          />
        </motion.fieldset>
      </motion.div>
    </>
  );
}
