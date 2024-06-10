import React from "react";
import Layout from "../layouts/Layout";
import HeroSection from "../components/HeroSection";
import AdminTeam from "../components/AdminTeam";
import AboutSection from "../components/AboutSection";

const Home: React.FC = () => {
  return (
    <>
      <Layout>
        <div className="dark:bg-gray-900 mx-5">
          <HeroSection />
          <AdminTeam />
          <AboutSection />
        </div>
      </Layout>
    </>
  );
};

export default Home;
