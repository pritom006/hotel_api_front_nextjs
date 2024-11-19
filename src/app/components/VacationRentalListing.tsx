import React from 'react';
import { ChevronRight } from 'lucide-react';

const VacationRentalListing = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-6">
      {/* House Rules Section */}
      <section className="mb-12 flex items-start gap-12">
        <h2 className="text-xl font-semibold text-gray-800 min-w-[120px]">House Rules</h2>
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-5 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-lg text-gray-600">⏰</span>
              <span className="text-sm text-gray-800">Check in after 3:00 PM</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg text-gray-600">⌚</span>
              <span className="text-sm text-gray-800">Check out before 11:00 AM</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg text-gray-600">📅</span>
              <span className="text-sm text-gray-800">Minimum age to rent: 25</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              { icon: '👶', text: 'Children allowed: ages 0-17' },
              { icon: '🎉', text: 'No events allowed' },
              { icon: '🐾', text: 'No pets allowed' },
              { icon: '🚭', text: 'No smoking permitted' }
            ].map((rule, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-lg text-gray-600">{rule.icon}</span>
                <span className="text-sm text-gray-800">{rule.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Damage Section */}
      <section className="mb-12 flex items-start gap-12">
        <h2 className="text-xl font-semibold text-gray-800 min-w-[120px]">Damage and Incidentals</h2>
        <div className="flex items-start gap-3">
          <span className="text-lg text-gray-600">⚠️</span>
          <span className="text-sm text-gray-800">You will be responsible for any damage to the rental property caused by you or your party during your stay.</span>
        </div>
      </section>

      {/* Cancellation Section */}
      <section className="mb-12 flex items-start gap-12">
      <h2 className="text-xl font-semibold text-gray-800 min-w-[120px]">Cancellation</h2>
      <div className="flex-1">
        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-4">
            <span>Full refund</span>
            <span>No refund</span>
          </div>
          <div className="relative mb-8">
            {/* Container for line and points */}
            <div className="relative">
              {/* Background line */}
              <div className="absolute left-0 right-0 h-0.5 bg-gray-300 top-[6px]"></div>
              {/* Filled line */}
              <div className="absolute left-0 w-1/2 h-0.5 bg-black top-[6px]"></div>
              
              {/* Points and labels container */}
              <div className="relative flex justify-between">
                {['Today', 'Nov 4', 'Check-in'].map((label, index) => (
                  <div 
                    key={index} 
                    className={`flex flex-col items-center ${
                      index === 0 ? 'translate-x-[-12px]' : 
                      index === 2 ? '-translate-x-[-18px]' : ''
                    }`}
                  >
                    <div className="w-3 h-3 rounded-full border-2 border-black bg-white mb-4"></div>
                    <span className="text-sm text-gray-600 whitespace-nowrap">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-200 pb-6 mb-6">
          <div className="flex gap-12">
            <span className="text-sm text-gray-600 min-w-[120px]">Before Nov 4</span>
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">Full refund</h3>
              <p className="text-sm text-gray-600">
                Cancel your reservation before Nov 4 at 11:59 PM, and you'll get a full refund. 
                Times are based on the property's local time.
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-12">
          <span className="text-sm text-gray-600 min-w-[120px]">After Nov 4</span>
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">No refund</h3>
            <p className="text-sm text-gray-600">After that, you won't get a refund.</p>
          </div>
        </div>
      </div>
    </section>

      {/* Reviews Section */}
      <section className="mb-12 flex items-start gap-12">
        <div className="min-w-[120px]">
          <div className="text-3xl font-semibold text-green-600 mb-1">9.8/10</div>
          <div className="text-base text-gray-800 mb-2">Exceptional</div>
          <div className="text-sm text-gray-600 underline cursor-pointer">24 reviews</div>
        </div>
        
        <div className="flex-1">
          <h2 className="text-base font-semibold text-gray-800 mb-6">Recent reviews</h2>
          <div className="grid grid-cols-2 gap-6 mb-6">
            {[
              {
                rating: '10/10 Excellent',
                text: 'A very cozy home for the two of us in a quiet area NW of town. Beautiful water view. We enjoyed the art, read up in it and visited the...',
                name: 'Kyle G.',
                date: 'Sep 25, 2024'
              },
              {
                rating: '10/10 Excellent',
                text: 'The cottage was just as the pictures and description stated. Nice quiet area and great view of the cove.',
                name: 'Cindy B.',
                date: 'Sep 23, 2024'
              }
            ].map((review, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6">
                <div className="text-sm font-semibold text-gray-800 mb-3">{review.rating}</div>
                <p className="text-sm text-gray-800 mb-4 line-clamp-3">{review.text}</p>
                <a href="#" className="text-sm text-blue-600 hover:underline">Read more</a>
                <div className="mt-4">
                  <div className="text-sm text-gray-800 mb-1">{review.name}</div>
                  <div className="text-sm text-gray-600">{review.date}</div>
                </div>
              </div>
            ))}
          </div>
          
          <a href="#" className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-blue-600 text-sm hover:bg-gray-50">
            See all 24 reviews
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default VacationRentalListing;