// pages/VIPshop.tsx
import React from "react";
import Layout from "../layouts/Layout";
import PackageCard from "../components/PackageCard";
import { useTranslation } from "react-i18next";

const VIPshop: React.FC = () => {
  const { t } = useTranslation("VIPshop");

  return (
    <Layout>
      <div className="flex flex-col items-center mx-auto mb-10">
        <div className="max-w-2xl mx-5 sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            {t("heading")}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            {t("description")}
          </p>
        </div>
      </div>
      <div className="mb-24">
        <div className="pb-5 sm:pb-5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <PackageCard
                title={t("titlePrime")}
                description={t("descriptionPrime")}
                features={t("featuresPrime", {returnObjects: true})}
                price={t("pricePrime")}
                pricePeriod={t("pricePeriodPrime")}
              />

              <PackageCard
                title={t("titlePlus")}
                description={t("descriptionPlus")}
                features={t("featuresPlus", {returnObjects: true})}
                price={t("pricePlus")}
                pricePeriod={t("pricePeriodPlus")}
              />

              <PackageCard
                title={t("titlePro")}
                description={t("descriptionPro")}
                features={t("featuresPro", {returnObjects: true})}
                price={t("pricePro")}
                pricePeriod={t("pricePeriodPro")}
              />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VIPshop;
