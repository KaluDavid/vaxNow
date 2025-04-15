import React from "react";
import Section_Eight from "./Section_Eight";
import { Foot } from "./Foot";

export function Footer() {
  return (
    <>
      <div className="flex items-center flex-col justify-center gap-[100px]">
        <Section_Eight />
        <Foot />
      </div>
    </>
  );
}
