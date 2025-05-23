import Header from "../../components/Header";
import { Footer } from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export function PageLayout() {
  return (
    <>
      <section className="size-full overflow-x-hidden">
        <Header />
        <Outlet />
        <Footer />
      </section>
    </>
  );
}
