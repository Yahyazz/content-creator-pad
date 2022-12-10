import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { auth } from '../utils/firebase-config';
import { signOut } from 'firebase/auth';

export default function Navigation() {
  let location = useLocation();

  function logoutClick() {
    signOut(auth)
        .then(() => {
            console.log('the user signed out')
        })
        .catch((err) => {
            console.log(err.message)
        })
  }

  return (
    <nav className="w-full sm:w-2/3 md:w-2/5 align-middle flex flex-row justify-between sm:justify-around gap-x-4 ">

      {location.pathname !== '/admin' && (
        <>
          <Link className="font-semibold my-auto hover:text-primary-blue" to="/">
            Home
          </Link>
          <Link className="font-semibold my-auto hover:text-primary-blue" to="/learn">
            Learn
          </Link>
          <Link
            className="font-semibold w-2/3 md:w-1/3 my-auto hover:text-primary-blue"
            to="/login"
          >
            <button className="btn-outline w-full">Login</button>
          </Link>
        </>
      )}
      {location.pathname === '/admin' && (
        <>
          <Link className="font-semibold my-auto hover:text-primary-blue" to="/admin">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            
          </Link>
          <Link className="font-semibold my-auto hover:text-primary-blue" to="/admin">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Link>
          <Link
            className="font-semibold w-2/3 md:w-1/3 my-auto hover:text-primary-blue"
            to="/login"
          >
            <button className="btn-outline w-full" onClick={logoutClick}>Logout</button>
          </Link>
        </>
      )}
      
    </nav>
  );
}
