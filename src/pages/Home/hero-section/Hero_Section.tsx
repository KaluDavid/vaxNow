import React from "react";
import { Hero_Left } from "./Hero_Left";
import { Hero_Right } from "./Hero_Right";

export function Hero_Section() {
  return (
    <>
      <div className="flex items-center justify-center px-[100px] text-blue-800 ] overflow-x-hidden">
        <Hero_Left />
        <Hero_Right />
      </div>
    </>
  );
}
