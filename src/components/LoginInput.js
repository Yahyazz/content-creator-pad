import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginInput() {
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();

  function SubmitHandler(event) {
    event.preventDefault();
    const email = newEmail;
    const password = newPassword;
    
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/admin');
      })
      .catch((err) => {
        console.log(err.message);
        alert(err.message);
      })
  }

  function onEmailChange(event) {
    setNewEmail(event.target.value);
  }

  function onPasswordChange(event) {
    setNewPassword(event.target.value);
  }

  return (
    <form
      onSubmit={SubmitHandler}
      className="w-full h-auto mx-auto flex justify-center flex-col gap-y-4"
    >
      <input
        className="w-full bg-primary_background-darkgray01 px-4 py-2 rounded-md focus:outline-primary-blue"
        type="email"
        placeholder="Email"
        value={newEmail}
        onChange={onEmailChange}
        required
      />
      <input
        className="w-full bg-primary_background-darkgray01 px-4 py-2 rounded-md focus:outline-primary-blue"
        type="password"
        placeholder="Password"
        autoComplete="current-password"
        value={newPassword}
        onChange={onPasswordChange}
        required
      />
      <button className="btn-primary w-full mx-auto mt-6">Log in</button>
    </form>
  );
}
