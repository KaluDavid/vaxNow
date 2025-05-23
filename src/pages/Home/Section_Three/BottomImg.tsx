import { motion } from "framer-motion";
import { slideInRightLeft } from "../../../utils/motions/motionVariants";

export function BottomImg() {
  const slideFromRight = slideInRightLeft();

  return (
    <motion.fieldset
      variants={slideFromRight}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <img
        src="/assets/home_img/section_three_img/lady.png"
        alt="family photo"
        className=" w-auto h-auto object-contain lg:pl-0 sm:max-lg:pl-[50px] pl-5"
      />
    </motion.fieldset>
  );
}
