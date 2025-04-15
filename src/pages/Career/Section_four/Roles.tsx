import React from "react";
import { TiArrowRight } from "react-icons/ti";

interface RolesProps {
  text: string;
}
export function Roles({ text }: RolesProps) {
  return (
    <div className="flex items-center justify-between w-full bg-white rounded-lg px-7.5 py-6 font-nunito text-gray-900 text-xl *:first:font-semibold">
      <span>{text}</span>
      <TiArrowRight />
    </div>
  );
}
