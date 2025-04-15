import React from "react";
import { Input } from "./Input";
import { Button } from "../../../components/Button";
import Map from "./Map";

export function Form() {
  return (
    <div className="flex  text-left text-blue-800 bg-blue-600 bg-[url('/public/assets/Record_keeping/herovirus.png')] items-center bg-cover justify-center w-full px-[100px]   overflow-x-hidden relative py-20 overflow-hidden">
      <div className="flex w-full justify-center rounded-3xl shadow-2xl bg-white  items-center gap-[99px] ">
        <div className="flex py-10 flex-col gap-5 items-start pl-20">
          <h1 className="font-nunito font-bold text-[56px] leading-[130%] tracking-[-0.28px]">
            Contact Us
          </h1>
          <div className="flex gap-5 flex-col">
            <Input label="Name" type="name" placeholder="Enter your name" />
            <Input
              label="Email"
              type="email"
              placeholder=".e.g... vaxnow@gmal.com"
            />
            <Input
              label="Question"
              placeholder="Enter question or feedback"
              textArea
              type="text"
            />
          </div>
          <Button style="py-3">Submit</Button>
        </div>
        <Map />
      </div>
    </div>
  );
}
