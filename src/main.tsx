import { StrictMode } from "react";
/* ** Que es strictMode?

  -- Es un componente especial que provee React para ayudarte a detectar posibles problemas
  en tu aplicación durante el desarrollo. No afecta el comportamiento en producción,
  solo funciona en desarrollo y no renderiza nada visible en el DOM
 */

import { createRoot } from "react-dom/client";
/* ** Que es createRoot?

  createRoot es una función introducida en React 18 como parte del nuevo sistema de renderizado concurrente. Reemplaza al antiguo ReactDOM.render que se usaba en versiones anteriores de React.
*/

/* ** Que hace createRoot?

  -- CreateRoot inicializa la aplicación de React y la conecta con un nodo del DOM (generalmente un <div id="root">) para empezar a renderizar tus componentes.
*/

import { RouterProvider } from "react-router-dom";
/* ** Que es RouterProvider?

  -- RouterProvider es un componente que proporciona a React un enlace a un enrutador. Este enlace se usa para navegar entre las diferentes páginas de tu aplicación.

  -- En React Router v6.4 en adelante, RouterProvider es el componente que conecta tu configuración de rutas con el sistema de enrutamiento de React Router.

  -- Es decir: si createBrowserRouter define qué rutas hay y qué deben renderizar, RouterProvider es el que hace que todo eso funcione en tu app.
 */

/* ** Que hace exactamente?

<RouterProvider />:

1- Activa el router que creaste con createBrowserRouter u otros métodos.

2- Se encarga de:

Escuchar cambios en la URL.

Determinar qué componente mostrar.

Renderizar el layout o page correspondiente según la ruta actual.

Controlar navegación, errores, loaders, etc.
*/

import routes from "./router";
/* ** Importacion de archivos de routes

  -- Importa el archivo que contiene las rutas de tu aplicación. Este archivo debe estar en la carpeta src/router.

  -- Se usa para  centralizar y modularizar la definición de rutas, de modo que tu main.tsx se mantenga limpio y enfocado en solo montar la app, mientras que la lógica de rutas vive en un archivo aparte
*/

import "./index.css";
/* ** Importacion de hoja de estilos*/

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
