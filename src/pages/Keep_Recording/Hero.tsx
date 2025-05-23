import { Download } from "../../components/Download";
import { MdLock, MdAddToDrive, MdOutlineSecurity } from "react-icons/md";
import { BsCloudUploadFill } from "react-icons/bs";
import { motion, useReducedMotion } from "framer-motion";
import useScaleTop from "../../utils/motions/MotionHooks/useScaleTop";
import { childStagger } from "../../utils/motions/motionVariants";
import useRevealOnScroll from "../../utils/motions/MotionHooks/useRevealOnScroll";
const entryVariants = {
  hidden: { opacity: 0, x: "100vh" },
  visible: { opacity: 1, x: 0 },
};

export function Hero() {
  const scaleFromTop = useScaleTop();
  const shouldReducedMotion = useReducedMotion();
  const child = childStagger();
  const reveal = useRevealOnScroll();
  return (
    <>
      <motion.div
        {...reveal}
        className="flex-col lg:flex-row flex text-white bg-blue-600 max-lg:gap-[100px]  bg-[url('/assets/Record_keeping/herovirus.png')] items-center bg-cover justify-between w-full  text-blue-800 py-[100px] overflow-x-hidden max-sm:px-[20px] px-[50px] min-[1270px]:px-[100px]  sm:max-min-[1279px]:px-[50px]"
      >
        <motion.div
          {...scaleFromTop}
          className="flex !text-white flex-col items-start text-left"
        >
          <div className="flex lg:w-[40rem] items-start flex-col gap-6">
            <h1 className="font-nunito font-bold text-[32px] sm:text-[56px] leading-[130%] tracking-[-0.28px] ">
              Your health history At your fingertips
            </h1>
            <span className="sm:text-xl text-lg font-normal tracking-[-0.1px] lg:w-[490px] leading-8">
              Store all your vital health information in one secure place.
              Retrieve your records anytime, anywhere, with just a few taps.
            </span>

            <div className="flex items-start  flex-col">
              <Download
                button=" bg-white *:text-blue-600"
                playstore="bg-dark-gray px-[0px] *:text-white"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={entryVariants}
          initial="hidden"
          animate={shouldReducedMotion ? {} : "visible"}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="relative"
        >
          <fieldset className=" object-fill flex w-full sm-xl:p-[16rem] sm-lg:p-[13rem] sm-sm:p-[11rem] p-[10rem] items-end justify-end bg-white rounded-full relative">
            <img
              src="/assets/Record_keeping/Vaccine Tracker.png"
              alt="vaccine tracker"
              className="sm-xl:w-[290px]  sm-xl:right-30  sm-lg:w-[240px] sm-sm:w-[200px] w-[190px] bottom-8 sm-lg:right-23 rounded-t-[35px] sm-sm:right-18 right-16 border-[#002F56] border-x-[10px] border-t-[10px] object-fill  rounded-b-[13px] absolute"
            />
          </fieldset>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { staggerChildren: 0.25, duration: 0.8, delay: 0.3 },
            }}
            viewport={{ once: true }}
            className="flex items-end justify-end flex-col [&_span]:rounded-full [&_span]:flex [&_span]:items-center [&_span]:justify-center  absolute sm-xl:mt-[-14rem] mt-[-12rem] sm-xl:ml-[-1rem] sm:ml-[-2rem] sm-lg:ml-[1.5rem]"
          >
            <motion.span
              variants={child}
              className="sm-xl:size-[100px] sm-xl:text-[50px] text-[35px] size-[80px] bg-blue-900 z-20 max-sm-xl:ml-[-10rem] mr-[1.5rem]"
            >
              <MdLock />
            </motion.span>
            <motion.span
              variants={child}
              className="sm-xl:size-20  sm-xl:text-5xl  text-2xl sm-xl:p-6.5 p-5 bg-red-600 sm-xl:mt-[-1.2rem] sm-xl:mr-[-1rem] sm-lg:mt-[-0.5rem] sm-lg:ml-[-1.5rem] mt-[-1rem] mr-[1rem]"
            >
              <MdOutlineSecurity />
            </motion.span>
            <motion.span
              variants={child}
              className="sm-xl:size-[60px] sm-xl:p-5 bg-pink-500 sm-xl:text-[40px] size-14 text-xl p-3 rotate-180 sm-xl:mr-[-3rem] sm-xl:mt-[-1.3rem] sm-lg:mr-[-1.5rem] sm-lg:mt-[-1rem] sm-lg:mt-[-1.5rem] mt-[-1rem]"
            >
              <BsCloudUploadFill />
            </motion.span>
            <motion.span
              variants={child}
              className="bg-orange-400 sm-xl:text-[32px] text-[20px] sm-xl:p-3.5 p-2.5 sm-xl:size-[50px] size-[40px] z-10 sm-xl:mr-[-5rem] sm-xl:mt-[-1.5rem] sm-lg:mr-[-3rem] sm-lg:mt-[-2rem] mt-[-1.5rem] mr-[-1.2rem]"
            >
              <MdAddToDrive />
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
