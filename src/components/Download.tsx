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
      <div className="flex flex-col sm-xl:flex-row items-start  sm:items-center justify-between gap-8 w-full">
        <motion.span
          initial={{ x: -100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.7, delay: 0.9 },
          }}
          viewport={{ once: true }}
          className="flex"
        >
          <Button style={`w-[16rem] ${button}`} to="/get_started">
            <span className="text-nowrap">Get Started</span>
          </Button>
        </motion.span>

        <motion.span
          initial={{ x: 100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.7, delay: 0.9 },
          }}
          viewport={{ once: true }}
          className="flex"
        >
          <Button
            to="/DownloadApp"
            style={` text-nowrap gap-2.5 w-full ${playstore}`}
          >
            <img src="/assets/playstore.svg" alt="playstore" loading="lazy" />
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
