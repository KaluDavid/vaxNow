import React from "react";
import { Roles } from "./Roles";

export function Section_four() {
  return (
    <>
      <section className="flex items-start justify-between w-full  bg-blue-600  bg-[url('/public/assets/rolesVirus.svg')]  bg-center px-20 gap-[8rem] pt-28 pb-[62px] ">
        <div className="flex items-start gap-[92px] flex-col text-white font-nunito *:flex *:items-start *:flex-col *:first:gap-4">
          <span className="*:first:font-bold *:first:text-3xl *:last:text-lg">
            <h3>Open roles</h3>
            <p>We are looking for people in Nigeria or remotely in GMT +3</p>
          </span>
          <div className="*:flex *:items-start *:flex-col *:gap-4 gap-10">
            <span className="*:first:font-bold *:first:text-3xl *:last:text-lg">
              <h3>2023</h3>
              <p>Founded</p>
            </span>
            <span className="*:first:font-bold *:first:text-3xl *:last:text-lg">
              <h3>1000+</h3>
              <p>Health centres</p>
            </span>
            <span className="*:first:font-bold *:first:text-3xl *:last:text-lg">
              <h3>300k</h3>
              <p>downloads</p>
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 justify-center w-full">
          <Roles text="Healthcare Data Analyst" />
          <Roles text="Customer Support Specialist" />
          <Roles text="Content Writer (Health)" />
          <Roles text="UX/UI Designer" />
          <Roles text="Frontend Developer" />
          <Roles text="Backend Developer" />
          <Roles text="Software Developer (Full Stack)" />
          <Roles text="Mobile App Developer" />
          <Roles text="Marketing Manager" />
        </div>
      </section>
    </>
  );
}
