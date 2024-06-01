import React from 'react';
import RoleCard from './RoleCard';
import AdminImg from '../images/adminRole.png';
import HelperImg from '../images/helperRole.png';
import DeveloperImg from '../images/developerRole.png';
import FrajerImg from '../images/frajerRole.png';
import NpcImg from '../images/npcRole.png';
import BuilderImg from '../images/builderRole.png';

interface Role {
  image: string;
  alt: string;
  role: string;
}

const RolesGrid: React.FC = () => {
  const roles: Role[] = [
    { image: AdminImg, alt: 'Admin', role: 'Admin' },
    { image: HelperImg, alt: 'Helper', role: 'Helper' },
    { image: DeveloperImg, alt: 'Developer', role: 'Developer' },
    { image: FrajerImg, alt: 'Frajer', role: 'Frajer' },
    { image: NpcImg, alt: 'NPC', role: 'NPC' },
    { image: BuilderImg, alt: 'Builder', role: 'Builder' },
  ];

  return (
    <div className="grid grid-cols-3 gap-16 text-center lg:grid-cols-6">
      {roles.map(({ image, alt, role }) => (
        <RoleCard key={role} image={image} alt={alt} role={role} />
      ))}
    </div>
  );
};

export default RolesGrid;
