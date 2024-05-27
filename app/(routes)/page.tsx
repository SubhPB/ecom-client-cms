// Byimaan

import React from 'react'
import Billboard from '@/components/billboard';

function HomePage() {
  return (
    <div className='w-full px-4'>
      <Billboard billboard={null} allowFetchIfNoInput={true}/>
    </div>
  );
}

export default HomePage