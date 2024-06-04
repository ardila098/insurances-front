import { lazy } from "react";

const InsurancePage = lazy(() => import("../views/insurance/InsurancePage"));
const VisionPage = lazy(() => import("../views/VisionPage"));

export const RoutesApp = [
  {
    path: "/*",
    name: "koc",
    icon: "bar-chart-2",
    component: InsurancePage,
  },
  {
    path: "vision",
    name: "vision",
    icon: "bar-chart-2",
    component: VisionPage,
  },
];
