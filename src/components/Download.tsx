import React from "react";
import { Button } from "./Button";
import { FaApple } from "react-icons/fa6";
import { motion } from "framer-motion";
interface DownloadProps {
  button?: string;
  playstore?: string;
}
export function Download({ button, playstore }: DownloadProps) {
  return (
    <>
      <div className="flex items-center justify-between gap-8 w-full">
        <motion.span
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex"
        >
          <Button style={`w-[16rem] ${button}`} to="/get_started">
            <span className="text-nowrap">Get Started</span>
          </Button>
        </motion.span>

        <motion.span
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex"
        >
          <Button
            to="/DownloadApp"
            style={` text-nowrap gap-2.5 w-full ${playstore}`}
          >
            <img src="/assets/playstore.svg" alt="playstore" />
            <hr className=" bg-gray-400 h-8 w-[1px]" />
            <span className="text-3xl">
              <FaApple />
            </span>
            <span className=" *:text-blue-900">Download App</span>
          </Button>
        </motion.span>
      </div>
    </>
  );
}
