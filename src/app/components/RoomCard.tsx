import React from 'react';

type Room = {
  room_title: string;
  room_image: string;
  bedroom_count: number;
};

type RoomCardProps = {
  room: Room;
};

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  return (
    <div className="border p-4 rounded-lg">
      <h3 className="font-semibold">{room.room_title}</h3>
      <img
        src={`http://localhost:8080${room.room_image}`}
        alt={room.room_title}
        className="w-full h-32 object-cover mt-2 rounded-lg"
      />
      <p>Bedrooms: {room.bedroom_count}</p>
    </div>
  );
};

export default RoomCard;
