import { motion } from "framer-motion";
import useRevealOnScroll from "../../../utils/motions/MotionHooks/useRevealOnScroll";

const phoneVaraint = {
  initial: { width: 0 },

  animate: {
    width: "390px",
    transition: { duration: 0.8 },
  },
};
function Hero() {
  const reveal = useRevealOnScroll();

  return (
    <>
      <motion.div
        {...reveal}
        className="flex lg:flex-row flex-col text-white bg-blue-600 bg-[url('/assets/Record_keeping/herovirus.png')] gap-15 items-center bg-cover justify-between w-full xl:px-[100px] text-blue-800 py-[100px] sm:px-[50px] px-5 overflow-x-hidden"
      >
        <div className="flex sm:w-[40rem] *:text-white items-start flex-col gap-6">
          <h1 className="font-nunito font-bold text-[32px] sm:text-[56px] leading-[45px] sm:leading-[130%]  tracking-[-0.28px] flex items-center gap-4">
            🛡️ Welcome to VaxNow
          </h1>
          <motion.span className="sm:text-xl text-lg font-normal tracking-[-0.1px] lg:w-[590px] leading-8">
            With VaxNow, taking charge of your health and your family's
            well-being has never been easier. We connect you with trusted
            vaccination insights, reminders, and tools to help you stay
            protected—anytime, anywhere.
          </motion.span>
        </div>

        <motion.fieldset
          variants={phoneVaraint}
          initial="initial"
          animate="animate"
          className="lg:w-[390px] max-w-[290px] lg:h-[575px] object-contain flex *:bg-white"
        >
          <img
            src="/assets/Doc.png"
            alt="vaccine tracker"
            className=" rounded-[30px] border-[#002F56] border-[10px] object-fill size-full  lg:mr-[8.5%]"
          />
        </motion.fieldset>
      </motion.div>
    </>
  );
}

export default Hero;
