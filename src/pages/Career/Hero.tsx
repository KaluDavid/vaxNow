import React from "react";
import { Download } from "../../components/Download";

export function Hero() {
  return (
    <>
      <div className="flex items-center justify-between w-full px-[100px] text-blue-800  overflow-x-hidden">
        <div className="flex flex-col items-start text-left">
          <div className="flex w-[40rem] items-start flex-col gap-6">
            <h1 className="font-nunito font-bold text-[56px] leading-[130%] tracking-[-0.28px] ">
              Join us to revolutionize healthcare in Africa!{" "}
            </h1>
            <span className="text-xl font-normal tracking-[-0.1px] w-[490px] leading-8">
              We are passionate about making healthcare accessible, organized,
              and efficient, particularly in Africa.
            </span>

            <div className="flex items-start  flex-col">
              <Download playstore="bg-gray-100" />
            </div>
          </div>
        </div>

        <fieldset className="*:size-full *:object-contain grid  grid-cols-2 gap-5 *:first:row-span-2 items-center">
          <img src="/assets/Career/img1.png" alt="health in Africa" />
          <img src="/assets/Career/img2.png" alt="health in Africa" />
          <img src="/assets/Career/im3.png" alt="health in Africa" />
        </fieldset>
      </div>
    </>
  );
}
