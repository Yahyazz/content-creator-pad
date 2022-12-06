import React from 'react';
import useInput from '../hooks/useInput';

export default function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  function submitHandler(event) {
    event.preventDefault();

    register({
      name: name,
      email: email,
      password: password,
    });
  }

  return (
    <form
      onSubmit={submitHandler}
      className="w-full h-auto mx-auto flex justify-center flex-col gap-y-4"
    >
      <input
        className="w-full bg-primary_background-darkgray01 px-4 py-2 rounded-md focus:outline-primary-blue"
        type="text"
        placeholder="Name"
        value={name}
        onChange={onNameChange}
        required
      />
      <input
        className="w-full bg-primary_background-darkgray01 px-4 py-2 rounded-md focus:outline-primary-blue"
        type="email"
        placeholder="Email"
        value={email}
        onChange={onEmailChange}
        required
      />
      <input
        className="w-full bg-primary_background-darkgray01 px-4 py-2 rounded-md focus:outline-primary-blue"
        type="password"
        placeholder="Password"
        autoComplete="current-password"
        value={password}
        onChange={onPasswordChange}
        required
      />
      <button className="btn-primary w-full mx-auto mt-6">Sign up</button>
    </form>
  );
}
