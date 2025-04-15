import { motion } from "framer-motion";
import { useHoverCards } from "../../../utils/motions/MotionHooks/useHoverCards";
import { childStagger } from "../../../utils/motions/motionVariants";
interface Users {
  img: string;
  name: string;
  article: string;
}
export function User({ img, name, article }: Users) {
  const hoverCards = useHoverCards();
  const child = childStagger();

  return (
    <>
      <motion.div
        {...hoverCards}
        variants={child}
        className="flex py-13.5 px-8 items-start justify-start rounded-3xl rounded-tr-[170px] bg-gray-200 flex-col gap-8 text-blue-800"
      >
        <fieldset
          className="flex items-center gap-3
        "
        >
          <img src={img} alt="users image" />
          <span className="font-nunito font-semibold text-xl ">{name}</span>
        </fieldset>

        <article className="font-nunito-sans w-[292px] text-xl">
          {article}
        </article>
      </motion.div>
    </>
  );
}
