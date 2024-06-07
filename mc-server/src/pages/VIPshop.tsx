// pages/VIPshop.tsx
import React from "react";
import Layout from "../layouts/Layout";
import PackageCard, { Package } from "../components/PackageCard";
import { useTranslation } from "react-i18next";

const VIPshop: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="flex flex-col items-center mx-auto mb-10">
        <div className="max-w-2xl mx-5 sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            VIP Shop
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Toto VIP slouží jako obrovská podpora serveru Legends of Paragon a
            všem, kteří se na serveru podílejí. Pokud si jedno z tehto VIP
            koupíš, tak ti vřele děkujeme.
          </p>
        </div>
      </div>
      <div className="mb-24">
        <div className="pb-5 sm:pb-5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {packages.map((pkg: Package, index: number) => (
              <PackageCard
                key={index}
                title={pkg.title}
                description={pkg.description}
                features={pkg.features}
                price={pkg.price}
                pricePeriod={pkg.pricePeriod}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VIPshop;
