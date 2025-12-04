import { FaLocationDot } from "react-icons/fa6";
import { HealthCard } from "../../../components/HealthCard";
import { motion } from "framer-motion";
import {
  revealFromBottom,
  slideInRightLeft,
} from "../../../utils/motions/motionVariants";
import useWindowWidth from "../../../Hooks/use-window-width";

const container = {
  hidden: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      amount: 10,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const child = {
  hidden: { opacity: 0 },
  animate: {
    opacity: 1,
  },
};

export function Hero_Right() {
  const fromBottom = revealFromBottom();
  const fromRight = slideInRightLeft();
  const { windowWidth } = useWindowWidth();
  return (
    <>
      <section className="flex items-center justify-center relative">
        {windowWidth > 640 && (
          <motion.div
            variants={fromBottom}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true }}
            className="absolute top-[11rem] md:right-[40rem] z-10 will-change-transform "
          >
            <HealthCard
              iconColor="text-blue-600"
              icon={
                <span className="*:animate-bounce">
                  <FaLocationDot />
                </span>
              }
              text="1000+ Health Centres"
            />
          </motion.div>
        )}

        <fieldset className=" max-w-[526px] ">
          <motion.img
            variants={fromRight}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            src="/assets/home_img/fam4.png"
            alt="family picture"
            className=" size-auto object-contain border-[12px] md:shrink-0  rounded-tl-[33px] border-blue-50 rounded-br-[33px] sm:rounded-bl-[200px] rounded-bl-[147px] sm:rounded-tr-[200px] rounded-tr-[147px]  will-change-transform"
          />
        </fieldset>
        {windowWidth > 640 && (
          <motion.div
            variants={fromRight}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            className="shadow-soft-lg flex gap-2 flex-col rounded-sm bg-white justify-center pl-3 pr-4 py-3 pb-2 font-semibold font-nunito overflow-hidden bottom-20 -right-[10%]  z-10 absolute"
          >
            <div className="flex  items-center gap-2">
              <img
                loading="lazy"
                src="/assets/home_img/helen.svg"
                alt="family picture"
                className="w-5 object-contain"
              />
              <span>Helen Jacobs</span>
            </div>
            <div className="flex items-center gap-2 flex-col">
              <p className="font-light text-[13px] leading-4 ">
                I used to struggle to keep track of all <br /> my medications
                and vaccinations. Now, <br /> it's all in one place
              </p>
              <motion.fieldset
                variants={container}
                initial="hidden"
                whileInView="animate"
                className="flex items-center gap-1 *:w-[11px] *:h-[11px] object-contain"
              >
                <motion.img
                  variants={child}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror", // makes it pulse back
                  }}
                  src="/assets/star.svg"
                  alt="star"
                />
                <motion.img
                  variants={child}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror", // makes it pulse back
                  }}
                  src="/assets/star.svg"
                  alt="star"
                />
                <motion.img
                  variants={child}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror", // makes it pulse back
                  }}
                  src="/assets/star.svg"
                  alt="star"
                />
                <motion.img
                  variants={child}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror", // makes it pulse back
                  }}
                  src="/assets/star.svg"
                  alt="star"
                />
                <motion.img
                  variants={child}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror", // makes it pulse back
                  }}
                  src="/assets/star.svg"
                  alt="star"
                />
              </motion.fieldset>
            </div>
          </motion.div>
        )}
      </section>
    </>
  );
}
