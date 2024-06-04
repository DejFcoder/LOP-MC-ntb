import { useState } from "react";
import LobbyHeroImg from "../images/lobyHeroImg.png";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useLanguage } from "../LanguageContext";

type SupportedLanguages = 'EN' | 'SK' | 'CZ';

function HeroSection() {
  const { selectedLanguage } = useLanguage();
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const content: Record<SupportedLanguages, { title: string; desc: string; button: string; copied: string }> = {
    EN: {
      title: "Legends of Paragon",
      desc: "Looking for a Minecraft server with a friendly and helpful community? We've got you covered!",
      button: "Join Now",
      copied: "Copied",
    },
    SK: {
      title: "Legends of Paragon",
      desc: "Hľadáte Minecraft server s priateľskou a užitočnou komunitou? Zabezpečili sme vás!",
      button: "Pripojiť sa",
      copied: "Skopírované",
    },
    CZ: {
      title: "Legends of Paragon",
      desc: "Hledáte Minecraft server s přátelskou a užitečnou komunitou? Máme vás na dosah!",
      button: "Připojit se",
      copied: "Zkopírováno",
    },
  };

  const { title, desc, button, copied } = content[selectedLanguage as SupportedLanguages];

  return (
    <div>
      <div className="max-w-8xl mx-auto inline-block items-center p-3 pt-0 lg:flex lg:flex-wrap lg:pt-4">
        <div className="lg:w-3/6">
          <h2 className="text-black max-w-xl lg:text-[4.2em] text-3xl font-bold leading-none inline-block dark:text-white">
            {title}
          </h2>

          <p className="mt-6 pr-5 max-w-2xl text-xl font-semibold text-[#404040] dark:text-gray-400">{desc}</p>
          <CopyToClipboard text="mcLofP.com" onCopy={handleCopy}>
            <button className="mt-3 inline-flex items-center px-8 py-3 text-lg font-semibold tracking-tighter text-white mx-auto bg-blue-600 hover:bg-blue-700 rounded-md">
              <span
                className={`${isCopied ? "hidden" : "inline-flex"}`}
                id="default-message2"
              >
                {button}
              </span>
              <span
                className={`${
                  isCopied ? "inline-flex" : "hidden"
                } items-center`}
                id="success-message2"
              >
                <i className="bx bx-check mr-1"></i>
                {copied}
              </span>
            </button>
          </CopyToClipboard>
        </div>
        <div className="mb-20 mt-44 hidden w-full flex-col lg:mt-12 lg:inline-block lg:w-3/6">
          <img src={LobbyHeroImg} alt="Hero" />
        </div>
        <div className="my-20 inline-block w-full flex-col lg:mt-0 lg:hidden lg:w-2/5">
          <img src={LobbyHeroImg} alt="image" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
