import React from 'react';

type HotelDetailsProps = {
  title: string;
  description: string;
  guestCount: number;
  bedroomCount: number;
  bathroomCount: number;
  address: string;
};

const HotelDetails: React.FC<HotelDetailsProps> = ({
  title,
  description,
  guestCount,
  bedroomCount,
  bathroomCount,
  address
}) => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-2 text-gray-700">{description}</p>

      <h2 className="text-2xl mt-4">Details</h2>
      <ul>
        <li><strong>Guest Capacity:</strong> {guestCount}</li>
        <li><strong>Bedrooms:</strong> {bedroomCount}</li>
        <li><strong>Bathrooms:</strong> {bathroomCount}</li>
        <li><strong>Address:</strong> {address}</li>
      </ul>
    </div>
  );
};

export default HotelDetails;
