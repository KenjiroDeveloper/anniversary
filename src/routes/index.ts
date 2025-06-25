import { createBrowserRouter } from "react-router-dom";

import { homeRoutes } from "../pages/Home/routes";
import { galleryRoutes } from "../pages/Gallery/routes";

const routes = createBrowserRouter([
    ...homeRoutes,
    ...galleryRoutes,
    {
        path: '*',
        element: '404 Page Not Found'
    }
  // Add your routes here
]);

export default routes;
