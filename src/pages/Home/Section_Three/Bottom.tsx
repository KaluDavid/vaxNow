import { DownloadAppContent } from "../../../components/DownloadAppContent";
import { motion } from "framer-motion";
import { slideInLeftRight } from "../../../utils/motions/motionVariants";
import { BottomImg } from "./BottomImg";
import useWindowWidth from "../../../Hooks/use-window-width";
export function Bottom() {
  const slideFromLeft = slideInLeftRight();
  const { windowWidth } = useWindowWidth();
  return (
    <>
      <section className="flex lg:flex-row flex-col items-center gap-[50px] sm:gap-[100px] self-stretch xl:pl-[123px] lg:pl-[50px] justify-between w-full sm:max-lg:pb-[50px] pb-5 lg:pb-0">
        {windowWidth < 1024 && <BottomImg />}

        <motion.span
          variants={slideFromLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="sm:max-lg:px-[50px] lg:px-0 px-5 "
        >
          <DownloadAppContent
            heading="Tired from managing medication schedules?"
            article="        Simplify your life with ImmuniSafe. Track, manage, and adhere to your
                medication plan effortlessly"
            headStyle="lg:max-xl:text-[40px] lg:max-xl:leading-[50px]"
            style="lg:max-xl:gap-8"
          />
        </motion.span>
        {windowWidth >= 1024 && <BottomImg />}
      </section>
    </>
  );
}
