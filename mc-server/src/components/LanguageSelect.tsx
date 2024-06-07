
import { FC, useState, useEffect } from "react";
import EN from "../images/en.png";
import SK from "../images/sk.png";
import CZ from "../images/cz.png";
import { useTranslation } from "react-i18next";

interface LanguageSelectProps {
  selectedLanguage: string;
  onLanguageChange: (lang: string) => void;
}

const LanguageSelect: FC<LanguageSelectProps> = ({ selectedLanguage, onLanguageChange }) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [currentLanguage, setCurrentLanguage] = useState<string>(selectedLanguage);

  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage");
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage.toUpperCase());
      i18n.changeLanguage(savedLanguage);
    } else {
      setCurrentLanguage("EN");
      i18n.changeLanguage("en");
    }
  }, [i18n]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLanguageClick = (lang: string, lng: string) => {
    setCurrentLanguage(lang);
    onLanguageChange(lang);
    setDropdownOpen(false);
    i18n.changeLanguage(lng);
    localStorage.setItem("selectedLanguage", lng);
  };

  const languages = [
    { code: "EN", identifier: "en", imgSrc: EN },
    { code: "SK", identifier: "sk", imgSrc: SK },
    { code: "CZ", identifier: "cz", imgSrc: CZ },
  ];

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-3 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          <img src={currentLanguage === "EN" ? EN : currentLanguage === "SK" ? SK : CZ} alt={currentLanguage} className="inline-block h-5 w-8 mr-2" />
          {currentLanguage}
          <i className='bx bx-caret-down text-md ml-1'></i>
        </button>
      </div>
      {dropdownOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 dark:bg-gray-900 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            {languages.map((language) => (
              <button
                key={language.code}
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-400 hover:dark:bg-gray-800 hover:bg-gray-100 w-full text-left"
                onClick={() => handleLanguageClick(language.code, language.identifier)}
              >
                <img src={language.imgSrc} alt={language.code} className="inline-block h-5 w-8 mr-2" />
                {language.code}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelect;
