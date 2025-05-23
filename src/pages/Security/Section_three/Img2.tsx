import { motion } from "framer-motion";
import { slideInLeftRight } from "../../../utils/motions/motionVariants";
export function Img2() {
  const slideLeft = slideInLeftRight();

  return (
    <motion.fieldset
      variants={slideLeft}
      initial="initial"
      whileInView={"animate"}
      viewport={{ once: true }}
      className="*:w-[450px] lg:min-w-[300px]  *:object-contain items-center"
    >
      <img src="/assets/security/security.png" alt="security" />
    </motion.fieldset>
  );
}
