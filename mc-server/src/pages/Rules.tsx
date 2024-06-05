import Layout from "../layouts/Layout";
import RuleBox from "../components/RuleBox";
import { useTranslation } from "react-i18next";

function Rules() {
  const { t } = useTranslation("rules");

  return (
    <Layout>
      <div className="w-full flex flex-col items-center min-h-screen">
        <div className="max-w-4xl mx-5">
          <h2 className="text-4xl mb-2 font-extrabold dark:text-white">
            {t("heading")}
          </h2>
          <p className="mb-10 text-gray-500 dark:text-gray-400">
            {t("description")}
          </p>

          <RuleBox
            title={t("basicRulesTitles")}
            rules={t("basicRules", { returnObjects: true })}
          />
          <RuleBox
            title={t("accountRulesTitles")}
            rules={t("accountRules", { returnObjects: true })}
          />
          <RuleBox
            title={t("chatRulesTitles")}
            rules={t("chatRules", { returnObjects: true })}
          />
          <RuleBox
            title={t("breakRulesTitles")}
            rules={t("breakRules", { returnObjects: true })}
          />
        </div>
      </div>
    </Layout>
  );
}

export default Rules;
