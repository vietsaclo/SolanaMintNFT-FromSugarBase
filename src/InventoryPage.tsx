import React from 'react';
import Header from './components/Header';
import MyInventory from './components/MyInventory';

const InventoryPage: React.FC = () => {
  return (
    <>
      <main>
        <div className='header'>
          <Header />
        </div>

        <MyInventory />
      </main>
    </>
  );
};

export default React.memo(InventoryPage);
