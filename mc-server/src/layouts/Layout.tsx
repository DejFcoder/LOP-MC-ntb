import React, { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="dark:bg-gray-900">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
