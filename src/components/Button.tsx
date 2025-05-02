import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useHoverButton from "../utils/motions/MotionHooks/useHoverButton";
interface ButtonProps {
  children: ReactNode;
  style?: string;
  to?: string | ReactNode;
  HandleClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
}
export function Button({ children, style, to, HandleClick }: ButtonProps) {
  const hoverScale = useHoverButton();
  return (
    <>
      <Link to={to} onClick={HandleClick}>
        <motion.button
          {...hoverScale}
          className={`flex flex-nowrap text-nowrap bg-blue-600 rounded-lg w-full  items-center justify-center gap-1.5 text-white text-xl text-lg  p-[15px] px-[30px]  font-semibold cursor-pointer ${style}`}
        >
          {children}
        </motion.button>
      </Link>
    </>
  );
}
