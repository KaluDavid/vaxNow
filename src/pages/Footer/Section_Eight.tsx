import { Button } from "../../components/Button";
import { motion } from "framer-motion";
import {
  slideInLeftRight,
  slideInRightLeft,
} from "../../utils/motions/motionVariants";
import useRevealOnScroll from "../../utils/motions/MotionHooks/useRevealOnScroll";

const phoneVaraint = {
  initial: { width: 0, x: -100 },
  animate: { width: "25rem", x: 0, transition: { duration: 0.7 } },
};

export default function Section_Eight() {
  const slideLeft = slideInLeftRight();
  const slideRight = slideInRightLeft();
  const reveal = useRevealOnScroll();
  return (
    <>
      <section className="text-blue-800 w-full xl:px-[80px] sm:px-[50px] px-[20px] flex items-center flex-col justify-center gap-[88px]">
        <div className="w-full flex lg:flex-row flex-col items-center justify-center sm:rounded-tr-[250px] rounded-tr-[170px] sm:rounded-bl-[250px] rounded-bl-[170px] gap-[100px] rounded-br-[60px] rounded-tl-[60px]  bg-blue-50 py-[121px] lg:px-[170px] sm:px-[50px] px-[20px]">
          <motion.fieldset
            variants={phoneVaraint}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="rounded-3xl border-[#002F56] border-[10px] object-contain min-w-[195.407px] max-w-[208.602px]"
          >
            <img
              src="/assets/home_img/Section_Four_img/Home.png"
              alt="medic home"
              className="w-full h-full rounded-[10px] object-contain"
            />
          </motion.fieldset>

          <motion.div
            {...reveal}
            className="flex flex-col items-center sm:items-start gap-5 sm:text-left text-center"
          >
            <h3 className="font-semibold sm:text-5xl text-[32px] font-nunito leading-[41.6px]  sm:leading-[62px]">
              Download ImmuniSafe app for IOS or Android
            </h3>
            <p className="sm:text-xl text-lg font-normal lg:w-[394px] sm:leading-[30px]">
              Enjoy all our services within a 30-day trial period, after which
              you can continue by subscribing
            </p>
            <div className="flex sm:flex-row  flex-col *:py-[8px] items-center gap-6">
              <motion.span
                variants={slideLeft}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
              >
                <Button to="/DownloadApp" style="bg-blue-800 w-full flex-row">
                  <img src="/assets/whiteapple.svg" alt="" />
                  <span className="flex flex-col items-start text-base text-left">
                    <small className="text-[12px]">Download on the</small>
                    <strong>App Store</strong>
                  </span>
                </Button>
              </motion.span>
              <motion.span
                variants={slideRight}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
              >
                <Button to="/DownloadApp" style="bg-blue-800 w-full flex-row">
                  <img src="/assets/playstore.svg" alt="" />
                  <span className="flex flex-col items-start text-base text-left">
                    <small className="text-[12px]">Download on the</small>
                    <strong>App Store</strong>
                  </span>
                </Button>
              </motion.span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
