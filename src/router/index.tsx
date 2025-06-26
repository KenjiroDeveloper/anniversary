import { createBrowserRouter } from "react-router-dom";

/* ** Que es createBrowserRouter?
  -- createBrowserRouter es una función de React Router (v6.4+ en adelante) que te 
  permite definir tus rutas usando objetos JavaScript en vez de JSX. 
  Este método forma parte del nuevo sistema llamado Data Router, 
  que reemplaza el enfoque antiguo basado en 
  <BrowserRouter> + <Routes> + <Route>.
*/

/* **Que hace createBrowserRouter? 
  -- Crea un router que usa el History API del navegador (window.history.pushState) 
  para manejar la navegación.

  -- Define rutas con:

    # path

    # element

    # children

    # loader, action, errorElement y más.

  -- Se usa junto con <RouterProvider /> para activar el router en tu app.
*/

/* **Por que es util?

  -- Permite una configuración centralizada y poderosa del routing, 
  especialmente si quieres usar cosas como:

  # Layouts anidados

  # Carga de datos (loader)

  # Manejo de formularios (action)
  
  # Manejadores de errores (errorElement)
  
  # Rutas protegidas
*/

import { MainLayout } from "@/layouts";
import { homeRoutes } from "@/modules/Home/routes";
import { galleryRoutes } from "@/modules/Gallery/routes";

/* ** 
  -- Se importan las rutas asignadas en cada uno de los modulos, 
  por ejemplo Home y Gallery 
*/



const routes = createBrowserRouter([
  {
    /* Declaramoos la ruta principal de la aplicación*/
    path: "/",

    /* Declaramos el layout principal de la aplicación*/
    element: <MainLayout />,

    /* Declaramos las rutas hijas de la ruta principal*/
    children: [...homeRoutes, ...galleryRoutes],
  },
]);

/* Exportamos la variable que contiene todas las rutas de la app */
export default routes;
