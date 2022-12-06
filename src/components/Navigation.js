import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  let location = useLocation();
  return (
    <nav className="w-full sm:w-2/3 md:w-2/5 align-middle flex flex-row justify-between sm:justify-around gap-x-4 ">
      <Link className="font-semibold my-auto hover:text-primary-blue" to="/">
        Home
      </Link>
      <Link className="font-semibold my-auto hover:text-primary-blue" to="/learn">
        Learn
      </Link>
      {location.pathname !== '/register' && (
        <Link
          className="font-semibold w-2/3 md:w-1/3 my-auto hover:text-primary-blue"
          to="/register"
        >
          <button className="btn-outline w-full">Sign Up</button>
        </Link>
      )}
    </nav>
  );
}
