import React from 'react';

interface RoomCardProps {
  room: {
    room_title: string;
    room_image: string;
    bedroom_count: number | string;
    hotel_slug: string;
    room_slug: string;
  };
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* <div className="relative h-48">
        <img
          src={room.room_image}
          alt={room.room_title}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder-room.jpg'; // Add a placeholder image in your public folder
          }}
        />
      </div> */}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{room.room_title}</h3>
        <p className="text-gray-600">
          {room.bedroom_count} {Number(room.bedroom_count) === 1 ? 'Bedroom' : 'Bedrooms'}
        </p>
      </div>
    </div>
  );
};

export default RoomCard;