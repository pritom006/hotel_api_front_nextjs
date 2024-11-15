// src/app/components/MapSection.tsx
import React from 'react';

interface MapSectionProps {
  latitude: number;
  longitude: number;
}

const MapSection: React.FC<MapSectionProps> = ({ latitude, longitude }) => {
  return (
    <div className="mt-6 p-4 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">Explore the Area</h2>
      <p className="text-sm text-gray-600">{`Latitude: ${latitude}, Longitude: ${longitude}`}</p>
      {/* Placeholder for map */}
      <div className="w-full h-48 bg-gray-200 rounded mt-4 flex items-center justify-center text-gray-500">
        Map goes here
      </div>
    </div>
  );
};

export default MapSection;
