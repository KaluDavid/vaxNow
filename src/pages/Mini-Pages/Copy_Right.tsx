import React from "react";
import useBackToTop from "../../Hooks/use-back-to-top";
import useTitleChange from "../../Hooks/use-title-change";
import { Terms } from "./Terms/Terms";
import { motion } from "framer-motion";
import WordAnime from "../../utils/motions/WordAnime";
function Copy_Right() {
  // Title update on route change
  useTitleChange({ title: "Copy Right" });
  // back to top on page reload
  const toTop = useBackToTop();

  return (
    <>
      <section
        ref={toTop}
        className="mt-[5rem]  flex flex-col items-center justify-center pb-[5rem] text-blue-800 py-20"
      >
        <WordAnime text="Copyright Policy" />
        <div className="grid grid-cols-2 gap-8 pt-20 px-20 items-start justify-start ">
          <Terms head="Ownership of Content">
            <span>
              All content on the VaxNow website, including but not limited to
              text, images, graphics, logos, icons, user interfaces, design
              elements, software, and other materials, is the exclusive property
              of VaxNow and is protected under copyright laws. Unauthorized use,
              reproduction, or distribution of any content without prior written
              permission is strictly prohibited.
            </span>
          </Terms>
          <Terms
            head="Permitted Use
"
          >
            <span>
              You are granted a limited, non-exclusive, and revocable license to
              access and use the website for personal, non-commercial purposes.
              This means you may:
            </span>
            <ul className="flex flex-col items-start gap-3.5 ">
              <li>🔹 View and interact with the website’s content.</li>
              <li>
                🔹 Download or print materials for personal use only (not for
                distribution).
              </li>
            </ul>
          </Terms>
          <Terms head="Prohibited Use">
            <span>You may not:</span>
            <ul className="flex flex-col items-start gap-3.5 ">
              <li>
                🚫 Copy, modify, reproduce, or distribute any part of the
                website without prior consent.
              </li>
              <li> 🚫 Use the content for commercial purposes or resale.</li>
              <li>
                🚫 Reverse-engineer, decompile, or manipulate the website’s
                code.
              </li>
            </ul>
          </Terms>
          <Terms
            head="Third-Party Content
"
          >
            <span>
              Some images, icons, and media on VaxNow may be sourced from
              third-party providers with proper licensing. These assets remain
              the intellectual property of their respective owners and are used
              in compliance with applicable agreements.
            </span>
          </Terms>
          <Terms
            head="Violation of Copyright
"
          >
            <span>
              Unauthorized use of VaxNow’s intellectual property may lead to
              legal action. If you believe that any content on this website
              infringes your copyright, please contact us at
              copyright@vaxnow.com with the necessary details.
            </span>
          </Terms>
          <Terms
            head="Changes to This Policy
"
          >
            <span>
              VaxNow reserves the right to update or modify this Copyright
              Policy at any time. Any changes will be reflected on this page,
              and continued use of the website constitutes acceptance of the
              revised terms.
            </span>
          </Terms>{" "}
          <Terms
            head="Need More Information?

"
          >
            <span>
              For copyright-related inquiries, reach out to us at
              copyright@vaxnow.com.
            </span>
          </Terms>
        </div>
      </section>
    </>
  );
}
export default Copy_Right;
