// pages/VIPshop.tsx
import React from "react";
import Layout from "../layouts/Layout";
import PackageCard, { Package } from "../components/PackageCard"; // Correctly importing Package

const VIPshop: React.FC = () => {
  const packages: Package[] = [
    {
      title: "Prime Package",
      description:
        "Získáš Prime účet na 30 dní na našem Minecraft serveru a Discordu. Při zakoupení stejného ranku se ti automaticky prodlouží!",
      features: [
        "Prefix PRIME",
        "30 000 Coins",
        "30% coins booster",
        "30% sleva na všechny cosmetics",
      ],
      price: "€3.50",
      pricePeriod: "Kúp raz, 30 dní využívej",
    },
    {
      title: "Prime+ Package",
      description:
        "Získáš Prime+ účet na 30 dní na našem Minecraft serveru a Discordu. Při zakoupení stejného ranku se ti automaticky prodlouží!",
      features: [
        "Prefix PRIME+",
        "50 000 Coins",
        "50% coins booster",
        "50% sleva na všechny cosmetics",
      ],
      price: "€5.00",
      pricePeriod: "Kúp raz, 30 dní využívej",
    },
    {
      title: "PrimePro Package",
      description:
        "Získáš PrimePro účet na 30 dní na našem Minecraft serveru a Discordu. Při zakoupení stejného ranku se ti automaticky prodlouží!",
      features: [
        "Prefix PRIME PRO",
        "75 000 Coins",
        "75% coins booster",
        "75% sleva na všechny cosmetics",
      ],
      price: "€7.50",
      pricePeriod: "Kúp raz, 30 dní využívej",
    },
  ];

  return (
    <Layout>
      <div className="flex flex-col items-center mx-auto mb-10">
        <div className="max-w-2xl mx-5 sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Náš shop s výhodnými ponukami
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
