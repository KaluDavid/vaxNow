import { Card_one } from "./Card_one";
import Card from "./Card";
import { Card_Two } from "./Card_two";
import { Card_Three } from "./Card_Three";
import { motion } from "framer-motion";
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
      <motion.section
        {...revealOnScroll}
        className=" px-5 sm:px-[50px] lg:mb-[12rem]"
      >
        <div className="flex items-center flex-col justify-between w-full  lg:h-[29rem] pb-10 bg-blue-600 sm:rounded-tr-[200px] rounded-tr-[150px] rounded-2xl bg-[url('/assets/home_img/section_two_img/sect.svg')] bg-no-repeat xl:px-16 sm:px-[50px] px-5  gap-14">
          <motion.h1
            variants={wordVariant}
            initial="hidden"
            animate="visible"
            className="text-snow text-center font-nunito sm:text-5xl text-[32px] font-semibold pt-10 sm:leading-16"
          >
            A centralized platform for managing your medications and
            vaccinations.
          </motion.h1>

          <div className="lg:flex-row flex flex-col max-w-full gap-8 items-center justify-center">
            <motion.span
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
            >
              <Card style="gap-[90px] !pb-[0px]">
                <Card_one />
              </Card>
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ type: "spring", duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card style="justify-start !pt-[0px] gap-[40px]">
                <Card_Two />
              </Card>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: -0 }}
              transition={{ type: "spring", duration: 0.9, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <Card style="!pb-[0px]">
                <Card_Three />
              </Card>
            </motion.span>
          </div>
        </div>
      </motion.section>
    </>
  );
}
