import { motion } from "framer-motion";
import { OurApp } from "../../../components/OurApp";
import { slideInLeftRight } from "../../../utils/motions/motionVariants";
export function SlideRightLeftOurApp({
  img,
  alt,
  style2,
}: {
  img: string;
  alt: string;
  style2: string | undefined;
}) {
  const slideFromLeft = slideInLeftRight();

  return (
    <motion.span
      variants={slideFromLeft}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <OurApp img={img} style={style2} alt={alt} />
    </motion.span>
  );
}
