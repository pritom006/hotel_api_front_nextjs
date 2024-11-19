"use client";


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import HotelDetails from '@/app/components/HotelDetails';
import HotelImages from '@/app/components/HotelImages';
import RoomCard from '@/app/components/RoomCard';
import MapSection from '@/app/components/MapSection';
import SidebarCard from '@/app/components/SidebarCard';
import Navbar from '@/app/components/Navbar';
import HostInfo from '@/app/components/HostInfo';
import AmenitiesList from '@/app/components/AmenitiesList';
import HeaderSection from '@/app/components/HeaderSection';
import PropertyListing from '@/app/components/PropertyListing';
import VacationRentalListing from '@/app/components/VacationRentalListing';


type Room = {
    room_title: string;
    room_image: string;
    bedroom_count: number;
    hotel_slug: string;
    room_slug: string;
  };
  
  type Hotel = {
    hotel_id: string;
    title: string;
    description: string;
    guest_count: number;
    bedroom_count: number;
    bathroom_count: number;
    amenities: string[];
    host_information: { 
      name: string; 
      contact: string 
    };
    address: string;
    latitude: number;
    longitude: number;
    images: string[];
    rooms: Room[];
  };
  
  const HotelDetailsPage: React.FC = () => {
    const params = useParams();
    const [hotel, setHotel] = useState<Hotel | null>(null);
  
    useEffect(() => {
      if (params.id) {
        axios.get<Hotel>(`http://localhost:8080/hotel/${params.id}`)
          .then(response => setHotel(response.data))
          .catch(error => console.error('Error fetching hotel:', error));
      }
    }, [params.id]);
  
    if (!hotel) return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl">Loading...</p>
      </div>
    );
  
    const languages = [
      { id: 1, name: "English" },
      { id: 2, name: "French" },
      { id: 3, name: "German" },
      { id: 4, name: "Spanish" }
    ];
  
    const hostInformation = {
      name: hotel.host_information.name,
      contact: hotel.host_information.contact,
      languages: languages
    };
  
    return (
      <div className="bg-gray-100 min-h-screen p-6">
        <Navbar />
        <HeaderSection />
        <div className="flex flex-wrap">
          <div className="w-full lg:w-2/3 pr-4">
            <HotelImages images={hotel.images} />
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <HotelDetails
                title={hotel.title}
                description={hotel.description}
                guestCount={hotel.guest_count}
                bedroomCount={hotel.bedroom_count}
                bathroomCount={hotel.bathroom_count}
                address={hotel.address}
              />
            </div>
  
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <AmenitiesList amenities={hotel.amenities} />
            </div>
  
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">Available Rooms</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hotel.rooms.map((room, index) => (
                  <RoomCard key={index} room={room} />
                ))}
              </div>
            </div>
  
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <MapSection
                latitude={hotel.latitude}
                longitude={hotel.longitude}
              />
            </div>
          </div>
  
          <div className="w-full lg:w-1/3 pl-4 mt-80">
            <div className="sticky top-6">
              <SidebarCard />
            </div>
          </div>
  
          <PropertyListing />
          <VacationRentalListing />
          <HostInfo hostInfo={hostInformation} />
        </div>
      </div>
    );
  };
  
  export default HotelDetailsPage;