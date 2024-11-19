
"use client";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type Room = {
  room_title: string;
  room_image: string;
  bedroom_count: number | string;
  hotel_slug: string;
  room_slug: string;
};

type Hotel = {
  hotel_id: string;
  slug: string;
  images: string[];
  title: string;
  description: string;
  guest_count: number;
  bedroom_count: number | null;
  bathroom_count: number;
  amenities: string[];
  host_information: {
    name: string;
    contact: string;
  };
  address: string;
  latitude: number;
  longitude: number;
  rooms: Room[];
};

const HotelListingPage: React.FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const router = useRouter();

  useEffect(() => {
    axios.get<Hotel[]>('http://localhost:8080/hotel')
      .then(response => {
        setHotels(response.data);
      })
      .catch(error => console.error('Error fetching hotels:', error));
  }, []);

  const navigateToHotelDetails = (hotel: Hotel) => {
    router.push(`/hotel-details/${hotel.slug}/${hotel.hotel_id}`);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Available Hotels</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <div 
            key={hotel.hotel_id} 
            className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            onClick={() => navigateToHotelDetails(hotel)}
          >
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{hotel.title}</h2>
              <p className="text-gray-600 mb-2 line-clamp-2">{hotel.description}</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>{hotel.guest_count} guests</span>
                <span className="mx-2">•</span>
                <span>{hotel.bedroom_count || 'N/A'} bedrooms</span>
                <span className="mx-2">•</span>
                <span>{hotel.bathroom_count} bathrooms</span>
              </div>
              <div className="mt-2 text-sm text-gray-500">
                <span>{hotel.address}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelListingPage;