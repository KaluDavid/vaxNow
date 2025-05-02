import Header from "../../../components/Header";
import useBackToTop from "../../../Hooks/use-back-to-top";
import useTitleChange from "../../../Hooks/use-title-change";
import { Foot } from "../../Footer/Foot";
import Hero from "./Hero";
import { Section_three } from "./Section_three";
import { Section_Two } from "./Section_Two";
import { motion } from "framer-motion";
export default function Get_Started() {
  // Title update on route change
  useTitleChange({ title: "Get_Started" });
  // back to top on page reload
  const toTop = useBackToTop();

  return (
    <>
      <motion.section className="bg-white w-full  overflow-x-hidden hide-scrollbar ">
        <Header />

        <section
          ref={toTop}
          className="flex flex-col items-center mt-[5rem] justify-center gap-[100px]"
        >
          <Hero />
          <Section_Two />

          <Section_three />
        </section>
        <Foot />
      </motion.section>
    </>
  );
}
