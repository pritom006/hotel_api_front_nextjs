


"use client";

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HotelDetails from './components/HotelDetails';
import HotelImages from './components/HotelImages';
import RoomCard from './components/RoomCard';
import HostInfo from './components/HostInfo';
import AmenitiesList from './components/AmenitiesList';
import HeaderSection from './components/HeaderSection';
import MapSection from './components/MapSection';
import SidebarCard from './components/SidebarCard';
import Navbar from './components/Navbar';
import PropertyListing from './components/PropertyListing';
import VacationRentalListing from './components/VacationRentalListing';

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
  host_information: { name: string; contact: string };
  address: string;
  latitude: number;
  longitude: number;
  images: string[];
  rooms: Room[];
};

const MyComponent: React.FC = () => {
  const [hotel, setHotel] = useState<Hotel | null>(null);

  useEffect(() => {
    axios.get<Hotel>('http://localhost:8080/hotel/h0f7')
    
      .then(response => setHotel(response.data))
      .catch(error => console.error('Error fetching hotel:', error));
  }, []);

  if (!hotel) return <p>Loading...</p>;
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
    <div className='bg-gray-100 min-h-screen p-6'>
      <Navbar />
      <HeaderSection />
      <div className='flex flex-wrap'>
      <div className='w-full lg:w-2/3 pr-4'>
      <HotelImages images={hotel.images} />
      <HotelDetails
        title={hotel.title}
        description={hotel.description}
        guestCount={hotel.guest_count}
        bedroomCount={hotel.bedroom_count}
        bathroomCount={hotel.bathroom_count}
        address={hotel.address}
      />

      <AmenitiesList amenities={hotel.amenities} />

      {/* <h2 className="text-2xl mt-4">Rooms</h2>
      <div className="grid grid-cols-2 gap-4">
        {hotel.rooms.map((room, index) => (
          <RoomCard key={index} room={room} />
        ))}
      </div>

      <HostInfo
        name={hotel.host_information.name}
        contact={hotel.host_information.contact}
      /> */}

      
      <MapSection latitude={hotel.latitude} longitude={hotel.longitude} />
      </div>
      <div className='w-full lg:w-1/3 pl-4 my-40'>
        <SidebarCard />
      </div>
      <PropertyListing />
      <VacationRentalListing />
      <HostInfo hostInfo={hostInformation}/> 
    </div>
    </div>
  );
};

export default MyComponent;

// "use client";

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'next/navigation';
// import HotelDetails from './components/HotelDetails';
// import HotelImages from './components/HotelImages';
// import RoomCard from './components/RoomCard';
// import HostInfo from './components/HostInfo';
// import AmenitiesList from './components/AmenitiesList';
// import HeaderSection from './components/HeaderSection';
// import MapSection from './components/MapSection';
// import SidebarCard from './components/SidebarCard';
// import Navbar from './components/Navbar';

// type Room = {
//   room_title: string;
//   room_image: string;
//   bedroom_count: number;
//   hotel_slug: string;
//   room_slug: string;
// };

// type Hotel = {
//   hotel_id: string;
//   title: string;
//   description: string;
//   guest_count: number;
//   bedroom_count: number;
//   bathroom_count: number;
//   amenities: string[];
//   host_information: { name: string; contact: string };
//   address: string;
//   latitude: number;
//   longitude: number;
//   images: string[];
//   rooms: Room[];
// };

// const BACKEND_URL = 'http://localhost:8080';

// const HotelPage: React.FC = () => {
//   const [hotel, setHotel] = useState<Hotel | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const params = useParams();
//   const hotelId = params?.slug;

//   useEffect(() => {
//     const fetchHotel = async () => {
//       if (!hotelId) return;
      
//       setIsLoading(true);
//       try {
//         const response = await axios.get<Hotel>(`${BACKEND_URL}/hotel/${hotelId}`);
        
//         // Transform image URLs
//         const transformedData = {
//           ...response.data,
//           images: response.data.images.map(img => 
//             `${BACKEND_URL}${img}`
//           ),
//           rooms: response.data.rooms.map(room => ({
//             ...room,
//             room_image: `${BACKEND_URL}${room.room_image}`
//           }))
//         };
        
//         setHotel(transformedData);
//         setError(null);
//       } catch (err) {
//         console.error('Error fetching hotel:', err);
//         setError('Failed to load hotel data');
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchHotel();
//   }, [hotelId]);

//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center min-h-screen text-red-500">
//         {error}
//       </div>
//     );
//   }

//   if (!hotel) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         Hotel not found
//       </div>
//     );
//   }

//   return (
//     <div className='bg-gray-100 min-h-screen p-6'>
//       <Navbar />
//       <HeaderSection />
//       <div className='flex flex-wrap'>
//         <div className='w-full lg:w-2/3 pr-4'>
//           <HotelImages images={hotel.images} />
//           <HotelDetails
//             title={hotel.title}
//             description={hotel.description}
//             guestCount={hotel.guest_count}
//             bedroomCount={hotel.bedroom_count}
//             bathroomCount={hotel.bathroom_count}
//             address={hotel.address}
//           />

//           <AmenitiesList amenities={hotel.amenities} />

//           <h2 className="text-2xl mt-4">Rooms</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {hotel.rooms.map((room, index) => (
//               <RoomCard key={index} room={room} />
//             ))}
//           </div>

//           <HostInfo
//             name={hotel.host_information.name}
//             contact={hotel.host_information.contact}
//           />

//           <MapSection latitude={hotel.latitude} longitude={hotel.longitude} />
//         </div>
//         <div className='w-full lg:w-1/3 pl-4'>
//           <SidebarCard />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HotelPage;