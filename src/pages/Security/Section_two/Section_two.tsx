import React from "react";
import { MdOutlineVpnKey } from "react-icons/md";
import { GrTable } from "react-icons/gr";
import { TbLock } from "react-icons/tb";
import { Card } from "./Card";

export function Section_two() {
  return (
    <>
      <section className="w-full flex items-center">
        <div className="flex items-center flex-col justify-between size-full bg-blue-600 pt-20 pb-24.5 bg-[url('/public/assets/home_img/section_two_img/sect.svg')] bg-no-repeat px-[85px]  gap-20 text-center">
          <h1 className="text-snow text-center font-nunito text-5xl font-semibold leading-16">
            Your privacy, our priority
          </h1>
          <div className="flex gap-8 items-center justify-center ">
            <Card
              icons={<MdOutlineVpnKey />}
              title="Strict access control"
              article="Only authorized personnel and healthcare professionals can access your records, and only with your consent."
            />
            <Card
              icons={<GrTable />}
              title="Strict access control"
              article="Only authorized personnel and healthcare professionals can access your records, and only with your consent."
            />
            <Card
              icons={<TbLock />}
              title="Strict access control"
              article="Only authorized personnel and healthcare professionals can access your records, and only with your consent."
            />
          </div>
        </div>
      </section>
    </>
  );
}
