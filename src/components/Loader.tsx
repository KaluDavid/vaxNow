import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./Button";
import { HealthCard } from "./HealthCard";
import { MdVaccines } from "react-icons/md";
import { Download } from "./Download";

function Loader() {
  return (
    <div className="size-screen animate-pulse  flex flex-col items-center gap-[9rem] px-[3rem] pt-[3rem] overflow-hidden">
      <section className="flex items-center justify-between w-full">
        <div className="w-[20%] py-[3rem] rounded-xl bg-gray-400 "></div>

        <div className="flex items-center gap-8 ">
          <div className="flex *:py-[2rem]  items-center gap-6  *:w-[10rem] *:rounded-xl  *:bg-gray-300  ">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className="w-[10rem] py-[3rem] rounded-xl bg-gray-400"></span>
        </div>
      </section>

      <section className="flex items-start gap-40 w-full ">
        <div className="flex flex-col w-[45%] ">
          <div className="flex items-start w-full flex-col *:w-full gap-6 ">
            <span className="rounded-xl bg-gray-300 py-[4rem] w-[20%]"></span>
            <div className="flex flex-col items-start justify-start gap-3 *:bg-gray-300 *:py-4 *:rounded-xl ">
              <span className="w-[20%]"></span>
              <span className="w-[50%]"></span>
              <span className="w-[30%]"></span>
            </div>{" "}
            <div className="flex flex-col items-end justify-end gap-3 *:bg-gray-300 *:py-4 *:rounded-xl ">
              <span className="w-[20%]"></span>
              <span className="w-[50%]"></span>
              <span className="w-[30%]"></span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[45%] ">
          <div className="flex items-start w-full flex-col *:w-full gap-6 ">
            <span className="rounded-xl bg-gray-300 py-[10rem] "></span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Loader;
