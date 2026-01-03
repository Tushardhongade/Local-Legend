
import React from 'react';
import { ChevronRight } from 'lucide-react';

const categories = [
  'All',
  'Apt',
  'Video Editing & Production',
  'Website Development',
  'Digital Marketing',
];

const services = ['Services', 'Products'];

const Categories = () => {
  return (
    <section className="px-4 py-4 bg-white mt-2">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Categories</h2>
        <button className="text-blue-600 text-sm font-medium flex items-center">
          See All <ChevronRight className="h-4 w-4 ml-1" />
        </button>
      </div>
      <div className="flex space-x-2 mb-4">
        {services.map((service, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            {service}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
        {categories.map((category, index) => (
          <button
            key={index}
            className="px-3 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors text-center"
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Categories;