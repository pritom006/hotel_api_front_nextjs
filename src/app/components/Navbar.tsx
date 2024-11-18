


// import React, { useState } from 'react';

// const Navbar: React.FC = () => {
//   const [showCountryModal, setShowCountryModal] = useState(false);
//   const [selectedCountry, setSelectedCountry] = useState('United States');
//   const [currency, setCurrency] = useState('USD');

//   const countries = [
//     { name: 'United States', currency: 'USD' },
//     { name: 'Canada', currency: 'CAD' },
//     { name: 'United Kingdom', currency: 'GBP' },
//     { name: 'India', currency: 'INR' },
//   ];

//   const handleCountryClick = (country: string, currency: string) => {
//     setSelectedCountry(country);
//     setCurrency(currency);
//     setShowCountryModal(false);
//   };

//   return (
//     <nav className="flex justify-between items-center p-4 bg-white shadow">
//       <div className="flex space-x-4">
//         <span
//           className="cursor-pointer"
//           onClick={() => setShowCountryModal(true)}
//         >
//           {selectedCountry}
//         </span>
//         <span>Trip Boards</span>
//         <span>List your property</span>
//         <span>Help</span>
//       </div>
//       <div className="flex space-x-4">
//         <span>My Trips</span>
//         <button className="px-4 py-2 bg-blue-500 text-white rounded">
//           Sign In
//         </button>
//       </div>

//       {/* Country Modal */}
//       {showCountryModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded shadow-lg w-96">
//             <h2 className="text-lg font-bold mb-4">Select a Country</h2>
//             <ul>
//               {countries.map(({ name, currency }) => (
//                 <li
//                   key={name}
//                   className="py-2 px-4 hover:bg-gray-200 cursor-pointer"
//                   onClick={() => handleCountryClick(name, currency)}
//                 >
//                   {name}
//                 </li>
//               ))}
//             </ul>
//             <button
//               onClick={() => setShowCountryModal(false)}
//               className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//       <div className="mt-2 text-sm text-gray-600">{`Currency: ${currency}`}</div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';

const Navbar = () => {
  const [showRegionModal, setShowRegionModal] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('United States');
  const [currency, setCurrency] = useState('USD');

  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region);
    const currencyMap: { [key: string]: string } = {
      'United States': 'USD',
      'Portugal': 'EUR',
      'Canada': 'CAD',
      'United Kingdom': 'GBP',
      'India': 'INR',

    };
    setCurrency(currencyMap[region] || 'USD');
    setShowRegionModal(false);
  };

  return (
    <div className="w-full">
      <nav className="flex items-center justify-end px-4 py-2 bg-white border-b border-gray-200">
        <div className="flex items-center">
          <button 
            onClick={() => setShowRegionModal(true)}
            className="px-3 py-2 text-sm hover:bg-gray-50"
          >
            <span>{selectedRegion}</span>
            <span className="text-xs ml-1">▼</span>
          </button>
          <a href="#" className="px-3 py-2 text-sm text-blue-600">Trip Boards</a>
          <a href="#" className="px-3 py-2 text-sm">List your property</a>
          <a href="#" className="px-3 py-2 text-sm">Help</a>
          <a href="#" className="px-3 py-2 text-sm">My trips</a>
          <button className="px-3 py-2 text-sm">Sign in</button>
        </div>
      </nav>

      {/* Region Selection Modal */}
      {showRegionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center pt-20 z-50">
          <div className="bg-white rounded-lg shadow-xl w-96 overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Display settings</h3>
                <button 
                  onClick={() => setShowRegionModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="mb-4">
                <div className="text-sm text-gray-600 mb-1">
                  Changing your region could change your rewards program
                </div>
                <div className="text-xs text-gray-500">
                  To stay with your current rewards program keep your region the same. One Key is currently only available in select regions.
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Region</label>
                  <select 
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={selectedRegion}
                    onChange={(e) => handleRegionSelect(e.target.value)}
                  >
                    <option value="United States">United States</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Currency</label>
                  <select 
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={currency}
                    disabled
                  >
                    <option value={currency}>{currency}</option>
                  </select>
                </div>
              </div>

              <button
                onClick={() => setShowRegionModal(false)}
                className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;