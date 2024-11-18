import React, { useState } from 'react';
import { Minus, Plus, Calendar } from 'lucide-react';

const SidebarCard: React.FC = () => {
  const [isSelectingTravelers, setIsSelectingTravelers] = useState(false);
  const [travelers, setTravelers] = useState({
    adults: 2,
    children: 0
  });

  const handleIncrement = (type: 'adults' | 'children') => {
    setTravelers(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }));
  };

  const handleDecrement = (type: 'adults' | 'children') => {
    if (type === 'adults' && travelers.adults <= 1) return;
    if (travelers[type] <= 0) return;
    
    setTravelers(prev => ({
      ...prev,
      [type]: prev[type] - 1
    }));
  };

  const totalTravelers = travelers.adults + travelers.children;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto">
      {/* Membership Banner */}
      <div className="bg-slate-700 text-white p-4 rounded-lg flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-yellow-400 text-lg font-semibold">⭐</span>
          <span>Members get our best prices when signed in!</span>
        </div>
        <button className="bg-white text-blue-600 text-sm font-semibold py-1 px-3 rounded-md">
          Sign in
        </button>
      </div>

      {/* Price Section */}
      <div className="mb-6">
        <div className="flex items-baseline">
          <span className="text-2xl font-bold">$134</span>
          <span className="text-gray-500 text-sm ml-1">per night</span>
        </div>
        <span className="text-gray-500 text-sm">Non-refundable</span>
      </div>

      {/* Availability Status */}
      <div className="mb-6 flex items-center space-x-2 text-green-600">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span>Your dates are available</span>
      </div>

      {/* Date Picker */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="border rounded-lg p-3 flex items-center space-x-2 cursor-pointer hover:border-gray-400">
          <Calendar className="w-5 h-5 text-gray-500" />
          <div>
            <div className="text-xs text-gray-400">Start date</div>
            <div className="text-sm font-medium">Nov 18</div>
          </div>
        </div>
        <div className="border rounded-lg p-3 flex items-center space-x-2 cursor-pointer hover:border-gray-400">
          <Calendar className="w-5 h-5 text-gray-500" />
          <div>
            <div className="text-xs text-gray-400">End date</div>
            <div className="text-sm font-medium">Nov 20</div>
          </div>
        </div>
      </div>

      {/* Travelers Section */}
      <div className="relative mb-6">
        <div 
          className="border rounded-lg p-3 cursor-pointer hover:border-gray-400"
          onClick={() => setIsSelectingTravelers(!isSelectingTravelers)}
        >
          <div className="text-xs text-gray-400">Travelers</div>
          <div className="text-sm font-medium">
            {totalTravelers} traveler{totalTravelers !== 1 ? 's' : ''}
          </div>
        </div>

        {/* Travelers Dropdown */}
        {isSelectingTravelers && (
          <div className="absolute z-10 w-full bg-white border rounded-lg p-4 shadow-lg mt-2">
            {/* Adults Counter */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="font-medium">Adults</div>
                <div className="text-sm text-gray-500">Ages 13 or above</div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleDecrement('adults')}
                  className={`p-1 rounded-full border ${
                    travelers.adults <= 1 
                      ? 'border-gray-200 text-gray-300 cursor-not-allowed' 
                      : 'border-gray-400 text-gray-600 hover:bg-gray-100'
                  }`}
                  disabled={travelers.adults <= 1}
                >
                  <Minus size={16} />
                </button>
                <span className="w-6 text-center">{travelers.adults}</span>
                <button
                  onClick={() => handleIncrement('adults')}
                  className="p-1 rounded-full border border-gray-400 text-gray-600 hover:bg-gray-100"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Children Counter */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="font-medium">Children</div>
                <div className="text-sm text-gray-500">Ages 0 to 17</div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleDecrement('children')}
                  className={`p-1 rounded-full border ${
                    travelers.children <= 0 
                      ? 'border-gray-200 text-gray-300 cursor-not-allowed' 
                      : 'border-gray-400 text-gray-600 hover:bg-gray-100'
                  }`}
                  disabled={travelers.children <= 0}
                >
                  <Minus size={16} />
                </button>
                <span className="w-6 text-center">{travelers.children}</span>
                <button
                  onClick={() => handleIncrement('children')}
                  className="p-1 rounded-full border border-gray-400 text-gray-600 hover:bg-gray-100"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Done Button */}
            <button 
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              onClick={() => setIsSelectingTravelers(false)}
            >
              Done
            </button>
          </div>
        )}
      </div>

      {/* Total Section */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <div className="text-gray-500 text-sm">Total</div>
          <div className="text-xl font-bold">$543</div>
          <div className="text-xs text-gray-500">Total includes fees, not tax</div>
        </div>
        <button className="text-blue-600 text-sm underline">
          Price details
        </button>
      </div>

      {/* Book Now Button */}
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium mb-4 transition-colors">
        Book Now
      </button>

      {/* Footer Information */}
      <div className="text-center text-gray-500 text-sm mb-4">
        You will not be charged yet
      </div>

      <button className="w-full text-blue-600 text-sm underline mb-4">
        Contact Host
      </button>

      <div className="text-center text-gray-500 text-sm">
        Property # 9838104ha
      </div>
    </div>
  );
};

export default SidebarCard;