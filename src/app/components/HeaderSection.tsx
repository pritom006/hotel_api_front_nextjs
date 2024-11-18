// import React from 'react';
// import { FiShare2, FiHeart } from 'react-icons/fi';

// const HeaderSection: React.FC = () => {
//   return (
//     <div className="flex justify-between items-center my-4">
//       <button className="text-blue-600 text-sm underline">{'<- See all properties'}</button>
//       <div className="flex space-x-4">
//         <button className="flex items-center space-x-1 text-gray-600">
//           <FiShare2 />
//           <span>Share</span>
//         </button>
//         <button className="flex items-center space-x-1 text-gray-600">
//           <FiHeart />
//           <span>Save</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HeaderSection;


// import React, { useState } from 'react';
// import { FiShare2, FiHeart } from 'react-icons/fi';

// const HeaderSection: React.FC = () => {
//   const [showShareModal, setShowShareModal] = useState(false);
//   const [isSaved, setIsSaved] = useState(false);

//   const handleCopyLink = () => {
//     navigator.clipboard.writeText(window.location.href);
//     alert('Link copied to clipboard!');
//   };

//   const toggleSave = () => {
//     setIsSaved(!isSaved);
//     localStorage.setItem('isSaved', JSON.stringify(!isSaved));
//   };

//   return (
//     <div className="flex justify-between items-center my-4">
//       <button className="text-blue-600 text-sm underline">{'<- See all properties'}</button>
//       <div className="flex space-x-4">
//         {/* Share Button */}
//         <button
//           className="flex items-center space-x-1 text-gray-600"
//           onClick={() => setShowShareModal(true)}
//         >
//           <FiShare2 />
//           <span>Share</span>
//         </button>

//         {/* Save Button */}
//         <button
//           className={`flex items-center space-x-1 ${
//             isSaved ? 'text-red-600' : 'text-gray-600'
//           }`}
//           onClick={toggleSave}
//         >
//           <FiHeart />
//           <span>{isSaved ? 'Saved' : 'Save'}</span>
//         </button>
//       </div>

//       {/* Share Modal */}
//       {showShareModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded shadow-lg w-80">
//             <h2 className="text-lg font-bold mb-4">Share</h2>
//             <div className="flex justify-around">
//               <button className="text-blue-600">Facebook</button>
//               <button className="text-green-600">WhatsApp</button>
//               <button
//                 className="text-gray-600"
//                 onClick={handleCopyLink}
//               >
//                 Copy Link
//               </button>
//             </div>
//             <button
//               onClick={() => setShowShareModal(false)}
//               className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HeaderSection;


import React, { useState, useEffect } from 'react';
import { FiShare2, FiHeart } from 'react-icons/fi';

const HeaderSection: React.FC = () => {
  const [showShareModal, setShowShareModal] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // On component mount, fetch the saved state from localStorage
  useEffect(() => {
    const savedState = localStorage.getItem('isSaved');
    if (savedState) {
      setIsSaved(JSON.parse(savedState));
    }
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  const toggleSave = () => {
    const newState = !isSaved;
    setIsSaved(newState);
    localStorage.setItem('isSaved', JSON.stringify(newState));
  };

  return (
    <div className="flex justify-between items-center my-4">
      <button className="text-blue-600 text-sm underline">{'<- See all properties'}</button>
      <div className="flex space-x-4">
        {/* Share Button */}
        <button
          className="flex items-center space-x-1 text-gray-600"
          onClick={() => setShowShareModal(true)}
        >
          <FiShare2 />
          <span>Share</span>
        </button>

        {/* Save Button */}
        <button
          className={`flex items-center space-x-1 ${
            isSaved ? 'text-red-600' : 'text-gray-600'
          }`}
          onClick={toggleSave}
        >
          <FiHeart />
          <span>{isSaved ? 'Saved' : 'Save'}</span>
        </button>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-lg font-bold mb-4">Share</h2>
            <div className="flex justify-around">
              <button className="text-blue-600">Facebook</button>
              <button className="text-green-600">WhatsApp</button>
              <button
                className="text-gray-600"
                onClick={handleCopyLink}
              >
                Copy Link
              </button>
            </div>
            <button
              onClick={() => setShowShareModal(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderSection;
