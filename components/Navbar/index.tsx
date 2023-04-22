'use client';

import Link from 'next/link';

const NavbarComponent = () => {
  return (
    <>
      <ul className="text-white flex gap-5 justify-center items-center mb-20">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/counter">Counter</Link>
        </li>
        <li>
          <Link href="/fetch">Fetch</Link>
        </li>
      </ul>
    </>
  );
};

export default NavbarComponent;
