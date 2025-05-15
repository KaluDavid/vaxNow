import React from "react";
import { Hero_Left } from "./Hero_Left";
import { Hero_Right } from "./Hero_Right";

export function Hero_Section() {
  return (
    <>
      <div className="flex lg:flex-row flex-col  items-center justify-center text-blue-800 gap-[66px] sm:px-[50px] px-5 xl:px-[100px] overflow-x-hidden">
        <Hero_Left />
        <Hero_Right />
      </div>
    </>
  );
}
