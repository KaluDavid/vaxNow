import React from "react";
import useBackToTop from "../../../Hooks/use-back-to-top";
import useTitleChange from "../../../Hooks/use-title-change";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillSendCheckFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { Form } from "./Form";

function Contact_Us() {
  // Title update on route change
  useTitleChange({ title: "Contact Us" });
  // back to top on page reload
  const toTop = useBackToTop();
  return (
    <>
      <section
        ref={toTop}
        className="flex flex-col items-center justify-center gap-[100px] pb-[5rem]"
      >
        <div className="flex pt-20 items-center flex-col gap-6">
          <div className="flex w-full justify-between">
            <BiSolidPhoneCall className="text-grayee text-[120px]" />
            <h1 className="font-nunito font-bold text-[56px] leading-[130%] tracking-[-0.28px] text-blue-600 ">
              Drop Us a Line
            </h1>
            <BiSolidPhoneCall className="text-grayee text-[120px] scale-x-[-1]" />
          </div>
          <div className="flex gap-16 items-center  *:shadow-soft-lg *:flex  *:items-center *:gap-2 *:rounded-sm *:bg-white *:justify-center *:py-5 *:px-[19.5px] *:h-[60px]  font-nunito text-md ">
            <span className="*:first:text-blue-600 *:first:text-xl">
              <span>
                <FaLocationDot />
              </span>
              <span>Abuja, Nigeria</span>
            </span>
            <span className="*:first:text-blue-600 *:first:text-xl ">
              <span>
                <BsFillSendCheckFill />
              </span>
              <span>vaxnow@gmail.com</span>
            </span>
            <span className="*:first:text-blue-600 *:first:text-xl">
              <span>
                <FaPhoneAlt />
              </span>
              <span>+234-901-2234-559</span>
            </span>
          </div>
        </div>

        <Form />
      </section>
    </>
  );
}

export default Contact_Us;
