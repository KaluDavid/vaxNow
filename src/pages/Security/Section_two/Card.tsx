import React from "react";

interface CardsProps {
  icons: React.ReactNode;
  title: string;
  article: string;
}
export function Card({ icons, title, article }: CardsProps) {
  return (
    <>
      <div className="flex items-center justify-center flex-col gap-8 *:items-center *:flex *:flex-col *:gap-5   text-white px-5 py-14 ">
        <span className="rounded-full bg-darker-gray p-2 flex items-center justify-center  text-[40px] size-10">
          {icons}
        </span>
        <h4 className="font-bold text-xl font-nunito ">{title}</h4>
        <p className="text-xl font-nunito-sans font-normal leading-[30px]">
          {article}
        </p>
      </div>
    </>
  );
}
