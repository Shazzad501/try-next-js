import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className='min-h-screen min-w-screen flex flex-col gap-3 items-center justify-center'>
      <h2 className='font-bold text-2xl'>404 Not Found</h2>
     <div>
     <Link href={'/'}>
      <button className='bg-white text-black p-2 rounded-md'>Back to Home</button>
      </Link>
     </div>
    </div>
  );
};

export default NotFoundPage;