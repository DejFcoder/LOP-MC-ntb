import { FC, useState } from "react";
import EN from "../images/en.png";
import SK from "../images/sk.png";
import CZ from "../images/cz.png";

interface LanguageSelectProps {
  selectedLanguage: string;
  onLanguageChange: (lang: string) => void;
}

const LanguageSelect: FC<LanguageSelectProps> = ({ selectedLanguage, onLanguageChange }) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLanguageClick = (lang: string) => {
    onLanguageChange(lang);
    setDropdownOpen(false);
  };

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
          <img src={selectedLanguage === "EN" ? EN : selectedLanguage === "SK" ? SK : CZ} alt={selectedLanguage} className="inline-block h-5 w-8 mr-2" />
          {selectedLanguage}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 011.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
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
            <button
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-400 hover:dark:bg-gray-800 hover:bg-gray-100 w-full text-left"
              onClick={() => handleLanguageClick("EN")}
            >
              <img src={EN} alt="EN" className="inline-block h-5 w-8 mr-2" />
              EN
            </button>
            <button
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-400 hover:dark:bg-gray-800 hover:bg-gray-100 w-full text-left"
              onClick={() => handleLanguageClick("SK")}
            >
              <img src={SK} alt="SK" className="inline-block h-5 w-8 mr-2" />
              SK
            </button>
            <button
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-400 hover:dark:bg-gray-800 hover:bg-gray-100 w-full text-left"
              onClick={() => handleLanguageClick("CZ")}
            >
              <img src={CZ} alt="CZ" className="inline-block h-5 w-8 mr-2" />
              CZ
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelect;
