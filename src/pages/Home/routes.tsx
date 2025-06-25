import { Home } from "./Home.tsx";
import { MainLayout } from "../../layouts";

export const homeRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
        { index: true, element: <Home /> },
        {path: 'home', element: <Home /> },
    ],
  },
];
