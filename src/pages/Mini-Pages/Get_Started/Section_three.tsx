import { Button } from "../../../components/Button";
import {
  slideInRightLeft,
  slideInLeftRight,
  scaleIn,
} from "../../../utils/motions/motionVariants";
import { motion } from "framer-motion";

export function Section_three() {
  const scale = scaleIn();
  const slideRight = slideInRightLeft();
  const slideLeft = slideInLeftRight();
  return (
    <>
      <motion.section
        variants={scale}
        initial={"initial"}
        whileInView={"animate"}
        viewport={{ once: true }}
        className="text-blue-800 px-5 sm:px-[50px] xl:px-[80px] flex items-center pb-[5rem] flex-col justify-center gap-[88px] text-center"
      >
        <div className="w-full flex items-center justify-center sm:rounded-br-[250px] sm:rounded-tl-[250px] gap-[100px] rounded-bl-[60px] rounded-tr-[60px] shadow-soft-lg bg-blue-50 xl:py-[121px] xl:px-[170px] sm:px-[100px] sm:py-15 p-10">
          <div className="flex flex-col items-center gap-5">
            <h3 className="font-semibold text-[32px] sm:text-5xl font-nunito sm:leading-[62px]">
              Ready to Begin?
            </h3>
            <p className="sm:text-xl text-lg font-normal  leading-[30px]">
              Click the button below to download the main app and unlock a world
              of trusted health services designed just for you.
            </p>
            <div className="flex max-md:flex-col *:py-[8px] items-center gap-6">
              <motion.span
                variants={slideLeft}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <Button to="/DownloadApp" style="bg-blue-800 w-full flex-row">
                  <img loading="lazy" src="/assets/whiteapple.svg" alt="" />
                  <span className="flex flex-col items-start text-base text-left">
                    <small className="text-[12px]">Download on the</small>
                    <strong>App Store</strong>
                  </span>
                </Button>
              </motion.span>
              <motion.span
                variants={slideRight}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <Button to="/DownloadApp" style="bg-blue-800 w-full flex-row">
                  <img loading="lazy" src="/assets/playstore.svg" alt="" />
                  <span className="flex flex-col items-start text-base text-left">
                    <small className="text-[12px]">Download on the</small>
                    <strong>App Store</strong>
                  </span>
                </Button>
              </motion.span>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
