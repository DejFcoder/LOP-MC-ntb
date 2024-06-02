import React from 'react';

interface RoleCardProps {
  image: string;
  alt: string;
  role: string;
}

const RoleCard: React.FC<RoleCardProps> = ({ image, alt, role }) => {
  return (
    <div className="items-center justify-center lg:inline-block text-black dark:text-gray-400 transition-transform duration-200 ease-linear transform hover:scale-105 hover:text-blue-600 dark:hover:text-white">
      <img src={image} alt={alt} className="block object-contain" />
      <p className="text-lg font-medium">{role}</p>
    </div>
  );

};

export default RoleCard;
