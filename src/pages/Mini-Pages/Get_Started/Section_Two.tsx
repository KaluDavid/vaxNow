import { MdTrackChanges } from "react-icons/md";
import { BsGlobeEuropeAfrica } from "react-icons/bs";
import { IoMdTrendingUp } from "react-icons/io";
import { Cards } from "../../Career/section_two/Cards";
import useRevealOnScroll from "../../../utils/motions/MotionHooks/useRevealOnScroll";
import { parentStagger } from "../../../utils/motions/motionVariants";
import { motion } from "framer-motion";

export function Section_Two() {
  const parent = parentStagger();
  const scrollIn = useRevealOnScroll();
  return (
    <section className="w-full flex xl:mb-[14rem] items-center">
      <div className="flex items-center flex-col justify-between w-full xl:h-[29rem] bg-blue-600  bg-[url('/assets/home_img/section_two_img/sect.svg')] bg-no-repeat sm:px-[50px] py-20 xl:pt-30 px-5 xl:px-16 gap-[5rem] sm:gap-[8rem]">
        <motion.h1
          {...scrollIn}
          className="text-snow text-left sm:text-center font-nunito sm:text-5xl text-[32px] font-semibold  sm:leading-16"
        >
          What You Can Do with VaxNow
        </motion.h1>

        <motion.div
          variants={parent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="xl:*:size-[370px] grid md:grid-cols-2 xl:grid-cols-3 gap-8 w-full items-center justify-between "
        >
          <Cards
            icons={<MdTrackChanges />}
            title="🔹Track Your Vaccinations"
            article="Never miss a dose again. Our smart tracker keeps your records updated and reminds you when it’s time."
          />

          <Cards
            icons={<BsGlobeEuropeAfrica />}
            title="🔹Stay Informed"
            article="Be part of a diverse team of designers, medical professionals, & health advocates who believe in the power of technology."
          />
          <Cards
            icons={<IoMdTrendingUp />}
            title="🔹Record Keeping, Simplified"
            article="Securely store and manage your health records—accessible on the go."
          />
        </motion.div>
      </div>
    </section>
  );
}
