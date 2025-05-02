import React from "react";
import Header from "../../components/Header";
import { Footer } from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export function PageLayout() {
  return (
    <>
      <section className="bg-[red] size-full overflow-x-hidden">
        <Header />
        <Outlet />
        <Footer />
      </section>
    </>
  );
}
