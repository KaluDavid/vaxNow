import { MdOutlineVpnKey } from "react-icons/md";
import { GrTable } from "react-icons/gr";
import { TbLock } from "react-icons/tb";
import { Card } from "./Card";
import { motion } from "framer-motion";
import useRevealOnScroll from "../../../utils/motions/MotionHooks/useRevealOnScroll";
import WordAnime from "../../../utils/motions/WordAnime";
import { parentStagger } from "../../../utils/motions/motionVariants";

export function Section_two() {
  const reveal = useRevealOnScroll();
  const parent = parentStagger();
  return (
    <>
      <section className="w-full flex items-center">
        <motion.div
          {...reveal}
          className="flex items-center flex-col justify-between size-full bg-blue-600 pb-10 pt-20 md:pb-24.5 bg-[url('/assets/home_img/section_two_img/sect.svg')] bg-no-repeat sm:px-[50px] px-[20px] xl:px-[85px] gap-10 md:gap-20 sm:text-center "
        >
          <WordAnime
            style="text-5xl text-snow"
            text="Your privacy, our priority"
          />
          <motion.div
            variants={parent}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="grid w-full sm:grid-cols-2 grid-cols-1 md:grid-cols-3 md:gap-8 items-center  justify-center "
          >
            <Card
              icons={<MdOutlineVpnKey />}
              title="Strict access control"
              article="Only authorized personnel and healthcare professionals can access your records, and only with your consent."
            />
            <Card
              icons={<GrTable />}
              title="Strict access control"
              article="Only authorized personnel and healthcare professionals can access your records, and only with your consent."
            />
            <Card
              icons={<TbLock />}
              title="Strict access control"
              article="Only authorized personnel and healthcare professionals can access your records, and only with your consent."
            />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
