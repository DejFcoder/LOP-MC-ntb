import React from 'react';

interface RecruitmentListProps {
  title: string;
  items: string[];
}

const RecruitmentList: React.FC<RecruitmentListProps> = ({ title, items }) => {
  return (
    <div className="max-w-3xl mx-5 mt-40">
      <h2 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white text-center">
        {title}
      </h2>
      <ul className="text-gray-900 list-disc list-inside dark:text-gray-400">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecruitmentList;
