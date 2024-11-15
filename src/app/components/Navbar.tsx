// src/app/components/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow">
      <div className="flex space-x-4">
        <span>United States</span>
        <span>Trip Boards</span>
        <span>List your property</span>
        <span>Help</span>
      </div>
      <div className="flex space-x-4">
        <span>My Trips</span>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
