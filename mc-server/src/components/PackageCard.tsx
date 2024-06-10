import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../AuthContext";
import { useTranslation } from "react-i18next";

interface PackageCardProps {
  title: string;
  description: string;
  features: string[];
  price: string;
  pricePeriod: string;
}

const PackageCard: React.FC<PackageCardProps> = ({
  title,
  description,
  features,
  price,
  pricePeriod,
}) => {
  const authContext = useContext(AuthContext);
  const location = useLocation();
  const { t } = useTranslation("VIPshop");

  const isAuthenticated = authContext?.isAuthenticated;

  return (
    <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-none mb-20">
      <div className="p-8 sm:p-10 lg:flex-auto">
        <h3 className="text-2xl font-bold tracking-tight dark:text-white">
          {title}
        </h3>
        <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
          {description}
        </p>
        <div className="mt-10 flex items-center gap-x-4">
          <h4 className="flex-none text-sm font-semibold leading-6 text-blue-600">
            {t("featuresHeading")}
          </h4>
          <div className="h-px flex-auto bg-gray-100" />
        </div>
        <ul
          role="list"
          className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6 dark:text-white"
        >
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-x-3">
              <i className="bx bx-check"></i>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 dark:bg-gray-900">
          <div className="mx-auto max-w-xs px-8">
            <p className="text-base font-semibold text-gray-600 dark:text-white">
              {pricePeriod}
            </p>
            <p className="mt-6 flex items-baseline justify-center gap-x-2">
              <span
                className={`text-5xl font-bold tracking-tight dark:text-white`}
              >
                {price}
              </span>
              <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600 dark:text-gray-400">
                EUR
              </span>
            </p>
            {isAuthenticated ? (
              <Link
                to="/vipshop/package1"
                className="mt-10 block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                {t("buyBtn")}
              </Link>
            ) : (
              <Link
                to={`/login?redirect=${encodeURIComponent(
                  location.pathname + location.search
                )}/package1 `}
                className="mt-10 block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                {t("buyBtn")}
              </Link>
            )}
            <p className="mt-6 text-xs leading-5 text-gray-600 dark:text-gray-400">
              {t("CardDesc")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
