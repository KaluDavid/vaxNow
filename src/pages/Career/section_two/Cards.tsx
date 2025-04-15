import React from "react";

interface CardsProps {
  icons: React.ReactNode;
  title: string;
  article: string;
}
export function Cards({ icons, title, article }: CardsProps) {
  return (
    <>
      <div className="flex items-start flex-col gap-8 *:flex *:flex-col *:gap-5 rounded-tr-[150px] shadow-soft-lg rounded-2xl bg-blue-50 text-blue-800 px-5 py-14 ">
        <div>
          <span className="rounded-full bg-blue-200 p-2 flex items-center justify-center border border-gray-200 text-[40px] text-blue-600 size-10">
            {icons}
          </span>
          <h4 className="font-bold text-xl font-nunito ">{title}</h4>
          <p className="text-xl font-nunito-sans font-normal leading-[30px]">
            {article}
          </p>
        </div>
      </div>
    </>
  );
}
