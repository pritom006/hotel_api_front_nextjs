// src/app/components/AmenitiesList.tsx
import React from 'react';

interface AmenitiesListProps {
  amenities: string[];
}

const AmenitiesList: React.FC<AmenitiesListProps> = ({ amenities }) => {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2">Popular Amenities</h2>
      <div className="flex flex-wrap gap-2">
        {amenities.map((amenity, index) => (
          <span key={index} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
            {amenity}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AmenitiesList;
