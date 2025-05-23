import { Hero_Section } from "./hero-section/Hero_Section";
import { Section_Two } from "./Section_Two/Section_Two";
import { Section_three } from "./Section_Three/Section_three";
import { Section_Four } from "./Section_Four/Section_Four";
import { Section_Five } from "./Section_Five/Section_Five";
import { Section_six } from "./Section_Six/Section_six";
import { Partners } from "../../components/Partners";
import useBackToTop from "../../Hooks/use-back-to-top";

export default function Home() {
  // back to top on page reload
  const toTop = useBackToTop();

  return (
    <>
      <main
        ref={toTop}
        className="py-[5rem] sm:mt-[5rem] mt-[3rem] flex items-center gap-[100px] justify-center flex-col size-full overflow-x-hidden"
      >
        <Hero_Section />
        <Section_Two />
        <Section_three />
        <Section_Four />
        <Section_Five />
        <Section_six />
        <Partners />
      </main>
    </>
  );
}
