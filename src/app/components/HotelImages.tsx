// src/app/components/HotelImages.tsx
// import React from 'react';

// interface HotelImagesProps {
//   images: string[];
// }

// const HotelImages: React.FC<HotelImagesProps> = ({ images }) => {
//   return (
//     <div>
//       <div className="grid grid-cols-2 gap-2">
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Hotel Image ${index + 1}`}
//             className="w-full h-48 object-cover rounded-lg shadow"
//           />
//         ))}
//       </div>
//       <div className="flex justify-around mt-4 border-t pt-2">
//         <button className="text-sm text-gray-600">Overview</button>
//         <button className="text-sm text-gray-600">Amenities</button>
//         <button className="text-sm text-gray-600">Policies</button>
//       </div>
//     </div>
//   );
// };

// export default HotelImages;

//actual
// import React, { useState } from "react";

// interface HotelImagesProps {
//   images: string[];
// }

// const HotelImages: React.FC<HotelImagesProps> = ({ images }) => {
//   const [showGallery, setShowGallery] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     if (currentIndex < images.length - 1) {
//       setCurrentIndex((prev) => prev + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prev) => prev - 1);
//     }
//   };

//   return (
//     <div>
//       <div className="grid grid-cols-2 gap-2">
//         {images.slice(0, 4).map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Hotel Image ${index + 1}`}
//             className="w-full h-48 object-cover rounded-lg shadow"
//           />
//         ))}
//         {images.length > 4 && (
//           <button
//             className="w-full h-48 flex items-center justify-center bg-gray-200 text-gray-600"
//             onClick={() => setShowGallery(true)}
//           >
//             {`+${images.length - 4} More Photos`}
//           </button>
//         )}
//       </div>
//       {showGallery && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-4 rounded-lg shadow-lg">
//             <img
//               src={images[currentIndex]}
//               alt={`Hotel Image ${currentIndex + 1}`}
//               className="w-full h-96 object-cover rounded-lg"
//             />
//             <div className="flex justify-between mt-4">
//               <button
//                 className="px-4 py-2 bg-gray-500 text-white rounded"
//                 onClick={handlePrev}
//                 disabled={currentIndex === 0}
//               >
//                 Prev
//               </button>
//               <button
//                 className="px-4 py-2 bg-gray-500 text-white rounded"
//                 onClick={handleNext}
//                 disabled={currentIndex === images.length - 1}
//               >
//                 Next
//               </button>
//             </div>
//             <button
//               className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
//               onClick={() => setShowGallery(false)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HotelImages;

//actual 2nd
// import React, { useState } from "react";

// interface HotelImagesProps {
//   images: string[]; // Array of image filenames
// }

// const HotelImages: React.FC<HotelImagesProps> = ({ images }) => {
//   const [showGallery, setShowGallery] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Base URL for images served by the backend
//   const imageBaseUrl = "http://localhost:8080";

//   const handleNext = () => {
//     if (currentIndex < images.length - 1) {
//       setCurrentIndex((prev) => prev + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prev) => prev - 1);
//     }
//   };

//   return (
//     <div>
//       {/* Display the first 4 images in a grid */}
//       <div className="grid grid-cols-2 gap-2">
//   {images.slice(0, 4).map((image, index) => (
//     <img
//       key={index}
//       src={`${imageBaseUrl}${image.startsWith("/") ? "" : "/"}${image}`}
//       // Construct the full URL for each image
//       alt={`Hotel Image ${index + 1}`}
//       className="w-full h-48 object-cover rounded-lg shadow"
//     />
//   ))}
//   {images.length > 4 && (
//     <button
//       className="w-full h-48 flex items-center justify-center bg-gray-200 text-gray-600"
//       onClick={() => setShowGallery(true)}
//     >
//       {`+${images.length - 4} More Photos`}
//     </button>
//   )}
// </div>

//       {/* Fullscreen Gallery Modal */}
//       {showGallery && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-4 rounded-lg shadow-lg">
//             {/* Display the currently selected image */}
//             <img
//               src={`${imageBaseUrl}/${images[currentIndex]}`}
//               alt={`Hotel Image ${currentIndex + 1}`}
//               className="w-full h-96 object-cover rounded-lg"
//             />

//             {/* Next and Previous buttons */}
//             <div className="flex justify-between mt-4">
//               <button
//                 className="px-4 py-2 bg-gray-500 text-white rounded"
//                 onClick={handlePrev}
//                 disabled={currentIndex === 0}
//               >
//                 Prev
//               </button>
//               <button
//                 className="px-4 py-2 bg-gray-500 text-white rounded"
//                 onClick={handleNext}
//                 disabled={currentIndex === images.length - 1}
//               >
//                 Next
//               </button>
//             </div>

