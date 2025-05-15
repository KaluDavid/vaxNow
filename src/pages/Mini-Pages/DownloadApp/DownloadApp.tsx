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
} from "../../../utils/motions/motionVariants";
import WordAnime from "../../../utils/motions/WordAnime";
import useWindowWidth from "../../../Hooks/use-window-width";
function DownloadApp() {
  useTitleChange({ title: "Terms Of Service" });
  // back to top on page reload
  const toTop = useBackToTop();

  const fade = fadeIn();
  const slideLeft = slideInLeftRight();
  const { windowWidth } = useWindowWidth();
  return (
    <>
      <section
        ref={toTop}
        className="bg-white w-full overflow-x-hidden hide-scrollbar "
      >
        <Header />
        <section className="flex fold2:mt-[5rem] mt-[3rem] flex-col items-center justify-center pb-[5rem] text-blue-800">
          <motion.div
            variants={fade}
            initial={"hidden"}
            animate={"visible"}
            className="bg-gray-150 py-[65px] sm:py-[150px] sm:px-[50px] px-5 xl:px-[150px] flex gap-[200px] fold2:flex-row flex-col items-center justify-between fold2:gap-[88px] max-fold2:pb-60"
          >
            {windowWidth > 884 && (
              <OurApp
                img="/public/assets/Features_img/Vaccine Tracker.png"
                style="bg-blue-600"
                alt="vaccine tracker"
              />
            )}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: -0 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-start gap-10 text-blue-800"
            >
              <span className="flex items-start gap-4 xl:whitespace-nowrap lg:flex-row flex-col">
                <h3 className="font-semibold text-[32px] sm:text-5xl font-nunito leading-[62px] flex items-center gap-[20px] ">
                  <motion.span
                    variants={slideLeft}
                    initial="initial"
                    animate="animate"
                    viewport={{ once: true }}
                  >
                    🛠️
                  </motion.span>
                </h3>
                <WordAnime text="We're still building..." />
              </span>

              <p className="text-lg sm:text-xl font-normal leading-[30px] w-full">
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
            {windowWidth < 884 && (
              <OurApp
                img="/public/assets/Features_img/Vaccine Tracker.png"
                style="bg-blue-600 sm:max-fold2:mb-[5rem]"
                alt="vaccine tracker"
              />
            )}
          </motion.div>
        </section>
        <Waitlist />
        <Foot />
      </section>
    </>
  );
}

export default DownloadApp;
