import React from "react";
import { Download } from "../../components/Download";

export function Hero_section() {
  return (
    <>
      <div className="flex items-center justify-between w-full px-[100px] text-blue-800  overflow-x-hidden">
        <div className="flex flex-col items-start text-left">
          <div className="flex w-[40rem] items-start flex-col gap-6">
            <h1 className="font-nunito font-bold text-[56px] leading-[130%] tracking-[-0.28px] ">
              Protected with the Highest Standards
            </h1>
            <span className="text-xl font-normal tracking-[-0.1px] w-[490px] leading-8">
              We are committed to maintaining the security and privacy of your
              data, ensuring that your health records are always protected.
            </span>

            <div className="flex items-start  flex-col">
              <Download playstore="*:text-blue-800 bg-gray-100" />
            </div>
          </div>
        </div>

        <fieldset className="*:size-full *:object-contain items-center">
          <img src="/assets/security/protected.png" alt="protected" />
        </fieldset>
      </div>
    </>
  );
}
