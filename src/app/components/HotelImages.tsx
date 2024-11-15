// src/app/components/HotelImages.tsx
import React from 'react';

interface HotelImagesProps {
  images: string[];
}

const HotelImages: React.FC<HotelImagesProps> = ({ images }) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Hotel Image ${index + 1}`}
            className="w-full h-48 object-cover rounded-lg shadow"
          />
        ))}
      </div>
      <div className="flex justify-around mt-4 border-t pt-2">
        <button className="text-sm text-gray-600">Overview</button>
        <button className="text-sm text-gray-600">Amenities</button>
        <button className="text-sm text-gray-600">Policies</button>
      </div>
    </div>
  );
};

export default HotelImages;
