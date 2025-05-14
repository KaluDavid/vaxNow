import React from "react";
import { Button } from "./Button";
import { motion } from "framer-motion";
import { childStagger } from "../utils/motions/motionVariants";
interface PurchaseProps {
  tag: string;
  category?: string;
  price: string;
  purchase?: string;
  hr?: string;
  children: React.ReactNode;
  background: string;
  tag_Style?: string;
}
export function Purchase({
  tag,
  category,
  price,
  purchase,
  hr,
  children,
  background,
  tag_Style,
}: PurchaseProps) {
  const child = childStagger();

  return (
    <>
      <motion.div
        variants={child}
        className={` flex items-start flex-col gap-10 rounded-br-2xl rounded-tl-2xl justify-start rounded-t-[120px] rounded-bl-[120px] p-10 w-full sm:w-[25rem]  text-blue-800 ${background}`}
      >
        <div className="flex flex-col justify-start  items-start gap-6">
          <fieldset
            className={`flex p-2 items-center justify-center rounded-full  ${tag_Style} `}
          >
            <img src={tag} alt="tag" />
          </fieldset>
          <p className=" text-lg font-normal ">{category}</p>
        </div>
        <div className="flex  float-start items-center sm:items-end justify-start gap-4.5 w-full">
          <p className="md:text-[56px] max-sm:text-[32px] leading-[35px] font-extrabold ">
            ₦{price}
          </p>
          <small className="text-sm text-nowrap">/ per month</small>
        </div>
        <span className="flex *:w-full  w-full items-center justify-center ">
          <Button style="bg-white  w-[90px]  !bg-gray-100  text-blue-800">
            <span className={` font-normal text-sm ${purchase}`}>
              Purchase Now
            </span>
          </Button>
        </span>
        <hr className={`h-[1px] bg-blue-800 w-full ${hr}`} />
        <ul className="flex gap-4 font-nunito-sans  flex-col font-normal [&_li]:flex [&_li]:items-center [&_li]:gap-2 sm:text-xl">
          <p className="font-nunito text-[24px]  font-semibold text-lg">
            Features
          </p>
          {children}
        </ul>
      </motion.div>
    </>
  );
}
