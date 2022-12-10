import React from 'react';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';

export default function LoginPage() {

  return (
    <section className="container-big h-full min-h-[calc(90vh-5rem)] flex flex-col justify-center items-center pt-4">
      <div className="w-full h-fit sm:w-2/3 md:w-1/2 py-8 px-4 sm:px-16 gap-y-8 flex flex-col items-center rounded-xl bg-primary_background-darkgray02">
        <h2 className="font-bold text-2xl">
          Log in to
          <span className="text-primary-blue"> CCPAD</span>
        </h2>
        <div className="w-full flex flex-col gap-y-4">
          <LoginInput />
          <p className="text-base text-center">Or</p>
          <Link to="/register" className="w-full">
            <button className="w-full btn-outline">Create account</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
