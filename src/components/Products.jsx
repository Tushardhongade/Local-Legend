
import React from 'react';

const products = [
  { name: 'Document & Resume Formatting', price: '₹200', distance: '3369 km' },
  { name: 'Data Entry Services', price: '₹300', distance: '3369 km' },
  { name: 'Frontend / Basic Web Services', price: '₹500', distance: '336.9 km' },
  { name: 'Anchoring', price: '₹210000', distance: '336.9 km' },
  { name: 'Knorr Seasoning Powder Pork Flavour', price: '₹6981', distance: '336.9 km' },
  { name: 'Knorr Fix for Schweinebraten Roast Pork', price: '₹1309', distance: '336.9 km' },
  { name: 'Hat Nem Knorr Pork Seasoning', price: '₹2725', distance: '3369 km' },
  { name: 'Knorr Gravy Mix, Classic Brown', price: '₹1319', distance: '336.9 km' },
  { name: 'Knorr Turkey Gravy Mix Roasted Turkey', price: '₹2569', distance: '336.9 km' },
  { name: 'Knorr Knr Bouillon Beef Zero Salt', price: '₹1518', distance: '336.9 km' },
  { name: 'Dreamland Candies Jar', price: '₹109', distance: '3369 km' },
  { name: 'Knorr Chicken Cubes', price: '₹630', distance: '3369 km' },
];

const Products = () => {
  return (
    <section className="px-4 py-4">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Recommended for you</h2>
        <p className="text-sm text-gray-600">100 items near you</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="h-40 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">Product Image</span>
            </div>
            <div className="p-3">
              <h3 className="text-sm font-medium line-clamp-2 mb-1">{product.name}</h3>
              <div className="flex items-center justify-between">
                <p className="text-base font-bold">{product.price}</p>
                <p className="text-xs text-gray-500">📍 {product.distance}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;