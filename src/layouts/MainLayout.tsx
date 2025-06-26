import { Outlet } from "react-router-dom";

/* ** Que es Outlet?

  -- Es un componente especial que provee React Router para ayudarte
   a navegar entre las diferentes páginas de tu aplicación.

  --  Actúa como un placeholder (espacio reservado) donde se 
  renderizan las rutas hijas de la ruta actual
*/

/* ** Para que sirve? 

    -- Sirve para definir layouts anidados: tú pones <Outlet /> dentro de
     un layout general, y en ese espacio se mostrará el 
     contenido específico de la ruta hija según la URL.
*/

/* ** 
    -- Se declara una interfaz MainLayoutProps que define un prop llamado
    children, que es un componente React que puede ser cualquier cosa.
    Si no se proporciona un valor para children, se renderiza el componente Outlet.
*/
interface MainLayoutProps {
  children?: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-svh flex flex-col bg-base-300">
      {children || <Outlet />}
    </div>
  );
};
