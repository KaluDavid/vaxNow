import useBackToTop from "../../Hooks/use-back-to-top";
import useTitleChange from "../../Hooks/use-title-change";
import { FAQ } from "../../components/FAQ/FAQ";
import { Button } from "../../components/Button";
import WordAnime from "../../utils/motions/WordAnime";
import { motion } from "framer-motion";
import useRevealOnScroll from "../../utils/motions/MotionHooks/useRevealOnScroll";
import { revealFromBottom } from "../../utils/motions/motionVariants";

function FAQ_Page() {
  // Title update on route change
  useTitleChange({ title: "FAQ" });
  // back to top on page reload
  const toTop = useBackToTop();

  const scaleIn = useRevealOnScroll();
  const fromBottom = revealFromBottom();

  return (
    <>
      <motion.section
        ref={toTop}
        {...scaleIn}
        className="flex pt-[5rem] flex-col items-center justify-center gap-[100px] pb-[5rem]"
      >
        <div className="flex text-center text-white bg-blue-600 bg-[url('/public/assets/Record_keeping/herovirus.png')] items-center bg-cover justify-center w-full sm:px-[50px] px-5 xl:px-[100px] text-blue-800  overflow-x-hidden relative py-[5rem] xl:py-[12rem] overflow-hidden sm:text-center text-left">
          <div className="flex items-center flex-col gap-6">
            <WordAnime text="Have Questions? We've Got Answers!" />
            <motion.span
              variants={fromBottom}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              className="text-lg sm:text-xl font-normal tracking-[-0.1px] xl:w-[76%] leading-8"
            >
              Curious about how VaxNow works? Whether it's setting vaccine
              reminders, tracking multiple medications, or accessing your health
              records, our FAQ section has all the answers you need. Get clear,
              reliable information at your fingertips and stay on top of your
              health with ease!
            </motion.span>
          </div>

          <fieldset className="flex  flex-col *:absolute *:last:top-[-45%] max-md:*:w-[200px] *:last:left-0  *:last:rotate-180 *:first:top-0 *:first:right-0">
            <motion.img
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.8, duration: 0.9, ease: "linear" }}
              viewport={{ once: true }}
              src="/public/assets/question.svg"
              alt="FAQ"
            />
            <motion.img
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.8, duration: 0.9, ease: "linear" }}
              viewport={{ once: true }}
              src="/public/assets/question.svg"
              alt="FAQ"
            />
          </fieldset>
        </div>

        <FAQ />

        <motion.div
          {...scaleIn}
          className="w-full sm:px-[50px] px-5 xl:px-[80px] flex items-center"
        >
          <div className="flex rounded-2xl sm-sm:items-center flex-col justify-between size-full bg-blue-600 mb:pt-20 md:pb-24.5 py-10 bg-[url('/public/assets/home_img/section_two_img/sect.svg')] bg-no-repeat px-5 sm:px-[50px] md:px-[85px]  gap-8 text-center ">
            <WordAnime
              text="Still have questions?"
              style="text-snow text-5xl font-semibold leading-16"
            />
            <fieldset className="flex relative items-center *:first:*:bg-blue-50  *:first:*:text-blue-600">
              <Button to="/contact">Contact Us</Button>
              <motion.img
                initial={{ width: 0 }}
                whileInView={{
                  width: 100,
                  transition: {
                    duration: 0.8,
                    ease: "linear",
                  },
                }}
                viewport={{ once: true }}
                src="/public/assets/arrow.svg"
                alt="arrow"
                className="w-30 mt-[-30px] absolute sm:right-[-8rem] sm-sm:right-[-6rem] right-[-1rem]"
              />
            </fieldset>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
}

export default FAQ_Page;
