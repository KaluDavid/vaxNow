import { GoCheckCircle } from "react-icons/go";
import { Purchase } from "./Purchase";
import { motion } from "framer-motion";
import { parentStagger } from "../utils/motions/motionVariants";
export function Subscribe() {
  const parent = parentStagger();
  return (
    <>
      <motion.div
        variants={parent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex xl:flex-row xl:flex-nowrap flex-wrap gap-8 items-center xl:justify-start w-full"
      >
        <Purchase
          background="bg-white shadow-purchase"
          tag="/assets/home_img/tag.svg"
          category="Basic"
          purchase="text-blue-800"
          price="0"
          tag_Style="bg-tag"
        >
          <li>
            <GoCheckCircle /> Vaccination tracker
          </li>
          <li>
            <GoCheckCircle />
            Medication tracker
          </li>
          <li>
            <GoCheckCircle />
            Health blog
          </li>
          <li>
            <GoCheckCircle />
            Hospital database
          </li>
        </Purchase>

        <Purchase
          background="bg-blue-600  text-gray-200"
          tag="/assets/home_img/Tag.png"
          category="Standard"
          purchase="text-xl font-semibold text-blue-600"
          price="20,000"
          tag_Style="bg-darker-gray"
        >
          <li>
            <GoCheckCircle />
            All features from basic plan
          </li>
          <li>
            <GoCheckCircle />
            DocChat (limited sessions)
          </li>
          <li>
            <GoCheckCircle />
            USSD access
          </li>
          <li>
            <GoCheckCircle />
            Priority support
          </li>
        </Purchase>

        <Purchase
          background="shadow-purchase bg-white"
          tag="/assets/home_img/tag.svg"
          category="Premium"
          purchase="text-blue-800"
          price="20,000"
          tag_Style="bg-tag"
        >
          <li>
            <GoCheckCircle />
            All features from Standard plan
          </li>
          <li>
            <GoCheckCircle />
            Unlimited DocChat Sessions
          </li>
          <li>
            <GoCheckCircle />
            Custom Branding
          </li>
          <li>
            <GoCheckCircle />
            Hospital Database
          </li>
        </Purchase>
      </motion.div>
    </>
  );
}
