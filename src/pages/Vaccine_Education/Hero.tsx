import React from "react";
import { Download } from "../../components/Download";
import { HealthCard } from "../../components/HealthCard";
import { MdVaccines } from "react-icons/md";

export function Hero() {
  return (
    <>
      <div className="flex items-center pb-[150px] gap-40 w-full  text-blue-800 relative">
        <div className="flex flex-col w-full items-start text-left">
          <div className="flex items-start w-full flex-col gap-6">
            <h1 className="font-nunito  w-[60%]  pl-[100px] font-bold text-[56px] leading-[130%] tracking-[-0.28px] ">
              Empower yourself with vaccine knowledge{" "}
            </h1>
            <div className="flex items-start justify-start bg-blue-50 py-8 pl-[100px] w-full">
              <span className="text-xl font-normal tracking-[-0.1px] leading-8 w-[490px] ">
                Understand how vaccines protect against harmful diseases.
                Address common misconceptions about vaccination.
              </span>
            </div>

            <div className="flex pl-[100px] items-start  flex-col">
              <Download playstore="bg-gray-100 *:text-blue-800" />
            </div>
          </div>
        </div>

        <div className="absolute flex items-center right-0">
          <span className="z-20 bg-[red] absolute  right-[32rem] top-[3.5rem] *:text-nowrap ">
            <HealthCard
              iconColor="text-red-600"
              icon={<MdVaccines />}
              text="3,500+ Vaccinated Children"
            />
          </span>
          <fieldset className="relative ml-[-25rem] rounded-[35px] w-[255px] h-[530px]  border-[#002F56] border-[10px] object-fill">
            <img
              src="/assets/Vaccine_education/Home.png"
              alt="our app"
              className=" object-fill rounded-none"
            />
          </fieldset>
          <span className="z-20 bg-[red] absolute  right-[14rem] bottom-[7rem] *:text-nowrap ">
            <HealthCard
              iconColor="text-red-600"
              icon={<MdVaccines />}
              text="600+ Health Centres"
            />
          </span>
        </div>
      </div>
    </>
  );
}
