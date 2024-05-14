import React from 'react';

function HomeOptions({ handleStoreClick }) {
  return (
    <div className="homeOptions">
      <button className='options' onClick={handleStoreClick}>Store</button>
      <button className='options'>Battle</button>
      <button className='options'>Rest</button>
    </div>
  );
}

export default HomeOptions;