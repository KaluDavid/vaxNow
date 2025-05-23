import { Hero } from "./Hero";
import { Section_two } from "./Section_Two/Section_two";
import { Section_three } from "./Section_three/Section_three";
import { Section_four } from "./Section_four/Section_four";
import { Section_five } from "./Section_five/Section_five";
import { Section_six } from "./Section_six/Section_six";
import { Section_seven } from "./section_seven/Section_seven";
import { FAQ } from "../../components/FAQ/FAQ";
import useTitleChange from "../../Hooks/use-title-change";
import useBackToTop from "../../Hooks/use-back-to-top";

export default function Features() {
  // Title update on route change
  useTitleChange({ title: "Features" });
  // back to top on page reload
  const toTop = useBackToTop();
  return (
    <>
      <section
        ref={toTop}
        className="flex mt-[5rem] w-full flex-col items-center justify-center gap-[50px] lg:gap-[100px] py-[5rem]"
      >
        <Hero />
        <Section_two />
        <Section_three />
        <Section_four />
        <Section_five />
        <Section_six />
        <Section_seven />
        <FAQ />
      </section>
    </>
  );
}
