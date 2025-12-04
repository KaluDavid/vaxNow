import { Download } from "../../components/Download";
import { motion } from "framer-motion";
import useScaleTop from "../../utils/motions/MotionHooks/useScaleTop";

const entryVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.3,
      ease: "easeInOut",
    },
  },
};

export function Hero_section() {
  const scaleFromTop = useScaleTop();

  return (
    <>
      <div className="flex lg:flex-row flex-col items-center justify-between w-full sm:px-[50px] px-[20px] xl:px-[100px] text-blue-800 max-lg:gap-15 ">
        <div className="flex flex-col  items-start text-left">
          <motion.div
            {...scaleFromTop}
            className="flex xl:w-[40rem] items-start flex-col gap-6"
          >
            <h1 className="font-nunito font-bold text-[32px] sm:text-[56px] leading-[41px] sm:leading-[130%] tracking-[-0.28px] ">
              Protected with the Highest Standards
            </h1>
            <span className="text-lg sm:text-xl font-normal tracking-[-0.1px] md:w-[490px] leading-8">
              We are committed to maintaining the security and privacy of your
              data, ensuring that your health records are always protected.
            </span>

            <div className="flex items-start  flex-col">
              <Download playstore="*:text-blue-800 bg-gray-100 " />
            </div>
          </motion.div>
        </div>

        <motion.fieldset
          variants={entryVariants}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          className="*:size-full *:object-contain items-center"
        >
          <img
            loading="lazy"
            src="/assets/security/protected.png"
            alt="protected"
            className="lg:min-w-[400px]"
          />
        </motion.fieldset>
      </div>
    </>
  );
}
