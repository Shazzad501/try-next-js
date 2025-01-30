import React from 'react';

const DashboardLayout = ({children}) => {
  return (
    <div>
      <div className='grid grid-cols-12 gap-5 py-12'>
        {/* side nav */}
        <div className='col-span-3 px-5'>
            <ul className='flex flex-col gap-3'>
              <li>home</li>
              <li>about</li>
              <li>contact</li>
            </ul>
        </div>
        <div className='col-span-9'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;