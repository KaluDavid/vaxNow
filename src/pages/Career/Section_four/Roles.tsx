import { TiArrowRight } from "react-icons/ti";
import { motion } from "framer-motion";
import { childStagger } from "../../../utils/motions/motionVariants";
interface RolesProps {
  text: string;
}
export function Roles({ text }: RolesProps) {
  const child = childStagger();
  return (
    <motion.div
      variants={child}
      className=" hover:scale-[1.05] transform transition-transform duration-300 ease-in-out flex items-center justify-between w-full bg-white rounded-lg px-7.5 py-6 font-nunito text-gray-900 text-xl *:first:font-semibold"
    >
      <span>{text}</span>
      <TiArrowRight />
    </motion.div>
  );
}