//             {/* Close button */}
//             <button
//               className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
//               onClick={() => setShowGallery(false)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HotelImages;


//3rd modification
import React, { useState } from "react";

interface HotelImagesProps {
  images: string[]; // Array of image filenames
}

const HotelImages: React.FC<HotelImagesProps> = ({ images }) => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const imageBaseUrl = "http://localhost:8080";

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div>
      {/* Display the first 4 images */}
      <div className="grid grid-cols-2 gap-2">
        {images.slice(0, 4).map((image, index) => (
          <img
            key={index}
            src={`${imageBaseUrl}${image}`}
            alt={`Hotel Image ${index + 1}`}
            className="w-full h-48 object-cover rounded-lg shadow"
          />
        ))}
        {images.length > 4 && (
          <button
            className="w-full h-48 flex items-center justify-center bg-gray-200 text-gray-600"
            onClick={() => setShowGallery(true)}
          >
            {`+${images.length - 4} More Photos`}
          </button>
        )}
      </div>

      {/* Fullscreen Gallery Modal */}
      {showGallery && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            {/* Display the currently selected image */}
            <img
              src={`${imageBaseUrl}${images[currentIndex]}`}
              alt={`Hotel Image ${currentIndex + 1}`}
              className="w-full h-96 object-cover rounded-lg"
            />

            {/* Next and Previous buttons */}
            <div className="flex justify-between mt-4">
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded"
                onClick={handlePrev}
                disabled={currentIndex === 0}
              >
                Prev
              </button>
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded"
                onClick={handleNext}
                disabled={currentIndex === images.length - 1}
              >
                Next
              </button>
            </div>

            {/* Close button */}
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              onClick={() => setShowGallery(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelImages;


// import React, { useState } from "react";
// import Image from "next/image";

// interface HotelImagesProps {
//   images: string[];
// }

// const HotelImages: React.FC<HotelImagesProps> = ({ images }) => {
//   const [showGallery, setShowGallery] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [imageError, setImageError] = useState<Record<number, boolean>>({});

//   const handleImageError = (index: number) => {
//     setImageError(prev => ({
//       ...prev,
//       [index]: true
//     }));
//   };

//   const handleNext = () => {
//     if (currentIndex < images.length - 1) {
//       setCurrentIndex(prev => prev + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(prev => prev - 1);
//     }
//   };

//   const handleKeyDown = (e: KeyboardEvent) => {
//     if (showGallery) {
//       if (e.key === 'ArrowRight') handleNext();
//       if (e.key === 'ArrowLeft') handlePrev();
//       if (e.key === 'Escape') setShowGallery(false);
//     }
//   };

//   React.useEffect(() => {
//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [showGallery, currentIndex]);

//   return (
//     <div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
//         {images.slice(0, 4).map((image, index) => (
//           <div
//             key={index}
//             className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
//             onClick={() => {
//               setCurrentIndex(index);
//               setShowGallery(true);
//             }}
//           >
//             {!imageError[index] ? (
// import React, { useState } from "react";
// import Image from "next/image";

// interface HotelImagesProps {
//   images: string[];
// }

// const HotelImages: React.FC<HotelImagesProps> = ({ images }) => {
//   const [showGallery, setShowGallery] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [imageError, setImageError] = useState<Record<number, boolean>>({});

//   const handleImageError = (index: number) => {
//     setImageError(prev => ({
//       ...prev,
//       [index]: true
//     }));
//   };

//   const handleNext = () => {
//     if (currentIndex < images.length - 1) {
//       setCurrentIndex(prev => prev + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(prev => prev - 1);
//     }
//   };

//   const handleKeyDown = (e: KeyboardEvent) => {
//     if (showGallery) {
//       if (e.key === 'ArrowRight') handleNext();
//       if (e.key === 'ArrowLeft') handlePrev();
//       if (e.key === 'Escape') setShowGallery(false);
//     }
//   };

//   React.useEffect(() => {
//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [showGallery, currentIndex]);

//   return (
//     <div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
//         {images.slice(0, 4).map((image, index) => (
//           <div
//             key={index}
//             className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
//             onClick={() => {
//               setCurrentIndex(index);
//               setShowGallery(true);
//             }}
//           >
//             {!imageError[index] ? (
//               <img
//                 src={image}
//                 alt={`Hotel Image ${index + 1}`}
//                 className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
//                 onError={() => handleImageError(index)}
//               />
//             ) : (
//               <div className="w-full h-full flex items-center justify-center bg-gray-200">
//                 <span className="text-gray-500">Image not available</span>
//               </div>
//             )}
//           </div>
//         ))}
//         {images.length > 4 && (
//           <button
//             className="absolute bottom-4 right-4 px-4 py-2 bg-white bg-opacity-90 rounded-lg 
//                        text-gray-800 shadow-lg hover:bg-opacity-100 transition-all"
//             onClick={() => setShowGallery(true)}
//           >
//             +{images.length - 4} More Photos
//           </button>
//         )}
//       </div>

//       {showGallery && (
//         <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
//           <div className="max-w-4xl w-full p-4">
//             <div className="relative">
//               <img
//                 src={images[currentIndex]}
//                 alt={`Hotel Image ${currentIndex + 1}`}
//                 className="w-full h-[80vh] object-contain rounded-lg"
//                 onError={() => handleImageError(currentIndex)}
//               />
              
//               <button
//                 className="absolute left-4 top-1/2 transform -translate-y-1/2 
//                           px-4 py-2 bg-white bg-opacity-50 rounded-full hover:bg-opacity-75
//                           disabled:opacity-30 disabled:cursor-not-allowed"
//                 onClick={handlePrev}
//                 disabled={currentIndex === 0}
//               >
//                 ←
//               </button>
              
//               <button
//                 className="absolute right-4 top-1/2 transform -translate-y-1/2 
//                           px-4 py-2 bg-white bg-opacity-50 rounded-full hover:bg-opacity-75
//                           disabled:opacity-30 disabled:cursor-not-allowed"
//                 onClick={handleNext}
//                 disabled={currentIndex === images.length - 1}
//               >
//                 →
//               </button>

//               <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
//                 {currentIndex + 1} / {images.length}
//               </div>

//               <button
//                 className="absolute top-4 left-4 text-white bg-black bg-opacity-50 
//                           px-4 py-2 rounded-lg hover:bg-opacity-75"
//                 onClick={() => setShowGallery(false)}
//               >
//                 ✕
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HotelImages;
//               <img
//                 src={image}
//                 alt={`Hotel Image ${index + 1}`}
//                 className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
//                 onError={() => handleImageError(index)}
//               />
//             ) : (
//               <div className="w-full h-full flex items-center justify-center bg-gray-200">
//                 <span className="text-gray-500">Image not available</span>
//               </div>
//             )}
//           </div>
//         ))}
//         {images.length > 4 && (
//           <button
//             className="absolute bottom-4 right-4 px-4 py-2 bg-white bg-opacity-90 rounded-lg 
//                        text-gray-800 shadow-lg hover:bg-opacity-100 transition-all"
//             onClick={() => setShowGallery(true)}
//           >
//             +{images.length - 4} More Photos
//           </button>
//         )}
//       </div>

//       {showGallery && (
//         <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
//           <div className="max-w-4xl w-full p-4">
//             <div className="relative">
//               <img
//                 src={images[currentIndex]}
//                 alt={`Hotel Image ${currentIndex + 1}`}
//                 className="w-full h-[80vh] object-contain rounded-lg"
//                 onError={() => handleImageError(currentIndex)}
//               />
              
//               <button
//                 className="absolute left-4 top-1/2 transform -translate-y-1/2 
//                           px-4 py-2 bg-white bg-opacity-50 rounded-full hover:bg-opacity-75
//                           disabled:opacity-30 disabled:cursor-not-allowed"
//                 onClick={handlePrev}
//                 disabled={currentIndex === 0}
//               >
//                 ←
//               </button>
              
//               <button
//                 className="absolute right-4 top-1/2 transform -translate-y-1/2 
//                           px-4 py-2 bg-white bg-opacity-50 rounded-full hover:bg-opacity-75
//                           disabled:opacity-30 disabled:cursor-not-allowed"
//                 onClick={handleNext}
//                 disabled={currentIndex === images.length - 1}
//               >
//                 →
//               </button>

//               <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
//                 {currentIndex + 1} / {images.length}
//               </div>

//               <button
//                 className="absolute top-4 left-4 text-white bg-black bg-opacity-50 
//                           px-4 py-2 rounded-lg hover:bg-opacity-75"
//                 onClick={() => setShowGallery(false)}
//               >
//                 ✕
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HotelImages;