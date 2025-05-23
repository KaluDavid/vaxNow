import { Download } from "../../components/Download";
import { HealthCard } from "../../components/HealthCard";
import { MdVaccines } from "react-icons/md";
import { motion } from "framer-motion";
import useScaleTop from "../../utils/motions/MotionHooks/useScaleTop";
import WordAnime from "../../utils/motions/WordAnime";
import Atropos from "atropos/react";
import { revealFromBottom } from "../../utils/motions/motionVariants";

const entryVariants = {
  hidden: { opacity: 0, x: "100vh" },
  visible: { opacity: 1, x: 0 },
};

export function Hero() {
  const scaleFromTop = useScaleTop();
  const scaleBottom = revealFromBottom();

  return (
    <>
      <div className="flex lg:pt-[50px] lg:flex-row flex-col items-center lg:pb-[150px] sm:pb-[80px] pb-[50px] sm:gap-40 gap-20 w-full  text-blue-800 relative">
        <motion.div
          {...scaleFromTop}
          className="flex flex-col w-full items-start text-left"
        >
          <div className="flex items-start w-full flex-col gap-6">
            <WordAnime
              text="Empower yourself with vaccine knowledge"
              style=" lg:w-[60%] sm:pl-[50px] pl-[20px] xl:pl-[100px]"
            />
            <div className="flex items-start justify-start bg-blue-50 py-8 sm:pl-[50px] pl-[20px] xl:pl-[100px] w-full">
              <span className="sm:text-xl  text-lg  font-normal tracking-[-0.1px] leading-8 sm:w-[490px] ">
                Understand how vaccines protect against harmful diseases.
                Address common misconceptions about vaccination.
              </span>
            </div>

            <div className="flex sm:pl-[50px] pl-[20px] xl:pl-[100px] items-start  flex-col">
              <Download playstore="bg-gray-100 *:text-blue-800" />
            </div>
          </div>
        </motion.div>

        <motion.div className="lg:absolute flex items-center right-0 ">
          <motion.span
            variants={entryVariants}
            initial="hidden"
            animate={"visible"}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="z-20 bg-[red] absolute lg:right-[30rem]   xl:right-[32rem] lg:top-[3.5rem] sm-xl:ml-[-5rem] mid-sm:max-sm-xl:ml-[-4rem] sm:ml-0 sm:mb-0 ml-[-3rem] sm:mt-0 mt-[-24rem]  *:text-nowrap "
          >
            <HealthCard
              iconColor="text-red-600"
              icon={<MdVaccines />}
              text="3,500+ Vaccinated Children"
            />
          </motion.span>
          <motion.fieldset
            variants={scaleBottom}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true }}
            className="lg:relative lg:ml-[-25rem] rounded-[40px] w-[255px] h-[530px]  border-[#002F56] border-[10px] object-fill"
          >
            <Atropos>
              {" "}
              <img
                src="/assets/Vaccine_education/Home.png"
                alt="our app"
                className=" object-fill rounded-none"
              />
            </Atropos>
          </motion.fieldset>
          <motion.span
            variants={entryVariants}
            initial="hidden"
            animate={"visible"}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 0.5,
            }}
            exit={{ opacity: 1 }}
            className="z-20 bg-[red] absolute  lg:right-[14rem] lg:bottom-[7rem] sm-xl:ml-[10rem] mb-[-16rem] ml-[8rem] sm:ml-0 sm:mb-0 mid-sm:max-sm-xl:ml-[9rem]  *:text-nowrap "
          >
            <HealthCard
              iconColor="text-red-600"
              icon={<MdVaccines />}
              text="600+ Health Centres"
            />
          </motion.span>
        </motion.div>
      </div>
    </>
  );
}

{
  /* <h1 className="font-nunito  w-[60%]  pl-[100px] font-bold text-[56px] leading-[130%] tracking-[-0.28px] ">
              Empower yourself with vaccine knowledge
            </h1> */
}
