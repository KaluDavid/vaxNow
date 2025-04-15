import React from "react";

export function Terms({
  head,
  children,
}: {
  head: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-left gap-5">
      <h3 className="font-semibold text-4xl font-nunito leading-[62px]">
        {head}
      </h3>
      <div className="text-xl font-normal leading-[30px]">{children}</div>
    </div>
  );
}
