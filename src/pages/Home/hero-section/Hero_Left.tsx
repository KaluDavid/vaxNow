import { Download } from "../../../components/Download";
import { motion } from "framer-motion";
import useScaleTop from "../../../utils/motions/MotionHooks/useScaleTop";
import { revealFromBottom } from "../../../utils/motions/motionVariants";
export function Hero_Left() {
  const scaleFromTop = useScaleTop();
  const fromBottom = revealFromBottom();

  return (
    <>
      <motion.section
        {...scaleFromTop}
        className="flex flex-col items-start text-left overflow-x-hidden "
      >
        <div className="flex items-start flex-col gap-6">
          <h1 className="font-nunito [&_span]:text-blue-600 font-bold sm:text-nowrap text-[32px] sm:text-[50px] leading-[130%]  tracking-[-0.28px] [&_br]:max-sm-sm:hidden ">
            Never miss a vaccine <br /> dose. Your{" "}
            <span>
              {" "}
              Vaccination <br /> tracker{" "}
            </span>
            and reminder
          </h1>
          <span className="text-lg sm:text-xl font-normal tracking-[-0.1px] lg:w-[433px] leading-8">
            A comprehensive health management tool that goes beyond traditional
            medication tracking
          </span>
          <div className="flex items-center gap-6 justify-between [&_div]:flex [&_div]:items-start [&_div]:flex-col">
            <div className=" text-2xl sm:*:first:text-[32px] *:first:font-nunito *:first:font-semibold sm:*:last:text-xl *:last:text-lg *:last:font-nunito-sans">
              <span>5k+</span>
              <span>Active users</span>
            </div>
            <hr className="bg-gray-400 h-12 w-[1px]" />
            <div className=" text-2xl sm:*:first:text-[32px] *:first:font-nunito *:first:font-semibold sm:*:last:text-xl *:last:text-lg *:last:font-nunito-sans">
              <span>300k+</span>
              <span>Downloads</span>
            </div>
          </div>
          <div className="flex items-start gap-[88px] flex-col">
            <Download playstore="*:text-blue-800 bg-gray-100 " />
            <motion.div
              variants={fromBottom}
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <p className="text-gray-900 text-xl font-bold font-nunito ">
                Approved by
              </p>
              <fieldset className="flex items-center gap-6 ">
                <img
                  src="/assets/home_img/NGHealth.svg"
                  alt="ministry of health"
                />
                <img src="/assets/home_img/NAFDAC.svg" alt="NAFDAC" />
              </fieldset>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
