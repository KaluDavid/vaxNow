import useBackToTop from "../../../Hooks/use-back-to-top";
import useTitleChange from "../../../Hooks/use-title-change";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillSendCheckFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { Form } from "./Form";
import { motion } from "framer-motion";
import useRevealOnScroll from "../../../utils/motions/MotionHooks/useRevealOnScroll";
import {
  childStagger,
  parentStagger,
  slideInLeftRight,
  slideInRightLeft,
} from "../../../utils/motions/motionVariants";
import WordAnime from "../../../utils/motions/WordAnime";
function Contact_Us() {
  // Title update on route change
  useTitleChange({ title: "Contact Us" });
  // back to top on page reload
  const toTop = useBackToTop();

  const reveal = useRevealOnScroll();
  const parent = parentStagger();
  const child = childStagger();
  const slideLeft = slideInLeftRight();
  const slideRight = slideInRightLeft();
  return (
    <>
      <motion.section
        ref={toTop}
        {...reveal}
        className="flex flex-col items-center justify-center gap-[100px] py-[5rem]"
      >
        <div className="flex sm:pt-20 pt-15 items-center flex-col gap-6">
          <div className="flex w-full gap-4 sm:gap-10 justify-center lg:justify-between">
            <motion.span
              variants={slideLeft}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
            >
              <BiSolidPhoneCall className="text-grayee sm:text-[120px] text-[50px]" />
            </motion.span>

            <WordAnime style="text-blue-600" text="Drop Us a Line" />
            <motion.span
              variants={slideRight}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
            >
              <BiSolidPhoneCall className="text-grayee sm:text-[120px] scale-x-[-1] text-[50px]" />
            </motion.span>
          </div>
          <motion.div
            variants={parent}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="flex gap-16 items-center  *:shadow-soft-lg *:flex  *:items-center *:gap-2 *:rounded-sm *:bg-white *:justify-center *:py-5 *:px-[19.5px] *:h-[60px]  font-nunito text-md overflow-x-scroll sm:w-[30rem] w-[25rem] lg:w-full whitespace-nowrap p-5  hide-scrollbar"
          >
            <motion.span
              variants={child}
              className="*:first:text-blue-600 *:first:text-xl"
            >
              <span>
                <FaLocationDot />
              </span>
              <span>Abuja, Nigeria</span>
            </motion.span>
            <motion.span
              variants={child}
              className="*:first:text-blue-600 *:first:text-xl "
            >
              <span>
                <BsFillSendCheckFill />
              </span>
              <span>vaxnow@gmail.com</span>
            </motion.span>
            <motion.span
              variants={child}
              className="*:first:text-blue-600 *:first:text-xl"
            >
              <span>
                <FaPhoneAlt />
              </span>
              <span>+234-901-2234-559</span>
            </motion.span>
          </motion.div>
        </div>

        <Form />
      </motion.section>
    </>
  );
}

export default Contact_Us;
