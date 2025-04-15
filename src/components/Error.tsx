import React from "react";
import useBackToTop from "../Hooks/use-back-to-top";
import useTitleChange from "../Hooks/use-title-change";
import { Button } from "./Button";
import { BsHouse } from "react-icons/bs";
import { BiHome } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Error() {
  // Title change logic
  useTitleChange({ title: "404 🚫" });
  // back to top on page reload
  const toTop = useBackToTop();

  const navigate = useNavigate();
  return (
    <>
      <section
        ref={toTop}
        className="flex text-blue-800 items-center justify-center gap-20.5 pt-[11%] "
      >
        <fieldset className="object-contain">
          <img src="/assets/error.svg" alt="404" />
        </fieldset>
        <div className="flex flex-col items-start text-left gap-8">
          <div className=" *:first:text-blue-600 *:first:font-comic-sans-ms *:first:font-bold *:first:text-2xl">
            <h3>Uh oh..</h3>
            <h1 className="font-nunito font-bold text-[56px] leading-[130%] tracking-[-0.28px] ">
              Something went wrong{" "}
            </h1>
            <span className="text-lg font-nunito-sans font-normal tracking-[-0.1px] leading-8 ">
              Looks like this page doesn't exist or was removed.{" "}
            </span>
          </div>
          <div className="flex  items-center justify-center gap-8">
            {" "}
            <Button HandleClick={() => navigate(-1)}>Go Back</Button>
            <strong>OR</strong>
            <Button HandleClick={() => navigate("/")}>
              <BiHome /> Back to Home
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Error;
