
import React from 'react';

interface HotelDetailsProps {
  title: string;
  description: string;
  guestCount: number;
  bedroomCount: number;
  bathroomCount: number;
  address: string;
}

const HotelDetails: React.FC<HotelDetailsProps> = ({
  title,
  description,
  guestCount,
  bedroomCount,
  bathroomCount,
  address
}) => {
  return (
    <div className="mb-8">
      <div className="text-sm text-gray-600 mb-2">Entire home</div>
      <h1 className="text-3xl font-semibold mb-4">{title}</h1>
      
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-2 bg-blue-600 text-white px-2 py-1 rounded">
          <span className="font-semibold">9.8</span>
          <span>Exceptional</span>
        </div>
        <a href="#" className="text-blue-600 hover:underline">See all 24 reviews →</a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="flex items-center gap-2">
          <span>🛏</span>
          <span>{bedroomCount} bedrooms</span>
        </div>
        <div className="flex items-center gap-2">
          <span>🚿</span>
          <span>{bathroomCount} bathroom</span>
        </div>
        <div className="flex items-center gap-2">
          <span>👥</span>
          <span>Sleeps {guestCount}</span>
        </div>
        <div className="flex items-center gap-2">
          <span>📍</span>
          <span>{address}</span>
        </div>
      </div>
      
      <p className="text-gray-700 leading-relaxed mb-6">{description}</p>
    </div>
  );
};

export default HotelDetails;