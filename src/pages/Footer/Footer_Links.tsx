import React from "react";
interface Links {
  head: string;
  children: React.ReactNode;
}
export function Footer_Links({ head, children }: Links) {
  return (
    <ul className="flex gap-4 font-nunito-sans text-xl flex-col font-normal">
      <p className="font-nunito text-2xl font-semibold">{head}</p>
      {children}
    </ul>
  );
}
