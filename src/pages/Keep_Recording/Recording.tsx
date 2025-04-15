import React from "react";
import { Hero } from "./Hero";
import { Section_two } from "./Section_two/Section_two";
import { Section_three } from "./Section_three/Section_three";
import { Section_four } from "./Section_four/Section_four";
import { FAQ } from "../../components/FAQ/FAQ";
import useTitleChange from "../../Hooks/use-title-change";
import useBackToTop from "../../Hooks/use-back-to-top";

export default function Recording() {
  // Title update on route change
  useTitleChange({ title: "Record Keeping" });
  // back to top on page reload
  const toTop = useBackToTop();

  return (
    <>
      <section
        ref={toTop}
        className="flex flex-col items-center justify-center gap-[100px] pb-[5rem]"
      >
        <Hero />
        <Section_two />
        <Section_three />
        <Section_four />
        <FAQ />
      </section>
    </>
  );
}
