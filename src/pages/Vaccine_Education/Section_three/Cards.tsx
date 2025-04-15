import React, { useState } from "react";
interface CardsProps {
  img: string;
  heading: string;
  children: React.ReactNode;
}

const articleStyle = {
  WebkitLineClamp: 4,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  display: "-webkit-box",
};
export function Cards({ img, heading, children }: CardsProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return (
    <>
      <div className="flex flex-col text-left border border-card rounded-2xl  w-[395px] rounded-tr-[200px] ">
        <fieldset className="w-full *:rounded-tl-2xl *:rounded-tr-[200px]">
          <img src={img} alt="article images" className="w-auto" />
        </fieldset>
        <div className="flex  gap-12 py-6 px-3 flex-col">
          <span className="flex flex-col gap-4 *:last:text-base *:last:font-nunito-sans *:first:text-xl *:first:font-bold">
            <h3>{heading}</h3>
            <article style={isExpanded ? null : articleStyle}>
              {children}
            </article>
          </span>
          <span
            className="text-blue-600 font-xl  font-semibold w-auto cursor-pointer font-nunito"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </span>
        </div>
      </div>
    </>
  );
}
