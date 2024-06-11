import { useContext, FC, useState } from "react";
import LogoWhite from "../images/logoWhite.png";
import LogoDark from "../images/logoDark.png";
import DarkModeContext from "../DarkModeContext";
import { useTranslation } from "react-i18next";
import CopyToClipboard from "react-copy-to-clipboard";
import { Link } from "react-router-dom";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  const { t } = useTranslation("footer");
  const currentYear = new Date().getFullYear();
  const { darkMode } = useContext(DarkModeContext);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <footer className="bg-zinc-50 dark:bg-gray-900 border-t-2 dark:border-gray-500">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="lg:flex lg:justify-between">
          <div className="mb-6 md:flex md:justify-center">
            <a href="https://flowbite.com/" className="flex items-center">
              <img
                src={darkMode ? LogoDark : LogoWhite}
                className="h-20 me-3"
                alt="Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Legends of Paragon
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Server
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <CopyToClipboard text="mcLofP.com" onCopy={handleCopy}>
                    <span className="cursor-pointer hover:underline">
                      <span
                        className={`${
                          isCopied ? "hidden" : "inline-flex"
                        } cursor-pointer hover:underline`}
                        id="default-message2"
                      >
                        {t("option1")}
                      </span>
                      <span
                        className={`${
                          isCopied ? "inline-flex" : "hidden"
                        } items-center`}
                        id="success-message2"
                      >
                        <i className="bx bx-check mr-1"></i>
                        {t("copied")}
                      </span>
                    </span>
                  </CopyToClipboard>
                </li>
                <li>
                  <Link to="/vipshop" className="hover:underline">
                    {t("option2")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {t("secondCol")}
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.instagram.com/"
                    className="hover:underline "
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://discord.com/" className="hover:underline">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {t("thirdCol")}
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    {t("option5")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    {t("option6")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {currentYear} LofP. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              target="_blank"
              href="https://www.facebook.com/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <i className="bx bxl-facebook text-slate-400 hover:text-slate-500 dark:text-slate-600 text-2xl dark:hover:text-slate-500"></i>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ml-2"
            >
              <i className="bx bxl-instagram text-slate-400 hover:text-slate-500 dark:text-slate-600 text-2xl dark:hover:text-slate-500"></i>
              <span className="sr-only">Instagram page</span>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ml-2"
            >
              <i className="bx bxl-linkedin text-slate-400 hover:text-slate-500 dark:text-slate-600 text-2xl dark:hover:text-slate-500"></i>
              <span className="sr-only">Linkedin page</span>
            </a>
            <a
              target="_blank"
              href="https://discord.com/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ml-2"
            >
              <i className="bx bxl-discord-alt text-slate-400 hover:text-slate-500 dark:text-slate-600 text-2xl dark:hover:text-slate-500"></i>
              <span className="sr-only">Discord page</span>
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ml-2"
            >
              <i className="bx bxl-youtube text-slate-400 hover:text-slate-500 dark:text-slate-600 text-2xl dark:hover:text-slate-500"></i>
              <span className="sr-only">Youtube page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
