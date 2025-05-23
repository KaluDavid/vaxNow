import { motion } from "framer-motion";
import { childStagger } from "../../../utils/motions/motionVariants";
interface Users {
  img: string;
  name: string;
  article: string;
}
export function User({ img, name, article }: Users) {
  const child = childStagger();

  return (
    <>
      <motion.div
        variants={child}
        className="hover:scale-[1.05] transform transition-transform duration-300 ease-in-out flex py-13.5 px-8 items-start justify-start rounded-3xl rounded-tr-[170px] bg-gray-200 flex-col gap-8 text-blue-800 "
      >
        <fieldset
          className="flex items-center gap-3
        "
        >
          <img src={img} alt="users image" />
          <span className="font-nunito font-semibold text-xl ">{name}</span>
        </fieldset>

        <article className="font-nunito-sans sm:w-[292px] text-xl">
          {article}
        </article>
      </motion.div>
    </>
  );
}
