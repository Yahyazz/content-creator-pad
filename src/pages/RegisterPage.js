import React from 'react';
import { Link } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';

export default function RegisterPage() {

  return (
    <section className="container-big h-full min-h-[calc(90vh-5rem)] flex flex-col justify-center items-center pt-4">
      <div className="w-full h-fit sm:w-2/3 md:w-1/2 py-8 px-4 sm:px-16 gap-y-8 flex flex-col items-center rounded-xl bg-primary_background-darkgray02">
        <h2 className="font-bold text-2xl">
          Sign up to
          <span className="text-primary-blue"> CCPAD</span>
        </h2>
        <RegisterInput />
        <p className="text-base font-light ">
          Already have an account?
          <Link to="/login">
            <span className="text-primary-blue underline">
              <i> log in here</i>
            </span>
          </Link>
        </p>
      </div>
    </section>
  );
}
