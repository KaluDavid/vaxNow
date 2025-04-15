import React from "react";
import { MdTrackChanges } from "react-icons/md";
import { BsGlobeEuropeAfrica } from "react-icons/bs";
import { IoMdTrendingUp } from "react-icons/io";
import { Cards } from "./Cards";

export function Section_Two() {
  return (
    <section className="w-full flex mb-[14rem] items-center">
      <div className="flex items-center flex-col justify-between w-full  h-[29rem] bg-blue-600  bg-[url('/public/assets/home_img/section_two_img/sect.svg')] bg-no-repeat px-16 gap-[8rem]">
        <h1 className="text-snow text-center font-nunito text-5xl font-semibold pt-30 leading-16">
          Why work with us?
        </h1>

        <div className="flex gap-8 items-center justify-center ">
          <Cards
            icons={<MdTrackChanges />}
            title="Innovative impact"
            article="              Work on a cutting-edge health tech platform that is transforming
              the way people manage their vaccination and medication records."
          />{" "}
          <Cards
            icons={<BsGlobeEuropeAfrica />}
            title="Collaborative culture"
            article="Be part of a diverse team of designers, medical professionals, & health advocates who believe in the power of technology."
          />{" "}
          <Cards
            icons={<IoMdTrendingUp />}
            title="Growth opportunities"
            article="Whether you're a marketer, health expert, or customer support professional, we provide the tools and mentorship to help you advance."
          />
        </div>
      </div>
    </section>
  );
}
