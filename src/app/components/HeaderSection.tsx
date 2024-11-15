import React from 'react';
import { FiShare2, FiHeart } from 'react-icons/fi';

const HeaderSection: React.FC = () => {
  return (
    <div className="flex justify-between items-center my-4">
      <button className="text-blue-600 text-sm underline">{'<- See all properties'}</button>
      <div className="flex space-x-4">
        <button className="flex items-center space-x-1 text-gray-600">
          <FiShare2 />
          <span>Share</span>
        </button>
        <button className="flex items-center space-x-1 text-gray-600">
          <FiHeart />
          <span>Save</span>
        </button>
      </div>
    </div>
  );
};

export default HeaderSection;
