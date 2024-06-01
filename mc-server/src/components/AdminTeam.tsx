import React from 'react';
import RolesGrid from './RolesGrid';

const MainComponent: React.FC = () => {
  return (
      <div className="w-full min-h-96 flex flex-col items-center mb-16 relative">
        <h1 className="text-center text-4xl font-bold dark:text-white mb-10">
          Admin Team
        </h1>
        <RolesGrid />
      </div>
  );
};

export default MainComponent;
