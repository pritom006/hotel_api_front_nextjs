// src/app/components/AmenitiesList.tsx
// import React from 'react';

// interface AmenitiesListProps {
//   amenities: string[];
// }

// const AmenitiesList: React.FC<AmenitiesListProps> = ({ amenities }) => {
//   return (
//     <div className="mt-6">
//       <h2 className="text-lg font-semibold mb-2">Popular Amenities</h2>
//       <div className="flex flex-wrap gap-2">
//         {amenities.map((amenity, index) => (
//           <span key={index} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
//             {amenity}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AmenitiesList;


import React from 'react';

interface AmenitiesListProps {
  amenities: string[];
}

const AmenitiesList: React.FC<AmenitiesListProps> = ({ amenities }) => {
  const amenityIcons: { [key: string]: string } = {
    'Barbecue grill': '🔥',
    'Outdoor Space': '🌳',
    'Kitchen': '🍳',
    'Washer': '🧺',
    'Parking': '🚗',
    'Dryer': '👕'
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Popular amenities</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        {amenities.slice(0, 6).map((amenity, index) => (
          <div key={index} className="flex items-center gap-2">
            <span>{amenityIcons[amenity] || '✨'}</span>
            <span>{amenity}</span>
          </div>
        ))}
      </div>
      {amenities.length > 6 && (
        <a href="#" className="text-blue-600 hover:underline">
          See all property amenities →
        </a>
      )}
    </div>
  );
};

export default AmenitiesList;