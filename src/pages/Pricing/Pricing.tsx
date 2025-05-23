import { Hero_Section } from "./Hero_Section";
import { Section_two } from "./Section_two/Section_two";
import { Section_three } from "./Section_three/Section_three";
import { Partners } from "../../components/Partners";
import { FAQ } from "../../components/FAQ/FAQ";
import useTitleChange from "../../Hooks/use-title-change";
import useBackToTop from "../../Hooks/use-back-to-top";

export default function Pricing() {
  // Title update on route change
  useTitleChange({ title: "Pricing" });

  // back to top on page reload
  const toTop = useBackToTop();

  return (
    <>
      <section
        ref={toTop}
        className="flex mt-[2.5rem] sm:mt-[5rem] flex-col items-center justify-center  py-[5rem] gap-[100px]"
      >
        <Hero_Section />
        <Section_two />
        <Section_three />
        <Partners />
        <FAQ />
      </section>
    </>
  );
}
