import { motion } from "framer-motion";
import useRevealOnScroll from "../../../utils/motions/MotionHooks/useRevealOnScroll";
import {
  revealFromBottom,
  slideInLeftRight,
  slideInRightLeft,
} from "../../../utils/motions/motionVariants";
import useWindowWidth from "../../../Hooks/use-window-width";

export function Section_two() {
  const reveal = useRevealOnScroll();
  const slideRight = slideInRightLeft();
  const slideLeft = slideInLeftRight();
  const slideBottom = revealFromBottom();
  const { windowWidth } = useWindowWidth();

  return (
    <>
      <section className="flex w-full flex-col px-[20px] xl:px-20.5 sm:px-[50px] gap-20 items-center text-blue-800">
        <motion.div
          {...reveal}
          className="items-center gap-[48px] lg:flex-row flex-col bg-darky-gray py-[53px] justify-between w-full xl:px-[10px] lg:px-0 md:px-[50px] xl:gap-[50px] rounded-3xl flex"
        >
          <motion.div
            variants={slideLeft}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            className="flex w-full px-[20px] lg:px-[50px] items-start flex-col gap-6 gap-0"
          >
            <h1 className="font-nunito font-bold xl:text-[56px] sm:leading-[130%] leading-[41.6px] tracking-[-0.28px] lg:text-[40px] sm:text-[56px] text-[32px] ">
              Track, understand and improve your well-being
            </h1>
            <span className="sm:text-xl text-lg font-normal tracking-[-0.1px] xl:w-[490px] leading-8 sm:leading-[30px]">
              Record and monitor your health metrics, symptoms, and treatments.
              Gain valuable insights into your health trends and patterns.
            </span>
          </motion.div>

          <motion.fieldset
            variants={slideRight}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
          >
            <img
              src="/public/assets/Record_keeping/image 62.png"
              alt="image 62"
              className="sm:max-w-full xl:mr-[50px] lg:pr-[50px] xl:max-w-[401px] min-w-[150px] mid-sm:max-w-[330px] sm-lg:max-w-[360px] sm-sm:max-w-[300px] max-w-[250px] "
            />
          </motion.fieldset>
        </motion.div>

        <motion.div
          {...reveal}
          className="flex  items-end  gap-8 *:bg-blue-50 *:rounded-3xl lg:h-screen w-full"
        >
          {windowWidth > 1024 && (
            <motion.fieldset
              variants={slideLeft}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="flex flex-col justify-end items-end md:max-lg:w-[25rem] xl:min-w-[497px] md:w-[30rem] *:rounded-b-3xl size-full"
            >
              <img
                src="/public/assets/Record_keeping/lady_and_baby.png"
                alt="lady_and_baby"
                className="max-md:w-full object-contain"
              />
            </motion.fieldset>
          )}
          <motion.div className="flex flex-col items-center w-full lg:max-xl:w-[30rem]  justify-center xl:gap-9 sm:p-[50px] px-[20px] py-[40px] h-full">
            <motion.div
              variants={slideRight}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="flex  justify-start w-full items-start flex-col gap-6"
            >
              <h1 className="font-nunito font-bold sm:text-[56px] sm:leading-[130%] text-[32px] leading-[41px] tracking-[-0.28px] ">
                Your data, your privacy!
              </h1>
              <span className="sm:text-xl text-lg font-normal tracking-[-0.1px] xl:w-[490px] leading-8">
                Record and monitor your health metrics, symptoms, and
                treatments. Gain valuable insights into your health trends and
                patterns.
              </span>
            </motion.div>
            <motion.fieldset
              variants={slideBottom}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ amount: 0.2, once: true }}
              className="flex items-center size-full justify-center sm:max-w-[40%] sm-lg:w-[17rem] min-w-[40%] fold2:max-lg:min-w-full"
            >
              <img
                src="/public/assets/Record_keeping/key.png"
                alt="privacy"
                className="size-auto"
              />
            </motion.fieldset>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
