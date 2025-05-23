import { Hero } from "./Hero";
import { Section_Two } from "./Section_Two/Section_Two";
import { Section_three } from "./Section_three/Section_three";
import { FAQ } from "../../components/FAQ/FAQ";
import useTitleChange from "../../Hooks/use-title-change";
import useBackToTop from "../../Hooks/use-back-to-top";

export default function Vaccine_Education() {
  // Title change logic
  useTitleChange({ title: "Vaccine_Education" });
  // back to top on page reload
  const toTop = useBackToTop();

  return (
    <>
      <section
        ref={toTop}
        className="flex lg:mt-[5rem] flex-col items-center justify-center pt-[8rem] py-[5rem] lg:pt-[6.5rem]"
      >
        <Hero />
        <Section_Two />
        <Section_three />
        <FAQ />
      </section>
    </>
  );
}
