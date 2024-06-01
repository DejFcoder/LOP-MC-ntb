import React, { useState } from "react";

interface RuleBoxProps {
  title: string;
  rules: string[];
}

const RuleBox: React.FC<RuleBoxProps> = ({ title, rules }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleRules = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      onClick={toggleRules}
      className={`border-2 ${
        isOpen
          ? "border-blue-600 dark:border-white"
          : "dark:border-gray-500 border-gray-600"
      } py-4 mb-6 rounded-xl cursor-pointer`}
    >
      <div className="flex items-center justify-between relative">
        <div className="flex-grow text-center">
          <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h2>
        </div>
        <i
          className={`bx bx-chevron-${
            isOpen ? "down" : "right"
          } text-5xl absolute right-3 dark:text-gray-400 cursor-pointer`}
        ></i>
      </div>

      <ol
        className={`${
          !isOpen && "hidden"
        } space-y-1 text-gray-900 list-decimal list-inside dark:text-gray-400 px-5 mt-4 leading-relaxed`}
      >
        {rules.map((rule, index) => (
          <li key={index}>{rule}</li>
        ))}
      </ol>
    </div>
  );
};

export default RuleBox;
