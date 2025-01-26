import React from 'react';
import logo from '../assets/favicon.png'; 
function Loader() {
  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50"
    >
      
      <div className="relative">
       
        <img
          src={logo}
          alt="Kraf Technologies"
          className="w-12 h-auto animate-pulse" 
        />

        
        <div className="absolute -inset-6 border-4 border-opacity-25 border-gray-500 border-t-4 border-t-[#18CB96] rounded-full animate-spin-slow"></div>
      </div>
    </div>
  );
}

export default Loader;