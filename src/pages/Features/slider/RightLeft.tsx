import { motion } from "framer-motion";
import useRevealOnScroll from "../../../utils/motions/MotionHooks/useRevealOnScroll";
import { slideInRightLeft } from "../../../utils/motions/motionVariants";
import { DownloadAppContent } from "../../../components/DownloadAppContent";
import useWindowWidth from "../../../Hooks/use-window-width";
import { SlideRightLeftOurApp } from "./SlideRightLeftOurApp";

export default function RightLeft({
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
  const slideFromRight = slideInRightLeft();

  const { windowWidth } = useWindowWidth();
  return (
    <>
      <motion.section
        {...scrollIn}
        className={`${background} lg:px-[50px] lg:py-[150px] xl:px-[100px] sm:px-[50px] lg:flex-row flex-col flex items-center justify-between  lg:gap-[88px] gap-[220px] py-[50px] pb-[13rem] px-[20px]`}
      >
        {windowWidth > 1024 && (
          <SlideRightLeftOurApp img={img} style2={style2} alt={alt} />
        )}
        <motion.span
          variants={slideFromRight}
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

        {windowWidth <= 1024 && (
          <SlideRightLeftOurApp img={img} style2={style2} alt={alt} />
        )}
      </motion.section>
    </>
  );
}
