import React from 'react';

type HostInfoProps = {
  name: string;
  contact: string;
};

const HostInfo: React.FC<HostInfoProps> = ({ name, contact }) => {
  return (
    <div>
      <h2 className="text-2xl mt-4">Host Information</h2>
      <p>{name} - {contact}</p>
    </div>
  );
};

export default HostInfo;
