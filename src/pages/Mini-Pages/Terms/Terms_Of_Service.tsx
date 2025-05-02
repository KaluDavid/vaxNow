import React from "react";
import useBackToTop from "../../../Hooks/use-back-to-top";
import useTitleChange from "../../../Hooks/use-title-change";
import { Terms } from "./Terms";
import { motion } from "framer-motion";
import { revealFromBottom } from "../../../utils/motions/motionVariants";
import useRevealOnScroll from "../../../utils/motions/MotionHooks/useRevealOnScroll";
function Terms_Of_Service() {
  // Title update on route change
  useTitleChange({ title: "Terms Of Service" });
  // back to top on page reload
  const toTop = useBackToTop();

  const fromBottom = revealFromBottom();
  const reveal = useRevealOnScroll();

  return (
    <>
      <section
        ref={toTop}
        className="flex mt-[7rem]  flex-col items-center justify-center pb-[5rem] text-blue-800"
      >
        <motion.fieldset
          variants={fromBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src="/public/assets/term.png" alt="terms of service" />
        </motion.fieldset>
        <motion.div
          {...reveal}
          className="grid grid-cols-2 gap-8 pt-10 px-20 items-start justify-start "
        >
          <Terms head="1. Introduction">
            <span>
              Welcome to VaxNow! These Terms of Service ("Terms") govern your
              use of our website and services. By accessing or using VaxNow, you
              agree to comply with these Terms. If you do not agree, please
              refrain from using our services.
            </span>
          </Terms>
          <Terms head="2. Use of Our Services">
            <span>
              You agree to use VaxNow for lawful purposes and in a manner that
              does not infringe on the rights of others. You must not:
            </span>
            <span className="flex flex-col items-start gap-3.5 ">
              <li>
                Engage in any activity that disrupts or harms the website.
                <li>Attempt to gain unauthorized access to our system.</li>
                <li>
                  Use our content for commercial purposes without permission
                </li>
              </li>
            </span>
          </Terms>
          <Terms head="3. Account & Security">
            <span>
              Some features may require you to create an account. You are
              responsible for:
            </span>
            <span className="flex flex-col items-start gap-3.5 ">
              <li>
                Providing accurate information.
                <li>Keeping your login details secure.</li>
                <li>
                  Immediately reporting any unauthorized account activity.
                </li>
              </li>
            </span>
          </Terms>
          <Terms head="4. Privacy Policy">
            <span>
              Your use of VaxNow is also governed by our Privacy Policy, which
              outlines how we collect, use, and protect your data.
            </span>
          </Terms>
          <Terms head="5. Intellectual Property">
            <span>
              All content, including text, images, logos, and software, is owned
              by or licensed to VaxNow and is protected by copyright and
              trademark laws. You may not copy, distribute, or modify any
              content without authorization.
            </span>
          </Terms>
          <Terms head="6. Limitation of Liability">
            <span>
              We strive to provide accurate and reliable information, but VaxNow
              is not responsible for:
            </span>
            <span className="flex flex-col items-start gap-3.5 ">
              <li>
                Any errors, omissions, or outdated information.
                <li>
                  Any losses or damages resulting from the use of our services.
                </li>
                <li>
                  Third-party links or services accessed through our platform.
                </li>
              </li>
            </span>
          </Terms>
          <Terms head="7. Termination of Access">
            <span>
              We reserve the right to suspend or terminate your access to VaxNow
              if you violate these Terms or engage in activities that may harm
              our users or platform.
            </span>
          </Terms>
          <Terms head="8. Changes to These Terms">
            <span>
              We may update these Terms from time to time. Your continued use of
              VaxNow after changes take effect means you accept the revised
              Terms.
            </span>
          </Terms>
          <Terms
            head="9. Contact Us
"
          >
            <span>
              For any questions regarding these Terms, please contact us at
              support@vaxnow.com.
            </span>
          </Terms>
        </motion.div>
      </section>
    </>
  );
}

export default Terms_Of_Service;
