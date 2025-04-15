import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PageLayout } from "./pages/Layouts/PageLayout";
import Loader from "./components/Loader.tsx";
import Lazy from "./utils/Lazy.ts";

// Lazy components
const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "",
        element: <Lazy.Home />,
      },
      {
        path: "features",
        element: <Lazy.Features />,
      },
      {
        path: "record_keeping",
        element: <Lazy.Recording />,
      },
      {
        path: "vaccine_Education",
        element: <Lazy.Vaccine_Education />,
      },
      {
        path: "pricing",
        element: <Lazy.Pricing />,
      },
      {
        path: "career",
        element: <Lazy.Career />,
      },
      {
        path: "security",
        element: <Lazy.Security />,
      },
      {
        path: "faq",
        element: <Lazy.FAQ_Page />,
      },
      {
        path: "contact",
        element: <Lazy.Contact_Us />,
      },
      {
        path: "terms-of-service",
        element: <Lazy.Terms_Of_Service />,
      },
      {
        path: "privacy_policy",
        element: <Lazy.Privacy_Policy />,
      },
      {
        path: "copy_right",
        element: <Lazy.Copy_Right />,
      },
    ],
  },
  {
    path: "*",
    element: <Lazy.Error />,
  },
  {
    path: "DownloadApp",
    element: <Lazy.DownloadApp />,
  },
  {
    path: "get_started",
    element: <Lazy.Get_Started />,
  },
]);

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
