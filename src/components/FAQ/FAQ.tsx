import React from "react";
import { DownloadAppContent } from "../DownloadAppContent";
import { DropDown } from "./DropDown";
import {
  parentStagger,
  slideInLeftRight,
  slideInRightLeft,
} from "../../utils/motions/motionVariants";
import { motion } from "framer-motion";
import useRevealOnScroll from "../../utils/motions/MotionHooks/useRevealOnScroll";
export function FAQ() {
  const parent = parentStagger();
  const slideLeft = slideInLeftRight();
  const slideRight = slideInRightLeft();
  const reveal = useRevealOnScroll();
  return (
    <>
      <motion.section
        {...reveal}
        className="w-full flex flex-col sm:flex-row max-sm:gap-[80px] items-start m-0 md:px-[50px] xl:px-[90px] px-[20px] lg:gap-[148px]"
      >
        <motion.span
          variants={slideLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <DownloadAppContent
            style="sm:gap-[10px] "
            headStyle="max-sm:text-5xl"
            width="full"
            heading="FAQs"
            article="Answers to frequently asked questions"
            button="sm:mt-[48px]"
          />
        </motion.span>
        <motion.span
          variants={slideRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            variants={parent}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="flex items-start w-full flex-col gap-6"
          >
            <DropDown text="How often will I receive reminders for upcoming vaccinations?">
              <div className="flex  flex-col [&_li]:pl-3 gap-1.5 ">
                <span>
                  You’ll receive timely reminders based on your vaccination
                  schedule. Notifications can be set for:
                </span>
                <li>A week before your due date</li>
                <li>A day before</li> <li>The day of the appointment</li>
                <span>
                  You can also customize reminder preferences in your settings
                </span>
              </div>
            </DropDown>
            <DropDown
              text="Can I add custom vaccinations to the tracker?"
              article="Yes! You can manually add vaccinations that may not be pre-listed in the app. Simply enter the vaccine name, date, and any additional notes to track it alongside your scheduled immunizations."
            />
            <DropDown
              text="Can I track multiple medications at once?"
              article="Absolutely! The tracker allows you to manage multiple medications and vaccination schedules simultaneously, making it easy to stay on top of your health routine.

"
            />
            <DropDown
              text="Can I set reminders for medication refills?"
              article="Yes! You can enable refill reminders to ensure you never run out of important medications. The app will notify you based on your selected schedule, whether it’s weekly, monthly, or as prescribed by your doctor.

"
            />
            <DropDown
              text="How long does a session with a doctor last?"
              article="Doctor consultations typically last between 15 to 30 minutes, depending on the nature of the visit. However, session durations may vary based on the doctor’s availability and the complexity of your concerns.

"
            />
            <DropDown text="What is the USSD code for accessing my health records?">
              <div className="flex  flex-col gap-1.5 ">
                <span>
                  You can access your health records by dialing <b>347161#</b>{" "}
                  on your mobile device. This service is part of an initiative
                  to improve healthcare accessibility in Nigeria.
                </span>
                <span>
                  However, USSD access to personal health records may vary by
                  hospital or region. It’s best to check with your healthcare
                  provider to confirm the specific code applicable to your
                  facility.
                </span>
              </div>
            </DropDown>

            <DropDown text="How can I share my health records with a participating hospital?">
              <div className="flex  flex-col [&_li]:pl-3 gap-1.5 ">
                <span>
                  You can securely share your health records with a hospital in
                  two ways:
                </span>
                <li>
                  Via QR Code: Generate a QR code from the app for instant
                  sharing.
                </li>
                <li>
                  Via Secure Link: Send an encrypted link to the hospital’s
                  system for direct access.
                </li>
                <span>
                  Your privacy is a priority, and records can only be shared
                  with your consent.
                </span>
              </div>
            </DropDown>

            <DropDown text="How can I contact a hospital listed in the database?">
              <div className="flex  flex-col [&_li]:pl-3 gap-1.5 ">
                <span>
                  Each listed hospital has a contact button where you can:
                </span>
                <li>Call them directly</li>
                <li>Send an inquiry email</li>
                <li>Get directions via Google Maps</li>
                <span>
                  Additionally, hospitals with online booking features allow you
                  to schedule an appointment within the app.
                </span>
              </div>
            </DropDown>
          </motion.div>
        </motion.span>
      </motion.section>
    </>
  );
}
