

import React, { useState } from "react";

interface HotelImagesProps {
  images: string[];
}

const HotelImages: React.FC<HotelImagesProps> = ({ images }) => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Simply prepend the base URL to the image path
  const getImageUrl = (imagePath: string) => {
    return `http://localhost:8080${imagePath}`;
  };

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

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="md:col-span-1">
          <img
            src={getImageUrl(images[0])}
            alt="Main Hotel Image"
            className="w-full h-96 object-cover rounded-t-lg"
          />
        
        </div>
        {images.slice(1,5).map((image, index) => (
          <img
            key={index}
            src={getImageUrl(image)}
            alt={`Hotel Image ${index + 2}`}
            className="w-full h-48 object-cover"
          />
        ))}
        {images.length > 5 && (
          <button
            className="w-full h-48 flex items-center justify-center bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors rounded-lg"
            onClick={() => setShowGallery(true)}
          >
            <span className="text-lg font-semibold">
              +{images.length - 5} More Photos
            </span>
          </button>
        )}
      </div>

      {/* Gallery Modal */}
      {showGallery && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="w-full max-w-4xl bg-white p-4 rounded-lg">
            <div className="relative">
              <img
                src={getImageUrl(images[currentIndex])}
                alt={`Hotel Image ${currentIndex + 1}`}
                className="w-full h-[32rem] object-contain rounded-lg"
              />
              
              <div className="absolute inset-x-0 bottom-0 flex justify-between p-4">
                <button
                  className="px-4 py-2 bg-black bg-opacity-50 text-white rounded hover:bg-opacity-75 transition-opacity disabled:opacity-30"
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                >
                  Previous
                </button>
                <button
                  className="px-4 py-2 bg-black bg-opacity-50 text-white rounded hover:bg-opacity-75 transition-opacity disabled:opacity-30"
                  onClick={handleNext}
                  disabled={currentIndex === images.length - 1}
                >
                  Next
                </button>
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <span className="text-gray-600">
                Image {currentIndex + 1} of {images.length}
              </span>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                onClick={() => setShowGallery(false)}
              >
                Close Gallery
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelImages;



