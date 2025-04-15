import React from "react";
import { Button } from "../../components/Button";
import { motion } from "framer-motion";
import useRevealOnScroll from "../../utils/motions/MotionHooks/useRevealOnScroll";

const phoneVaraint = {
  initial: { width: 0, x: -100 },
  animate: { width: "25rem", x: 0, transition: { duration: 0.7 } },
};

export default function Section_Eight() {
  const onReveal = useRevealOnScroll();
  return (
    <>
      <section className="text-blue-800 w-full px-[80px] flex items-center flex-col justify-center gap-[88px]">
        <div className="w-full flex items-center justify-center rounded-tr-[250px] rounded-bl-[250px] gap-[100px] rounded-br-[60px] rounded-tl-[60px]  bg-blue-50 py-[121px] px-[170px]">
          <motion.fieldset
            variants={phoneVaraint}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="rounded-3xl border-[#002F56] border-[10px] object-contain  w-[25rem]"
          >
            <img
              src="/assets/home_img/Section_Four_img/Home.png"
              alt="medic home"
              className="w-full h-full rounded-[10px] object-contain"
            />
          </motion.fieldset>

          <motion.div {...onReveal} className="flex flex-col items-start gap-5">
            <h3 className="font-semibold text-5xl font-nunito leading-[62px]">
              Download ImmuniSafe app for IOS or Android
            </h3>
            <p className="text-xl font-normal w-[394px] leading-[30px]">
              Enjoy all our services within a 30-day trial period, after which
              you can continue by subscribing
            </p>
            <div className="flex *:py-[8px] items-center gap-6">
              <Button to="/DownloadApp" style="bg-blue-800 w-full flex-row">
                <img src="/public/assets/whiteapple.svg" alt="" />
                <span className="flex flex-col items-start text-base text-left">
                  <small className="text-[12px]">Download on the</small>
                  <strong>App Store</strong>
                </span>
              </Button>
              <Button to="/DownloadApp" style="bg-blue-800 w-full flex-row">
                <img src="/public/assets/playstore.svg" alt="" />
                <span className="flex flex-col items-start text-base text-left">
                  <small className="text-[12px]">Download on the</small>
                  <strong>App Store</strong>
                </span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
