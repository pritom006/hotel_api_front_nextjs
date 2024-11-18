// src/app/components/MapSection.tsx
// import React from 'react';

// interface MapSectionProps {
//   latitude: number;
//   longitude: number;
// }

// const MapSection: React.FC<MapSectionProps> = ({ latitude, longitude }) => {
//   return (
//     <div className="mt-6 p-4 bg-white rounded-lg shadow">
//       <h2 className="text-lg font-semibold mb-2">Explore the Area</h2>
//       <p className="text-sm text-gray-600">{`Latitude: ${latitude}, Longitude: ${longitude}`}</p>
//       {/* Placeholder for map */}
//       <div className="w-full h-48 bg-gray-200 rounded mt-4 flex items-center justify-center text-gray-500">
//         Map goes here
//       </div>
//     </div>
//   );
// };

// export default MapSection;


import React from 'react';
import Image from 'next/image';

interface MapSectionProps {
  latitude: number;
  longitude: number;
}

const MapSection: React.FC<MapSectionProps> = ({ latitude, longitude }) => {
  const locations = [
    { name: 'Auke Bay', time: '6 min drive', icon: '📍' },
    { name: 'University of Alaska-Southeast', time: '10 min drive', icon: '📍' },
    { name: 'Mendenhall Golf Course', time: '14 min drive', icon: '📍' },
    { name: 'Juneau, AK (JNU-Juneau Intl.)', time: '14 min drive', icon: '✈️' },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Explore the area</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-[300px] relative rounded-lg overflow-hidden">
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e0!3m2!1sen!2sus!4v1599999999999!5m2!1sen!2sus`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
            <div className="font-medium">Juneau, Alaska</div>
            <a href="#" className="text-blue-600 text-sm hover:underline">View in a map</a>
          </div>
        </div>
        
        <div className="space-y-4">
          {locations.map((location, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-xl">{location.icon}</span>
              <div>
                <div className="font-medium">{location.name}</div>
                <div className="text-sm text-gray-600">{location.time}</div>
              </div>
            </div>
          ))}
          <a href="#" className="text-blue-600 hover:underline block mt-4">
            See more about this area ›
          </a>
        </div>
      </div>
    </div>
  );
};

export default MapSection;