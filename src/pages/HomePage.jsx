
import React from 'react';
import Header from '../components/Header';
import NearbyStores from '../components/NearbyStores';
import Categories from '../components/Categories';
import Products from '../components/Products';

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="pb-16">
        <NearbyStores />
        <Categories />
        <Products />
      </main>
    </>
  );
};

export default HomePage;