
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
        <div className="h-[300px] relative rounded-lg overflow-hidden bg-gray-100">
          <div className="absolute inset-0">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e0!3m2!1sen!2sus!4v1599999999999!5m2!1sen!2sus`}
              className="w-full h-full"
              style={{
                border: 0,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'auto',
                zIndex: 1,
              }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-white p-4 z-10">
            <div className="font-medium">Juneau, Alaska</div>
            <a href="#" className="text-blue-600 text-sm hover:underline">
              View in a map
            </a>
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