

import { Outlet } from "react-router-dom";


import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

interface MainLayoutProps {
    children?: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
      <div className="min-h-svh flex flex-col">
        <Header />
        {children || <Outlet />}
        <Footer />
      </div>
    );
};