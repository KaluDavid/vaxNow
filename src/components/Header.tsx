import { useEffect, useState } from "react";
import { Button } from "./Button";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
export default function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // cleanUp function on mount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // close menu when switching to desktop view
  useEffect(() => {
    if (windowWidth > 1024 && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [windowWidth, isMenuOpen]);

  // toggle menu open state
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex items-center top-0 fixed w-full bg-white z-50 py-[30px] justify-between max-lg:px-[50px] max-sm:px-[20px] lg:max-xl:px-[50px] xl:px-[100px] font-nunito-sans"
      >
        <NavLink to="/">
          <img
            src="/assets/logo.svg"
            alt="vaxNow Logo"
            className=" object-contain w-[79.997px]  sm-xl:w-[126px] shrink-0 "
          />
        </NavLink>

        {windowWidth > 1024 && (
          <div className="flex items-center gap-8">
            <ul className="flex  *:text-nowrap  items-center gap-6 text-blue-800 sm-xl:*:text-xl *:text-lg *:font-normal ">
              <NavLink
                to="/features"
                className={({ isActive }) => (isActive ? "text-blue-600" : "")}
              >
                <li>Features</li>
              </NavLink>
              <NavLink
                to="/record_keeping"
                className={({ isActive }) => (isActive ? "text-blue-600" : "")}
              >
                <li>Record keeping</li>
              </NavLink>
              <NavLink
                to="/vaccine_Education"
                className={({ isActive }) => (isActive ? "text-blue-600" : "")}
              >
                <li>Vaccine Education</li>
              </NavLink>
              <NavLink
                to="/pricing"
                className={({ isActive }) => (isActive ? "text-blue-600" : "")}
              >
                <li>Pricing</li>
              </NavLink>
            </ul>
            <Button to="/get_started">Get Started</Button>
          </div>
        )}

        {windowWidth <= 1024 && (
          <div
            onClick={toggleMenu}
            className="flex items-center flex-col gap-[5px] *:w-[24px] *:sm:w-[35px] sm:gap-2 *:h-[3px] *:bg-blue-600 gap-2 "
          >
            {!isMenuOpen ? (
              <>
                <span className="  transition-all duration-300"></span>
                <span className="  transition-all duration-300"></span>
                <span className="  transition-all duration-300"></span>
              </>
            ) : (
              <>
                <span className="  rotate-45 sm:translate-y-1.5 translate-y-1 transition-all duration-300"></span>
                <span className="  -rotate-45 sm:-translate-y-1 -translate-y-1 transition-all duration-300"></span>
              </>
            )}
          </div>
        )}
      </motion.header>

      {isMenuOpen && (
        <div className=" items-center gap-8 bg-white pt-[40px] fixed top-20 smButton:w-1/2 w-3/4 h-full flex flex-col z-40">
          <ul className="flex flex-col *:text-nowrap  items-center gap-6 text-blue-800 *:text-xl *:font-normal ">
            <NavLink
              to="/features"
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            >
              <li>Features</li>
            </NavLink>
            <NavLink
              to="/record_keeping"
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            >
              <li>Record keeping</li>
            </NavLink>
            <NavLink
              to="/vaccine_Education"
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            >
              <li>Vaccine Education</li>
            </NavLink>
            <NavLink
              to="/pricing"
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            >
              <li>Pricing</li>
            </NavLink>
          </ul>
          <Button to="/get_started">Get Started</Button>
        </div>
      )}
    </>
  );
}
