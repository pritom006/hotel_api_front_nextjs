
import React from 'react';

const SidebarCard: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Member since 2021</h2>
        <p className="text-gray-600">Trusted host with excellent reviews</p>
      </div>
      <div className="mb-4">
        <h3 className="text-md font-semibold">Free Cancellation</h3>
        <p className="text-gray-600">Cancel anytime before 24 hours of check-in</p>
      </div>
      <div className="mb-4">
        <h3 className="text-md font-semibold">Travelers</h3>
        <p className="text-gray-600">2 guests · 1 room</p>
      </div>
      <div className="mb-4">
        <h3 className="text-md font-semibold">Price</h3>
        <p className="text-gray-800 font-bold">$200 per night</p>
      </div>
      <button className="bg-blue-500 text-white rounded px-4 py-2 w-full mt-4">Book Now</button>
      <button className="bg-gray-200 text-gray-800 rounded px-4 py-2 w-full mt-2">Contact Host</button>
    </div>
  );
};

export default SidebarCard;
