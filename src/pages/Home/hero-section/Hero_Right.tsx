import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { HealthCard } from "../../../components/HealthCard";
import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";

const entryVariants = {
  hidden: { opacity: 0, x: "100vh" },
  visible: { opacity: 1, x: "-100px" },
};

const container = {
  hidden: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const child = {
  hidden: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      repeat: Infinity, // 👈 valid here!
      repeatType: "mirror", // makes it pulse back
    },
  },
};

export function Hero_Right() {
  const shouldReducedMotion = useReducedMotion();
  return (
    <>
      <section className="flex items-center justify-center">
        <motion.div
          variants={entryVariants}
          initial="hidden"
          animate={shouldReducedMotion ? {} : "visible"}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="mt-[-13rem] z-10 will-change-transform"
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
        <motion.img
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: -0 }}
          transition={{ duration: 1 }}
          src="/assets/home_img/fam4.png"
          alt="family picture"
          className="w-[85rem] h-auto object-contain border-[12px] rounded-tl-[33px] border-blue-50 rounded-br-[33px] rounded-bl-[200px] rounded-tr-[200px]  will-change-transform "
        />

        <motion.div
          variants={entryVariants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 1,
            ease: "easeIn",
            delay: 0.3,
          }}
          exit={{ opacity: 1 }}
          className="shadow-soft-lg flex  gap-2 flex-col rounded-sm bg-white justify-center pl-3 pr-4 py-3 pb-2 font-semibold font-nunito absolute ml-[40%] mb-[-25%] "
        >
          <div className="flex  items-center gap-2">
            <img
              src="/assets/home_img/helen.svg"
              alt="family picture"
              className="w-5 h-5 object-contain"
            />
            <span>Helen Jacobs</span>
          </div>
          <div className="flex items-center gap-2 flex-col">
            <p className="font-light text-[13px] leading-4 w-[225px]">
              I used to struggle to keep track of all my medications and
              vaccinations. Now, it's all in one place
            </p>
            <motion.fieldset
              variants={container}
              initial="hidden"
              animate="animate"
              className="flex items-center gap-1 *:w-[11px] *:h-[11px] object-contain"
            >
              <motion.img variants={child} src="/assets/star.svg" alt="star" />
              <motion.img variants={child} src="/assets/star.svg" alt="star" />
              <motion.img variants={child} src="/assets/star.svg" alt="star" />
              <motion.img variants={child} src="/assets/star.svg" alt="star" />
              <motion.img variants={child} src="/assets/star.svg" alt="star" />
            </motion.fieldset>
          </div>
        </motion.div>
      </section>
    </>
  );
}
