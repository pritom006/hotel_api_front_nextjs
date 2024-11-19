
import React, { useState, useEffect } from 'react';
import { FiShare2, FiHeart, FiX } from 'react-icons/fi';
import Image from 'next/image';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { HiLink } from "react-icons/hi";

const HeaderSection: React.FC = () => {
  const [showShareModal, setShowShareModal] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

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
          className="flex items-center space-x-1 text-gray-600 border-black rounded-full"
          onClick={() => setShowShareModal(true)}
        >
          <FiShare2 className="text-lg" />
          <span>Share</span>
        </button>

        {/* Save Button */}
        <button
          className="flex items-center space-x-1 text-gray-600 border-green rounded-full"
          onClick={toggleSave}
        >
          <FiHeart className={`text-lg ${isSaved ? 'fill-red-500 text-red-500' : ''}`} />
          <span>Save</span>
        </button>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-[380px] relative">
            {/* Close button */}
            <button
              onClick={() => setShowShareModal(false)}
              className="absolute top-2 left-2 p-2 hover:bg-gray-100 rounded-full"
            >
              <FiX className="text-xl" />
            </button>
            
            {/* Modal header with Share text */}
            <div className="text-center py-4 border-b">
              <h2 className="font-semibold">Share</h2>
            </div>

            {/* Property preview */}
            <div className="p-4 flex gap-3">
              <Image
                src="/juneau.jpeg" 
                alt="Property"
                width={100}
                height={100}
                className="rounded-lg object-cover"
              />
              <div>
                <h3 className="font-bold text-lg">Juneau Vacation Home: Stunning View + Beach Access</h3>
                <div className="flex items-center mt-1">
                  <span className="text-sm text-gray-600">United States of America</span>
                </div>
                <div className="flex items-center mt-1">
                  <span className="text-sm text-gray-600">5.0/10</span>
                </div>
              </div>
            </div>

            {/* Share options */}
            <div className="grid grid-cols-3 gap-4 p-4">
              <button className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <IoChatbubbleEllipsesOutline className="text-2xl text-blue-600" />
                </div>
                <span className="text-sm">Messages</span>
              </button>

              <button className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <FaWhatsapp className="text-2xl text-green-600" />
                </div>
                <span className="text-sm">WhatsApp</span>
              </button>

              <button className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <FaFacebookMessenger className="text-2xl text-blue-600" />
                </div>
                <span className="text-sm">Messenger</span>
              </button>

              <button className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <FaFacebookF className="text-2xl text-blue-600" />
                </div>
                <span className="text-sm">Facebook</span>
              </button>

              <button className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <FaXTwitter className="text-2xl" />
                </div>
                <span className="text-sm">X</span>
              </button>

              <button 
                className="flex flex-col items-center gap-2"
                onClick={handleCopyLink}
              >
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <HiLink className="text-2xl" />
                </div>
                <span className="text-sm">Copy link</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderSection;
