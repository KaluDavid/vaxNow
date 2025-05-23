import { Download } from "../../components/Download";
import { motion, useReducedMotion } from "framer-motion";
import useScaleTop from "../../utils/motions/MotionHooks/useScaleTop";

const entryVariants = {
  hidden: { opacity: 0, x: "100vh" },
  visible: { opacity: 1, x: -0 },
};

export function Hero() {
  const scaleFromTop = useScaleTop();
  const shouldReducedMotion = useReducedMotion();

  return (
    <>
      <section className="flex-col lg:flex-row flex items-center lg:pt-[100px] sm:pt-[20px] max-lg:gap-[100px]  justify-between w-full max-sm:px-[20px] px-[50px] min-[1270px]:px-[100px]  sm:max-min-[1279px]:px-[50px] text-blue-800  overflow-x-hidden  ">
        <motion.div
          {...scaleFromTop}
          className="flex flex-col items-start text-left"
        >
          <div className="flex lg:w-[40rem] w-full items-start flex-col gap-6">
            <h1 className="font-nunito font-bold text-[32px] sm:text-[56px] leading-[130%] tracking-[-0.28px] ">
              Track, Manage, Protect All in one place
            </h1>
            <span className="sm:text-xl text-lg font-normal tracking-[-0.1px] lg:w-[490px] leading-8">
              With ImmuniSafe, you have access to vital health services at your
              fingertips, ensuring better care, timely reminders, and reliable
              records wherever you are.
            </span>

            <div className="flex items-start  flex-col">
              <Download playstore="bg-gray-100 *:text-blue-800" />
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
          }}
          className="rounded-tl-[250px] rounded-sm bg-blue-50 "
        >
          <fieldset className="max-w-full h-full flex items-end justify-end object-contain pt-[49px] pl-[114px] ">
            <img
              src="/assets/Features_img/hand.png"
              alt=""
              className="max-w-full object-fill lg:min-w-[350px] md:max-lg:max-w-[590px] "
            />
          </fieldset>
        </motion.div>
      </section>
    </>
  );
}
