import React, { useRef } from "react";
import Layout from "../layouts/Layout";
import Developer from "../images/developer.png";
import Helper from "../images/helper.png";
import Builder from "../images/builder.png";
import RecruitmentList from "../components/RecruitmentList";
import RecruitmentCard from "../components/RecruitmentCard";
import { useTranslation } from "react-i18next";

const Recruitments: React.FC = () => {
  const {t} = useTranslation("recruitments");
  const builderRef = useRef<HTMLDivElement>(null);
  const helperRef = useRef<HTMLDivElement>(null);
  const developerRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Layout>
      <div className="w-full min-h-96 flex flex-col items-center mb-24 relative">
        <h1 className="text-center text-4xl font-bold dark:text-white mb-10">
          {t('heading')}
        </h1>
        <div className="max-w-7xl mx-5 grid grid-cols-3 gap-x-4 md:gap-x-8 lg:gap-x-16">
          <RecruitmentCard
            title="Builder"
            image={Builder}
            onClick={() => scrollToRef(builderRef)}
          />
          <RecruitmentCard
            title="Helper"
            image={Helper}
            onClick={() => scrollToRef(helperRef)}
          />
          <RecruitmentCard
            title="Developer"
            image={Developer}
            onClick={() => scrollToRef(developerRef)}
          />
        </div>
        <div className="w-full flex flex-col items-center leading-loose">
          <div ref={builderRef}>
            <RecruitmentList title={t("builderTitle")} items={t("builderContent", { returnObjects: true })} />
          </div>

          <div ref={helperRef}>
            <RecruitmentList title={t("helperTitle")} items={t("helperContent", { returnObjects: true })} />
          </div>

          <div ref={developerRef}>
            <RecruitmentList title={t("developerTitle")} items={t("developerContent", { returnObjects: true })} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Recruitments;
