import Layout from "../layouts/Layout";
import RuleBox from "../components/RuleBox";
import { useTranslation } from "react-i18next";

function Rules() {
  const { t } = useTranslation();

  const basicRulesContent: string[] = [
    "Hráč je povinen dodržovat veškerá pravidla serveru a souhlasí s ochranou osobních údajů (GDPR)",
    "Vedení projektu si nárokuje veškerá práva na jakoukoliv činnost související s projektem.",
    "Hráč má zakázáno úmyslně poškozovat jakýmkoliv způsobem server a také zjišťovat osobní informace od ostatních hráčů.",
    "Hráč odpovídá za svůj účet a nastaví si dostatečně bezpečné heslo, aby mu nemohl být ukradnut.",
    "Je přísně zakázáno nabádat ostatní hráče k porušování pravidel.",
    "Je zakázáno hledat v pravidlech nedostatky a následně je zneužívat.",
  ];

  const accountRulesContent: string[] = [
    "Je zakázáno používat veškeré klienty, které zvýhodňují daného hráče nad ostatními (cheaty).",
    "Povolený je pouze oficiální minecraft launcher a speciální povolené klienty (Lunar nebo Labymod client).",
    "Zakázané je rovněž i používání resource packu, který zvýhodňuje daného hráče nad ostatními (xray).",
    "Je zakázáno používat auto-click clienty i další speciální modifikace myši včetně macra.",
    "Svůj herní účet hráč musí dostatečně zabezpečit, aby k němu nemohl dostat přístup někdo cizí.",
    "Hráč nesmí používat 2 nebo více účtů zároveň, při porušení se jedná o tzv.: “multiacc”, který je rovněž trestaný.",
    "Je zakázáno prodávat svůj účet za reálné peníze či předměty ve hrách.",
    "Je zakázáno obcházet ban za účelem vyhnutí se trestu.",
    "Jméno hráče a skin jsou zvolené v rámci mezí tak, aby neporušovaly pravidla serveru. Nesmí v sobě mít vulgární, urážlivé, rasistické, nacistické, fašistické, xenofobní, sexistické či jinak nevhodné prvky.",
  ];

  const chatRulesContent: string[] = [
    "Je zakázáno psát jakékoliv nevhodné zprávy do chatu, cenzura těchto zpráv hráče neomlouvá.",
    "Je zakázáno nabádat či podněcovat ostatní hráče k porušení pravidel.",
    "Je zakázáno posílat osobní údaje, jako např. jména a příjmení, IP adresy, bydliště.",
    "Je zakázáno rozesílat jakékoliv webové odkazy, které nejsou spojeny se serverem.",
    "Je zakázáno propagovat či v chatu podporovat používání zakázaných klientů, resource packů a autoclickerů.",
    "Je zakázán veškerý spam i dlouhé zprávy bez výpovědní hodnoty.",
    "Je zakázána jakákoliv reklama na jiné projekty, produkty či weby. Povolené jsou pouze odkazy na streamovací platformy či platformy pro vytváření videí (Youtube, twitch, kick).",
    "Hráč vždy musí dodržovat pravidla slušného chování na serveru.",
  ];

  const breakRulesContent: string[] = [
    "Při porušení pravidel serveru jsou členové adminteamu oprávněni udělit trest. Délka a způsob trestu je udělen podle závažnosti prohřešku",
  ];

  return (
    <Layout>
      <div className="w-full flex flex-col items-center min-h-screen">
        <div className="max-w-4xl mx-5">
          <h2 className="text-4xl mb-2 font-extrabold dark:text-white">
            {t("heading")}
          </h2>
          <p className="mb-10 text-gray-500 dark:text-gray-400">{t("desc")}</p>

          <RuleBox title={"Základní Pravidla"} rules={basicRulesContent} />
          <RuleBox title={"Účet a herní klient"} rules={accountRulesContent} />
          <RuleBox title={"Základní Pravidla"} rules={chatRulesContent} />
          <RuleBox title={"Porušení pravidel"} rules={breakRulesContent} />
        </div>
      </div>
    </Layout>
  );
}

export default Rules;