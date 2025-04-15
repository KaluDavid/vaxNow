import React from "react";
import { FiFacebook } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { PiInstagramLogoLight } from "react-icons/pi";
import { Footer_Links } from "./Footer_Links";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  childStagger,
  parentStagger,
  revealFromBottom,
} from "../../utils/motions/motionVariants";
import { useHr } from "../../utils/motions/MotionHooks/useHr";

export function Foot() {
  const revealBottom = revealFromBottom();
  const parent = parentStagger();
  const child = childStagger();
  const onWiden = useHr();

  return (
    <>
      <footer className="w-full text-white rounded-tr-[300px] rounded-tl-3xl bg-blue-600 bg-[url('/public/assets/virus.png')] pb-10 pt-[100px] px-[80px] flex items-start flex-col justify-start gap-[88px]">
        <motion.div
          variants={parent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex w-full items-start justify-between "
        >
          <motion.div
            variants={child}
            viewport={{ once: true }}
            className="flex gap-13.5 flex-col"
          >
            <Link to="">
              <fieldset>
                <img src="/public/assets/vax.png" alt="vaxnow" />
              </fieldset>
            </Link>
            <div className="flex items-center gap-6 *:flex *:justify-center *:items-center *:rounded-full *:w-10 *:h-10 *:bg-white *:text-xl *:text-blue-800">
              <span>
                <FiFacebook />
              </span>
              <span>
                <RiTwitterXFill />
              </span>
              <span>
                <PiInstagramLogoLight />
              </span>
            </div>
          </motion.div>
          <motion.div variants={child} viewport={{ once: true }}>
            {" "}
            <Footer_Links head="About">
              <Link to="/features">
                <li>Features</li>
              </Link>
              <Link to="/record_keeping">
                <li>Record Keeping</li>
              </Link>
              <Link to="/vaccine_Education">
                <li>Vaccine Education</li>
              </Link>
              <Link to="/pricing">
                <li>Pricing</li>
              </Link>
            </Footer_Links>
          </motion.div>
          <motion.div variants={child} viewport={{ once: true }}>
            {" "}
            <Footer_Links head="Help">
              <Link to="/faq">
                <li>FAQ</li>
              </Link>
              <Link to="/contact">
                <li>Contact Us</li>
              </Link>
              <Link to="/career">
                <li>Career</li>
              </Link>
              <Link to="/terms-of-service">
                <li>Terms of Service</li>
              </Link>
            </Footer_Links>{" "}
          </motion.div>
          <motion.div variants={child}>
            <Footer_Links head="Legal">
              <Link to="/privacy_policy">
                <li>Privacy Policy</li>
              </Link>
              <Link to="/copy_right">
                <li>Copyright</li>
              </Link>
              <Link to="/security">
                <li>Security</li>
              </Link>
            </Footer_Links>
          </motion.div>
        </motion.div>

        <motion.div
          variants={revealBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex w-full flex-col items-center gap-8"
        >
          <motion.hr {...onWiden} className="h-[1px] bg-white w-full" />
          <h3 className="font-nunito-sans text-xl font-normal">
            Copyright @Vaxnow 2025. All right reserved
          </h3>
        </motion.div>
      </footer>
    </>
  );
}
