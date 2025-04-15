import { lazy } from "react";
// Lazy components
const Lazy = {
  Home: lazy(() => import("../pages/Home/Home.tsx")),
  Features: lazy(() => import("../pages/Features/Features.tsx")),
  Recording: lazy(() => import("../pages/Keep_Recording/Recording.tsx")),
  Vaccine_Education: lazy(
    () => import("../pages/Vaccine_Education/Vaccine_Education.tsx")
  ),
  Pricing: lazy(() => import("../pages/Pricing/Pricing.tsx")),
  Career: lazy(() => import("../pages/Career/Career.tsx")),
  Security: lazy(() => import("../pages/Security/Security.tsx")),
  Contact_Us: lazy(() => import("../pages/Mini-Pages/Contact/Contact_Us.tsx")),
  FAQ_Page: lazy(() => import("../pages/Mini-Pages/FAQ_Page.tsx")),
  Copy_Right: lazy(() => import("../pages/Mini-Pages/Copy_Right.tsx")),
  Terms_Of_Service: lazy(
    () => import("../pages/Mini-Pages/Terms/Terms_Of_Service.tsx")
  ),
  Get_Started: lazy(
    () => import("../pages/Mini-Pages/Get_Started/Get_Started.tsx")
  ),
  DownloadApp: lazy(
    () => import("../pages/Mini-Pages/DownloadApp/DownloadApp.tsx")
  ),
  Privacy_Policy: lazy(() => import("../pages/Mini-Pages/Privacy_Policy.tsx")),
  Error: lazy(() => import("../components/Error.tsx")),
};
export default Lazy;
