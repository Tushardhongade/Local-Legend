
import React from 'react';
import logo from "../assets/logo.png"
import { Search, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
           <img src={logo} alt="" className='w-52 h-20'/>
           
          </div>
          <div className="relative flex-1 max-w-md mx-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search for products, brands and more"
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;