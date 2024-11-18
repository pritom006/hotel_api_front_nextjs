import React from 'react';

const PropertyListing = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      {/* Rooms & Beds Section */}
      <section className="p-8 border-t border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Rooms & beds</h2>
        
        <div className="mb-6">
          <div className="text-base">
            2 bedrooms <span className="text-sm text-gray-500">(sleeps 4)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bedroom pr-5">
            <h3 className="font-medium text-gray-800 mb-3">Bedroom 1</h3>
            <div className="flex items-center gap-3 text-gray-600 text-sm">
              <span className="text-xl">🛏️</span>
              <span>1 Queen Bed</span>
            </div>
          </div>
          
          <div className="bedroom pr-5">
            <h3 className="font-medium text-gray-800 mb-3">Bedroom 2</h3>
            <div className="flex items-center gap-3 text-gray-600 text-sm">
              <span className="text-xl">🛏️</span>
              <span>1 Twin Bed</span>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-base font-medium text-gray-800 mb-3">1 bathroom</h3>
          <div className="text-sm text-gray-500">Full Bathroom</div>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Spaces</h2>
          <ul className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              { icon: '🏊', text: 'Dock or patio' },
              { icon: '🍳', text: 'Kitchen' },
              { icon: '🏗️', text: 'Balcony' },
              { icon: '🌳', text: 'Garden' }
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-sm">
                <span className="text-lg text-gray-600">{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
          <a href="#" className="text-blue-600 hover:underline text-sm">
            See all rooms and beds details
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="p-8 border-t border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">About this property</h2>
        
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Juneau Vacation Home: Stunning View + Beach Access
        </h3>
        
        <p className="text-sm leading-relaxed text-gray-600 mb-6">
          Escape to the mountains and experience the great outdoors at this lovely Juneau vacation rental! 
          Perched on the shore of Lena Cove, this 2-bedroom, 1-bath home is the perfect getaway for those 
          looking to enjoy a relaxing retreat surrounded by nature.
        </p>

        <div className="space-y-4">
          <div className="font-medium text-sm text-gray-800">-- THE PROPERTY --</div>
          <div className="text-sm text-gray-600">
            CSL1000104 | 1,115 Sq Ft | 2 Private Decks | Lena Cove & Mountain Views | 2 Bicycles Provided
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="p-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row md:gap-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 md:mb-0 md:min-w-[120px]">
            Amenities
          </h2>
          
          <div className="flex-1">
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              {[
                { icon: '🍳', text: 'Kitchen' },
                { icon: '🧺', text: 'Washer' },
                { icon: '👕', text: 'Dryer' },
                { icon: '🌳', text: 'Outdoor Space' },
                { icon: '🅿️', text: 'Parking available' },
                { icon: '🌊', text: 'Ocean view' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-lg w-6 text-center text-gray-600">{item.icon}</span>
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
            <a href="#" className="text-blue-600 hover:underline text-sm">
              See all 34 amenities
            </a>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="p-8">
        <div className="max-w-[800px]">
          <div className="bg-cyan-50 rounded-xl p-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-gray-800">Have a question?</h3>
              <span className="bg-gray-800 text-white px-2 py-0.5 rounded text-xs uppercase font-medium">
                Beta
              </span>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">
              Get instant answers with AI powered search of property information and reviews.
            </p>
            
            <div className="relative">
              <input
                type="text"
                placeholder="Ask a question"
                defaultValue="Is there free parking?"
                className="w-full pl-12 pr-14 py-3.5 border border-gray-200 rounded-lg text-sm focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">⚲</span>
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors">
                🔍
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyListing;