import React from "react";
import useBackToTop from "../../Hooks/use-back-to-top";
import useTitleChange from "../../Hooks/use-title-change";
import { FAQ } from "../../components/FAQ/FAQ";
import { Button } from "../../components/Button";

function FAQ_Page() {
  // Title update on route change
  useTitleChange({ title: "FAQ" });
  // back to top on page reload
  const toTop = useBackToTop();

  return (
    <>
      <section
        ref={toTop}
        className="flex flex-col items-center justify-center gap-[100px] pb-[5rem]"
      >
        <div className="flex text-center text-white bg-blue-600 bg-[url('/public/assets/Record_keeping/herovirus.png')] items-center bg-cover justify-center w-full px-[100px] text-blue-800  overflow-x-hidden relative py-[12rem] overflow-hidden">
          <div className="flex items-center flex-col gap-6">
            <h1 className="font-nunito font-bold text-[56px] leading-[130%] tracking-[-0.28px] ">
              Have Questions? We've Got Answers!
            </h1>
            <span className="text-xl font-normal tracking-[-0.1px] w-[76%] leading-8">
              Curious about how VaxNow works? Whether it's setting vaccine
              reminders, tracking multiple medications, or accessing your health
              records, our FAQ section has all the answers you need. Get clear,
              reliable information at your fingertips and stay on top of your
              health with ease!
            </span>
          </div>

          <fieldset className="flex  flex-col *:absolute *:last:top-[-45%]  *:last:left-0  *:last:rotate-180 *:first:top-0 *:first:right-0">
            <img src="/public/assets/question.svg" alt="FAQ" />
            <img src="/public/assets/question.svg" alt="FAQ" />
          </fieldset>
        </div>

        <FAQ />

        <div className="w-full px-[80px] flex items-center">
          <div className="flex rounded-2xl items-center flex-col justify-between size-full bg-blue-600 pt-20 pb-24.5 bg-[url('/public/assets/home_img/section_two_img/sect.svg')] bg-no-repeat px-[85px]  gap-8 text-center ">
            <h1 className="text-snow text-center font-nunito text-5xl font-semibold leading-16 ">
              Still have questions?
            </h1>
            <fieldset className="flex *:first:text-blue-600 relative items-center *:first:bg-blue-50 *:first:tfext-blue-600">
              <Button to="/contact">Contact Us</Button>
              <img
                src="/public/assets/arrow.svg"
                alt=""
                className="w-30 mt-[-30px] absolute right-[-8rem]"
              />
            </fieldset>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQ_Page;
