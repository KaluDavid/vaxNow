import React from "react";
import { Button } from "./Button";
interface DownloadApp {
  heading: string;
  article: string;
  style?: string;
  button?: string;
  width?: string;
}
export function DownloadAppContent({
  heading,
  article,
  button,
  style,
  width,
}: DownloadApp) {
  return (
    <div className={`flex flex-col items-start gap-10 text-blue-800 ${style}`}>
      <h3 className="font-semibold text-5xl font-nunito leading-[62px]">
        {heading}
      </h3>
      <p className={`text-xl font-normal w-[394px] leading-[30px] ${width}`}>
        {article}
      </p>
      <Button to="/DownloadApp" style={`${button}`}>
        <span>Download App</span>
      </Button>
    </div>
  );
}
