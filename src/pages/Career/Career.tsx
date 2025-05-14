import React from "react";
import { Hero } from "./Hero";
import { Section_Two } from "./section_two/Section_Two";
import { Partners } from "../../components/Partners";
import { Section_four } from "./Section_four/Section_four";
import useTitleChange from "../../Hooks/use-title-change";
import useBackToTop from "../../Hooks/use-back-to-top";

export default function Career() {
  // Title update on route change
  useTitleChange({ title: "Career" });
  // back to top on page reload
  const toTop = useBackToTop();

  return (
    <>
      <section
        ref={toTop}
        className="flex mt-[5rem] flex-col items-center justify-center  py-[5rem] gap-[100px]"
      >
        <Hero />
        <Section_Two />
        <Partners />
        <Section_four />
      </section>
    </>
  );
}
