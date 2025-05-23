import { DownloadAppContent } from "../../../components/DownloadAppContent";
import { motion } from "framer-motion";
import useRevealOnScroll from "../../../utils/motions/MotionHooks/useRevealOnScroll";
import { slideInRightLeft } from "../../../utils/motions/motionVariants";
import { Item } from "./Item";
import useWindowWidth from "../../../Hooks/use-window-width";

export function Section_four() {
  const reveal = useRevealOnScroll();
  const slideRight = slideInRightLeft();
  const { windowWidth } = useWindowWidth();

  return (
    <>
      <motion.section
        {...reveal}
        className="text-blue-800 flex max-lg:gap-[120px] lg:flex-row flex-col lg:items-center items-start lg:justify-center justify-start bg-snow px-[20px] sm:px-[50px] max-lg:pt-[50px] lg:px-[92px]"
      >
        {windowWidth > 768 && <Item />}
        <motion.div
          variants={slideRight}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true }}
          className="lg:w-[80%]"
        >
          <DownloadAppContent
            width="w-full"
            heading="Securely backup and secure your health records"
            article="Have the option to manually back up your data for added security. Your backups are stored using advanced encryption for maximum protection."
          />
        </motion.div>
        {windowWidth <= 768 && <Item />}
      </motion.section>
    </>
  );
}
