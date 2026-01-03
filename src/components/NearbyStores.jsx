
import React from 'react';
import { ChevronRight } from 'lucide-react';

const nearbyStores = [
  { name: 'test seller', distance: '1818 km' },
  { name: 'Masti Goli', distance: '1818 km' },
  { name: 'Local Products', distance: '1818 km' },
  { name: 'Bhumil', distance: '2358 km' },
];

const NearbyStores = () => {
  return (
    <section className="px-4 py-4 bg-white mt-2">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Nearby Stores</h2>
        <button className="text-blue-600 text-sm font-medium flex items-center">
          See All <ChevronRight className="h-4 w-4 ml-1" />
        </button>
      </div>
      <p className="text-sm text-gray-600 mb-4">Visit sellers in your area</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {nearbyStores.map((store, index) => (
          <div key={index} className="text-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center">
              <span className="text-gray-500 text-xs">©</span>
            </div>
            <p className="text-sm font-medium">{store.name}</p>
            <p className="text-xs text-gray-500">{store.distance} away</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NearbyStores;