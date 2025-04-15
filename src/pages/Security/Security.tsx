import React from "react";
import { Hero_section } from "./Hero_section";
import { Section_two } from "./Section_two/Section_two";
import { Section_three } from "./Section_three/Section_three";
import useTitleChange from "../../Hooks/use-title-change";
import useBackToTop from "../../Hooks/use-back-to-top";

export default function Security() {
  // Title update on route change
  useTitleChange({ title: "Security" });
  // back to top on page reload
  const toTop = useBackToTop();

  return (
    <>
      <section
        ref={toTop}
        className="flex flex-col items-center justify-center py-[5rem] gap-[100px]"
      >
        <Hero_section />
        <Section_two />
        <Section_three />
      </section>
    </>
  );
}
