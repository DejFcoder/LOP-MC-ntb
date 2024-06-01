import React from 'react';

interface RecruitmentCardProps {
  title: string;
  image: string;
  onClick: () => void;
}

const RecruitmentCard: React.FC<RecruitmentCardProps> = ({ title, image, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center dark:text-white cursor-pointer transition-transform duration-200 ease-linear hover:scale-105 hover:text-blue-700 dark:hover:text-blue-700"
    >
      <h2 className="text-2xl font-semibold text-center">{title}</h2>
      <img className='w-full' src={image} alt="" />
    </div>
  );
};

export default RecruitmentCard;
