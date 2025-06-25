import { Gallery } from "./Gallery.tsx";
import { MainLayout } from "../../layouts";

export const galleryRoutes = [
  {
    path: "gallery",
    element: <MainLayout />,
    children: [
        { index: true, element: <Gallery /> },
        // We can add more routes here if needed
    ],
  },
];
