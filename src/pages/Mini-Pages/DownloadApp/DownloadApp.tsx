import React from "react";
import useBackToTop from "../../../Hooks/use-back-to-top";
import useTitleChange from "../../../Hooks/use-title-change";
import Header from "../../../components/Header";
import { Foot } from "../../Footer/Foot";
import { OurApp } from "../../../components/OurApp";
import { Waitlist } from "./Waitlist";
import { motion } from "framer-motion";
import {
  fadeIn,
  slideInLeftRight,
  slideInRightLeft,
} from "../../../utils/motions/motionVariants";
function DownloadApp() {
  useTitleChange({ title: "Terms Of Service" });
  // back to top on page reload
  const toTop = useBackToTop();

  const fade = fadeIn();
  const slideRight = slideInRightLeft();
  const slideLeft = slideInLeftRight();
  return (
    <>
      <section
        ref={toTop}
        className="bg-white w-full overflow-x-hidden hide-scrollbar "
      >
        <Header />
        <section className="flex flex-col items-center justify-center pb-[5rem] text-blue-800">
          <motion.div
            variants={fade}
            initial={"hidden"}
            animate={"visible"}
            className="bg-gray-150 py-[150px] px-[150px] flex items-center justify-between gap-[88px]"
          >
            <OurApp
              img="/public/assets/Features_img/Vaccine Tracker.png"
              style="bg-blue-600"
              alt="vaccine tracker"
            />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: -0 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-start gap-10 text-blue-800"
            >
              <h3 className="font-semibold text-5xl font-nunito leading-[62px] flex items-center gap-[20px]">
                <motion.span
                  variants={slideLeft}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  🛠️
                </motion.span>
                <motion.span
                  variants={slideRight}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  We're still building...
                </motion.span>
              </h3>

              <p className="text-xl font-normal leading-[30px] w-full">
                We're currently putting the finishing touches on the VaxNow App
                to give you the best possible experience. While the app isn’t
                ready for download yet, we’re working tirelessly behind the
                scenes to launch it soon. 🚧
                <br />
                <br />
                In the meantime, feel free to explore everything else on our
                website — from health articles to FAQs — and stay informed!
              </p>
            </motion.div>
          </motion.div>
        </section>
        <Waitlist />
        <Foot />
      </section>
    </>
  );
}

export default DownloadApp;
