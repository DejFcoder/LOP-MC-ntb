
import { useState, useContext, FC, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../AuthContext";
import DarkModeContext from "../DarkModeContext";
import LogoWhite from "../images/logoWhite.png";
import LogoDark from "../images/logoDark.png";
import { CopyToClipboard } from "react-copy-to-clipboard";
import LanguageSelect from "./LanguageSelect";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const { isAuthenticated, logout } = useContext(AuthContext)!;
  const darkModeContext = useContext(DarkModeContext);
  const { darkMode, toggleDarkMode } = darkModeContext;
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("EN");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage");
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage.toUpperCase());
    } else {
      setSelectedLanguage("EN");
    }
  }, []);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLanguageChange = (lang: string) => {
    setSelectedLanguage(lang);
  };
  return (
    <div className="sticky top-0 z-50 grotesk mb-16 flex items-center justify-between px-4 sm:mx-0 sm:mb-20 sm:px-0 md:px-6 border-b-2 bg-white dark:bg-gray-900 dark:border-gray-400">
      <div className="inline-flex items-center pl-8">
        <Link to="/">
          <img
            src={darkMode ? LogoDark : LogoWhite}
            alt=""
            className="max-h-24 mr-4"
          />
        </Link>
        <Link
          to="/"
          className="align-middle text-3xl font-bold text-black dark:text-white"
        >
          LofP.
        </Link>
        <div className="hidden pl-14 align-middle xl:inline-block">
          <Link
            to="/"
            className="pr-12 text-xl text-black hover:underline dark:text-white"
          >
            Domov
          </Link>
          <Link
            to="/rules"
            className="pr-12 text-xl text-black hover:underline dark:text-white"
          >
            Pravidlá
          </Link>
          <Link
            to="/recruitments"
            className="pr-12 text-xl text-black hover:underline dark:text-white"
          >
            Nábory
          </Link>
          <Link
            to="/vipshop"
            className="text-xl text-black hover:underline hover:decoration-red-600 dark:text-white"
          >
            VIP
          </Link>
        </div>
      </div>
      <div className="flex items-center">
        <div className="hidden py-1 text-right xl:inline-flex xl:items-center">
          <button onClick={toggleDarkMode}>
            {darkMode ? (
              <i className="bx bx-sun text-3xl text-slate-300 mt-2 inline-flex items-center px-12"></i>
            ) : (
              <i className="bx bx-moon text-3xl text-slate-700 mt-2 inline-flex items-center px-12"></i>
            )}
          </button>

          <LanguageSelect selectedLanguage={selectedLanguage} onLanguageChange={handleLanguageChange} />

          {isAuthenticated ? (
            <button
              className="inline-flex items-center px-12 py-3 text-lg font-semibold tracking-tighter text-black dark:text-white"
              onClick={logout}
            >
              Odhlásiť sa
            </button>
          ) : (
            <Link
              className="inline-flex items-center px-12 py-3 text-lg font-semibold tracking-tighter text-black dark:text-white"
              to={`/login?redirect=${encodeURIComponent(
                location.pathname + location.search
              )}`}
            >
              Prihlásiť sa
            </Link>
          )}
          <CopyToClipboard text="mcLofP.com" onCopy={handleCopy}>
            <button className="bg-blue-600 hover:bg-blue-700 rounded-md inline-flex h-14 items-center px-8 py-3 text-lg font-semibold tracking-tighter text-white">
              <span
                className={`${isCopied ? "hidden" : "inline-flex"}`}
                id="default-message2"
              >
                Pripojiť sa
              </span>
              <span
                className={`${
                  isCopied ? "inline-flex" : "hidden"
                } items-center`}
                id="success-message2"
              >
                <i className="bx bx-check mr-1"></i>
                Skopírované
              </span>
            </button>
          </CopyToClipboard>
        </div>
        <button className="pr-12 pl-4 xl:hidden" onClick={handleMenuToggle}>
          <i
            className={`bx ${
              menuOpen ? "bx-x" : "bx-menu"
            } text-6xl text-gray-600 dark:text-gray-400`}
          ></i>
        </button>
      </div>
      {menuOpen && (
        <div className="flex flex-col items-center w-full xl:hidden bg-white dark:bg-gray-900 absolute top-full left-0 py-4 border-t-2 border-t-gray-200 dark:border-t-gray-700 border-b-4 border-b-gray-700 dark:border-b-gray-200">
          <Link
            to="/"
            className="py-2 text-xl text-black hover:underline dark:text-white"
            onClick={handleMenuToggle}
          >
            Domov
          </Link>
          <Link
            to="/rules"
            className="py-2 text-xl text-black hover:underline dark:text-white"
            onClick={handleMenuToggle}
          >
            Pravidlá
          </Link>
          <Link
            to="/recruitments"
            className="py-2 text-xl text-black hover:underline dark:text-white"
            onClick={handleMenuToggle}
          >
            Nábory
          </Link>
          <Link
            to="/vipshop"
            className="py-2 text-xl text-black hover:underline hover:decoration-red-600 dark:text-white"
            onClick={handleMenuToggle}
          >
            VIP
          </Link>
          <button onClick={toggleDarkMode} className="py-2 mt-4">
            {darkMode ? (
              <i className="bx bx-sun text-3xl text-slate-300 inline-flex items-center"></i>
            ) : (
              <i className="bx bx-moon text-3xl text-slate-700 inline-flex items-center"></i>
            )}
          </button>

          <div className="relative inline-block text-left mt-4">
            <LanguageSelect selectedLanguage={selectedLanguage} onLanguageChange={handleLanguageChange} />
          </div>

          {isAuthenticated ? (
            <button
              className="inline-flex items-center py-3 text-lg font-semibold tracking-tighter text-black dark:text-white mt-4"
              onClick={logout}
            >
              Odhlásiť sa
            </button>
          ) : (
            <Link
              className="inline-flex items-center py-3 text-lg font-semibold tracking-tighter text-black dark:text-white mt-4"
              to={`/login?redirect=${encodeURIComponent(
                location.pathname + location.search
              )}`}
              onClick={handleMenuToggle}
            >
              Prihlásiť sa
            </Link>
          )}
          <CopyToClipboard text="mcLofP.com" onCopy={handleCopy}>
            <button className="bg-indigo-600 hover:bg-indigo-500 rounded-md inline-flex h-14 items-center px-8 py-3 text-lg font-semibold tracking-tighter text-white mt-4">
              <span
                className={`${isCopied ? "hidden" : "inline-flex"}`}
                id="default-message2"
              >
                Pripojiť sa
              </span>
              <span
                className={`${
                  isCopied ? "inline-flex" : "hidden"
                } items-center`}
                id="success-message2"
              >
                <i className="bx bx-check mr-1"></i>
                Skopírované
              </span>
            </button>
          </CopyToClipboard>
        </div>
      )}
    </div>
  );
};

export default Header;
