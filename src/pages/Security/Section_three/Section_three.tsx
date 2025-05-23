import { motion } from "framer-motion";
import useRevealOnScroll from "../../../utils/motions/MotionHooks/useRevealOnScroll";
import WordAnime from "../../../utils/motions/WordAnime";
import { slideInRightLeft } from "../../../utils/motions/motionVariants";
import { Img } from "./Img";
import useWindowWidth from "../../../Hooks/use-window-width";
import { Img2 } from "./Img2";

export function Section_three() {
  const reveal = useRevealOnScroll();
  const slideRight = slideInRightLeft();

  const { windowWidth } = useWindowWidth();

  return (
    <>
      <div className="flex items-center flex-col justify-between size-full text-blue-800  bg-no-repeat  lg:gap-20 gap-10 text-left">
        <WordAnime
          style="text-5xl  px-[20px]"
          text="Data breach response plan"
        />

        <motion.div
          {...reveal}
          className="grid lg:grid-cols-2 gap-20 items-center lg:pr-52 sm:pr-[50px] pr-[20px]"
        >
          {windowWidth > 768 && <Img />}
          <motion.div
            variants={slideRight}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            className="lg:pl-0 sm:pl-[50px] pl-[20px]  grid grid-cols-1 gap-20 "
          >
            <p className="text-xl col-span-1 font-nunito-sans font-normal leading-[30px]">
              In the unlikely event of a data breach, Vaxnow has a comprehensive
              response plan in place. We will promptly inform affected users,
              take immediate steps to mitigate the breach, and work with
              regulatory bodies to resolve the situation.
            </p>
            <p className="text-xl font-nunito-sans font-normal leading-[30px]">
              Our team is trained to handle such incidents swiftly and
              transparently to minimize any risk to your data.
            </p>
          </motion.div>
          {windowWidth <= 768 && <Img />}
        </motion.div>

        <motion.div
          {...reveal}
          className="bg-blue-50 sm:px-[50px] px-[20px] xl:px-20 pb-[76px] pt-[84px] w-full text-blue-800"
        >
          <div className="py-6 lg:pl-6 rounded-2xl lg:flex-row flex-col flex  w-full items-center border border-blue-600 rounded-tr-[100px] gap-8 xl:pr-44 px-5 sm:px-10 ">
            {windowWidth > 768 && <Img2 />}{" "}
            <motion.div
              variants={slideRight}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className=" grid gap-4 grid-cols-1"
            >
              <h1 className="text-left font-nunito text-[32px] sm:text-[42px] font-semibold lg:leading-16">
                Questions about your data security?
              </h1>
              <p className="text-xl font-nunito-sans font-normal leading-[30px]">
                If you have any questions or concerns regarding how we handle
                and protect your data, feel free to reach out to our Security
                Team at security@vacineapp.com.
              </p>
            </motion.div>
            {windowWidth <= 768 && <Img2 />}
          </div>
        </motion.div>
      </div>
    </>
  );
}
