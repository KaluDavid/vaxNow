import { Input } from "./Input";
import { Button } from "../../../components/Button";
import Map from "./Map";
import { motion } from "framer-motion";
import {
  childStagger,
  parentStagger,
} from "../../../utils/motions/motionVariants";
import useWindowWidth from "../../../Hooks/use-window-width";
export function Form() {
  const parent = parentStagger();
  const child = childStagger();
  const { windowWidth } = useWindowWidth();
  return (
    <div className="flex w-full text-left text-blue-800 bg-blue-600 bg-[url('/assets/Record_keeping/herovirus.png')] items-center bg-cover justify-center w-full px-5 sm:px-[50px]  xl:px-[100px]   overflow-x-hidden relative py-20 overflow-hidden">
      <div className="flex w-screen justify-center rounded-3xl shadow-2xl bg-white items-center gap-10 max-lg:pb-5">
        <motion.div
          variants={parent}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          className="flex xl:py-10 flex-col gap-5 items-start  min-md:pl-10 px-5 sm:px-10 w-full "
        >
          <motion.h1
            variants={child}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="font-nunito font-bold text-[32px] leading-[41px] sm:text-[56px] sm:leading-[130%] tracking-[-0.28px] lg:max-sm-lg:pt-10 pt-5"
          >
            Contact Us
          </motion.h1>
          <div className="flex w-full gap-5 flex-col">
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
          <motion.span
            variants={child}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
          >
            <Button style="py-3">Submit</Button>{" "}
          </motion.span>
        </motion.div>
        {windowWidth > 1024 && <Map />}
      </div>
    </div>
  );
}
