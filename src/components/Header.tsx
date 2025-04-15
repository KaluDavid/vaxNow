import React from "react";
import { Button } from "./Button";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between px-[100px] font-nunito-sans">
        <NavLink to="/">
          <img
            src="/assets/logo.svg"
            alt="vaxNow Logo"
            className=" object-contain w-[126px] shrink-0 py-[30px]"
          />
        </NavLink>

        <div className="flex items-center gap-8 ">
          <ul className="flex *:text-nowrap  items-center gap-6 text-blue-800 *:text-xl *:font-normal ">
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
      </header>
    </>
  );
}
