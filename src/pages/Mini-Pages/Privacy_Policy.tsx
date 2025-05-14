import React from "react";
import useBackToTop from "../../Hooks/use-back-to-top";
import useTitleChange from "../../Hooks/use-title-change";
import { Terms } from "./Terms/Terms";
import useScaleTop from "../../utils/motions/MotionHooks/useScaleTop";
import { motion } from "framer-motion";
import useRevealOnScroll from "../../utils/motions/MotionHooks/useRevealOnScroll";
function Privacy_Policy() {
  // Title update on route change
  useTitleChange({ title: "Terms Of Service" });
  // back to top on page reload
  const toTop = useBackToTop();
  const scaleFromTop = useScaleTop();
  const reveal = useRevealOnScroll();
  return (
    <>
      <motion.section
        ref={toTop}
        {...reveal}
        className="flex flex-col pt-[2rem] sm:mt-[5rem] items-center justify-center pb-[5rem] text-blue-800"
      >
        <div className="flex sm:text-center text-white bg-blue-600 bg-[url('/public/assets/Record_keeping/herovirus.png')] items-center bg-cover justify-center w-full sm:px-[50px] px-5 xl:px-[100px] text-blue-800  overflow-x-hidden relative py-[7rem] overflow-hidden ">
          <motion.div
            {...scaleFromTop}
            className="flex items-center flex-col gap-6 !text-white"
          >
            <h1 className="font-nunito font-bold text-[42px] sm:text-[56px] leading-[130%] tracking-[-0.28px] ">
              Privacy Policy
            </h1>
            <h2 className="text-xl  sm:text-3xl font-medium font-nunito-sans">
              Your Privacy, Our Commitment
            </h2>
            <span className="text-lg sm:text-xl font-normal tracking-[-0.1px] lg:w-[76%] leading-8">
              At VaxNow, we prioritize the security and confidentiality of your
              personal data. This Privacy Policy outlines how we collect, use,
              and safeguard your information while providing you with seamless
              vaccination tracking and health record services.
            </span>
          </motion.div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 pt-20 max-sm:px-[20px] px-[50px]  xl:px-20 items-start justify-start ">
          <Terms head="Information We Collect">
            <span>
              Personal Information: Name, date of birth, contact details, and
              emergency contact information.
            </span>
            <ul className="flex flex-col items-start gap-3.5 ">
              <li>
                🔹 Health Data: Vaccination records, medication tracking
                details, and appointment schedules.
              </li>
              <li>🔹 Attempt to gain unauthorized access to our system.</li>
              <li>
                🔹 Usage Data: Device type, IP address, and interactions with
                our platform for service improvements.
              </li>
            </ul>
          </Terms>
          <Terms head="How We Use Your Information">
            <span>We use your data to:</span>
            <ul className="flex flex-col items-start gap-3.5 ">
              <li>
                🔹 Provide essential health services such as vaccine reminders
                and record management.
              </li>
              <li>
                🔹 Improve user experience through data-driven insights and
                personalized recommendations.
              </li>
              <li>
                🔹 Ensure security and compliance by protecting sensitive data
                and adhering to healthcare regulations.
              </li>
            </ul>
          </Terms>
          <Terms head="Data Protection & Security">
            <span>
              We implement strict security measures to prevent unauthorized
              access, disclosure, or modification of your data. This includes:
            </span>
            <ul className="flex flex-col items-start gap-3.5 ">
              <li>🔹 End-to-end encryption for sensitive information. </li>
              <li>🔹 Multi-layered authentication for secure access.</li>
              <li>
                🔹 Routine security audits to identify and mitigate
                vulnerabilities.
              </li>
            </ul>
          </Terms>

          <Terms head="Sharing & Third-Party Access">
            <span>
              We never sell your personal data. Your records are only shared
              with:
            </span>
            <ul className="flex flex-col items-start gap-3.5 ">
              <li>
                🔹 Authorized healthcare providers (with your explicit consent).
              </li>
              <li>
                🔹 Regulatory bodies if required by law for public health
                purposes.
              </li>
              <li>
                🔹 Secure third-party integrations that enhance user experience
                (e.g., appointment scheduling).
              </li>
            </ul>
          </Terms>
          <Terms head="Data Retention Policy">
            <span>
              Your health records are stored securely only for as long as
              necessary to provide services. Upon request, data can be
              permanently deleted.
            </span>
          </Terms>
          <Terms head="Questions About Your Privacy?">
            <span>
              If you have concerns about your data security, reach out to us at
              privacy@vaxnow.com.
            </span>
          </Terms>
        </div>
      </motion.section>
    </>
  );
}
export default Privacy_Policy;
