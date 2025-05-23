import { motion } from "framer-motion";
import useRevealOnScroll from "../../../utils/motions/MotionHooks/useRevealOnScroll";
import {
  slideInLeftRight,
  slideInRightLeft,
} from "../../../utils/motions/motionVariants";
import { DownloadAppContent } from "../../../components/DownloadAppContent";
import { OurApp } from "../../../components/OurApp";

export default function LeftRight({
  background,
  style,
  button,
  heading,
  article,
  style2,
  img,
  alt,
}: {
  background?: string;
  style?: string;
  style2?: string;
  button?: string;
  heading: string;
  article: string;
  img: string;
  alt: string;
}) {
  const scrollIn = useRevealOnScroll();
  const slideFromLeft = slideInLeftRight();
  const slideFromRight = slideInRightLeft();
  return (
    <>
      <motion.section
        {...scrollIn}
        className={`${background} sm:px-[50px] gap-[220px] xl:px-[150px] px-[20px] lg:flex-row flex-col flex items-center justify-between lg:gap-[88px] pb-[10rem] `}
      >
        <motion.span
          variants={slideFromLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <DownloadAppContent
            width="w-full"
            style={style}
            button={button}
            heading={heading}
            article={article}
          />
        </motion.span>
        <motion.span
          variants={slideFromRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <OurApp img={img} style={style2} alt={alt} />
        </motion.span>
      </motion.section>
    </>
  );
}
