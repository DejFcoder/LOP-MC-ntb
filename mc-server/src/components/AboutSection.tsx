import { useState } from "react";
import ServerBg from "../images/serverbg.jpg";
import { useTranslation } from "react-i18next";

function AboutSection() {
  const { t } = useTranslation("aboutSection"); 
  const [aboutClosed, setAboutClosed] = useState<boolean>(true);

  const aboutToggle = () => {
    setAboutClosed(!aboutClosed);
  };

  return (
    <div className="text-black">
      <div className=" max-w-9xl mx-auto flex flex-col items-center justify-center px-5">
        <div className="mr-0 mb-6 w-full py-4 text-center lg:w-2/3">
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl dark:text-white">
            Server Leagends of Pragon
          </h2>
          {aboutClosed ? (
            <div>
              <p className="mb-4 text-lg leading-loose dark:text-gray-400">
                {t("aboutSecSmall")}
              </p>

              <button
                onClick={aboutToggle}
                className="underline-blue font-semibold dark:text-white"
              >
                Zisti Viac
              </button>
            </div>
          ) : (
            <div>
              <p className="mb-4 text-lg leading-loose dark:text-gray-400">
                {t("aboutSecLarge")}
              </p>

              <button
                onClick={aboutToggle}
                className="underline-blue font-semibold dark:text-white"
              >
                Menej
              </button>
            </div>
          )}
        </div>
        <img
          className=" lg:w-5/7 mb-40 hidden w-5/6 rounded object-cover object-center lg:inline-block  lg:w-4/6"
          src={ServerBg}
          alt="img"
        />

        <img
          className=" mb-24 inline-block w-5/6 rounded object-cover object-center lg:hidden lg:w-4/6"
          src={ServerBg}
          alt="img"
        />
      </div>
    </div>
  );
}

export default AboutSection;
