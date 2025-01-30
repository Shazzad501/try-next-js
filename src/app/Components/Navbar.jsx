"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
  const pathname = usePathname();

  if(!pathname.includes('dashboard')){
    return (
      <nav>
        <ul className="flex gap-5 justify-center items-center">
          <Link href='/'>
            <li>Home</li>
          </Link>
          <Link href={'/services'}>
            <li>Service</li>
          </Link>
          <Link href={'/about'}>
            <li>About</li>
          </Link>
        </ul>
      </nav>
    );
  }
  else{
    return(<></>);
  }
};

export default Navbar;