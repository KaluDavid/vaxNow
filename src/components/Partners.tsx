import { motion } from "framer-motion";
import useRevealOnScroll from "../utils/motions/MotionHooks/useRevealOnScroll";
const images = [
  "/public/assets/home_img/section_seven_img/logo1.png",
  "/public/assets/home_img/section_seven_img/logo2.png",
  "/public/assets/home_img/section_seven_img/logo3.png",
  "/public/assets/home_img/section_seven_img/logo4.png",
  "/public/assets/home_img/section_seven_img/logo5.png",
  "/public/assets/home_img/section_seven_img/logo6.png",
  "/public/assets/home_img/section_seven_img/logo7.png",
  "/public/assets/home_img/section_seven_img/logo8.png",
];

export function Partners() {
  const scrollIn = useRevealOnScroll();

  return (
    <>
      <section className="text-blue-600 flex-nowrap whitespace-nowrap w-full overflow-hidden px-[80px] flex items-center flex-col justify-center gap-[88px]">
        <motion.h1
          {...scrollIn}
          className="  font-nunito text-5xl font-semibold leading-16"
        >
          See our partners and collaborators
        </motion.h1>
        <motion.ul
          whileInView={{
            x: ["0%", "-100%"],
            transition: {
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            },
          }}
          //
          className="grid  grid-cols-4 items-center gap-6 *:flex *:items-center *:justify-center *:rounded-tr-[40px] *:rounded-bl-[40px] *:rounded-tl-2xl *:rounded-br-2xl *:w-[292px] *:object-fill  *:bg-blue-50 *:py-6 *:px-5 "
        >
          {[...images].map((src, index) => (
            <li key={index}>
              <img src={src} />
            </li>
          ))}
        </motion.ul>
      </section>
    </>
  );
}

{
  /* <li>
            <img
              src="/assets/home_img/section_seven_img/logo1.png"
              alt="pink Africa"
            />
          </li>
          <li>
            <img src="/assets/home_img/section_seven_img/logo2.png" alt="SFH" />
          </li>
          <li>
            <img
              src="/assets/home_img/section_seven_img/logo3.png"
              alt="FHI360"
            />
          </li>
          <li>
            <img
              src="/assets/home_img/section_seven_img/logo4.png"
              alt="Health emergency initiative"
            />
          </li>
          <li>
            <img
              src="/assets/home_img/section_seven_img/logo5.png"
              alt="Save the children"
            />
          </li>
          <li>
            <img
              src="/assets/home_img/section_seven_img/logo6.png"
              alt="CFHI"
            />
          </li>
          <li>
            <img
              src="/assets/home_img/section_seven_img/logo7.png"
              alt="ARFH"
            />
          </li>
          <li>
            <img
              src="/assets/home_img/section_seven_img/logo8.png"
              alt="eHealth4Everyone"
            />
          </li> */
}
