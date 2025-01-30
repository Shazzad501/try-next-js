import Link from 'next/link';
import React from 'react';

const Navbar = () => {
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
};

export default Navbar;