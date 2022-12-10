import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../utils/firebase-config';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Navigation() {
  const [user, loading, error] = useAuthState(auth);

  function logoutClick() {
    signOut(auth)
      .then(() => {
        console.log('the user signed out');
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <nav className="w-full sm:w-2/3 md:w-2/5 align-middle flex flex-row justify-between sm:justify-around gap-x-4 ">
      {user === null && (
        <>
          <Link className="font-semibold my-auto hover:text-primary-blue" to="/">
            Home
          </Link>
          <Link className="font-semibold my-auto hover:text-primary-blue" to="/learn">
            Learn
          </Link>
          <Link className="font-semibold w-2/3 md:w-1/3 my-auto" to="/login">
            <button className="btn-outline w-full">Login</button>
          </Link>
        </>
      )}
      {!(user === null) && (
        <>
          <Link className="font-semibold my-auto hover:text-primary-blue" to="/">
            Home
          </Link>
          <Link className="font-semibold my-auto hover:text-primary-blue" to="/learn">
            Learn
          </Link>
          <Link className="font-semibold my-auto hover:text-primary-blue" to="/admin">
            Admin
          </Link>
          <Link className="font-semibold w-2/3 md:w-1/3 my-auto" to="/login">
            <button className="btn-warning w-full" onClick={logoutClick}>
              Logout
            </button>
          </Link>
        </>
      )}
    </nav>
  );
}
