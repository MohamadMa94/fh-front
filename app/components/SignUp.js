"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState(0);
  const [name, setName] = useState('');
  const router = useRouter();
  const [passwordError, setPasswordError] = useState('');
  const [usernameError, setUsernameError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for password length
/*     if (password.length < 8) {
      setPasswordError('Passwords must be at least 8 characters long');
      return;
    } */

    // Check for username length
/*     if (name.length < 4 || name.length > 20) {
      setUsernameError('Usernames must be between 4 and 20 characters long.');
      return;
    } */

    let url = 'https://localhost:7181/api/Account/register';
    const user = {
      name: name,
      email: email,
      password: password,
      age: age,
    };

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Email already exists');
        }
        return response.json();
      })
      .then((data) => {
        if (!data) {
          throw new Error('Empty JSON response');
        }
        alert('User successfully created');
        router.push('/login');
      })
      .catch((error) => {
        alert('Error: ' + error);
      });
  };

  return (
    <div className="h-screen md:flex">
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-gray-300 to-indigo-1100 i justify-around items-center hidden">
        <div>
          <h1 className="text-white font-bold text-8xl font-sans"> Family Hub </h1>
          <p className="text-white text-4xl mt-1">Family FOR ALLE</p>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form onSubmit={handleSubmit} className="bg-white">
          <h1 className="text-gray-800 font-bold text-4xl mb-1">Hello !</h1>
          <p className="text-xl font-normal text-gray-600 mb-7">Welcome </p>
          <div className="flex items-center border-4 py-2 px-6 rounded-2xl mb-4">
            <input
              className="pl-2 outline-none border-none"
              type="text"
              required
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {usernameError && <p className="text-red-500 text-sm mb-4">{usernameError}</p>}
          <div className="flex items-center border-4 py-2 px-6 rounded-2xl mb-4">
            <input
              className="pl-2 outline-none border-none"
              type="text"
              required
              placeholder="Email Address "
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center border-4 py-2 px-6 rounded-2xl mb-4">
            <input
              className="pl-2 outline-none border-none"
              type="text"
              required
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="flex items-center border-4 py-2 px-6 rounded-2xl mb-4">
            <input
              className="pl-2 outline-none border-none"
              type="Password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
          <button
            type="submit"
            className="block w-full text-gray-500 border-4 border-red-300 mt-4 py-2 rounded-xl font-semibold mb-2 hover:bg-red-600 hover:text-white"
          >
            Sign Up
          </button>
          <Link
            href={'/login'}
            className="block w-full text-gray-500 border-4 items-center text-center border-blue-300 mt-4 py-2 rounded-xl hover:bg-blue-300 hover:text-white font-semibold mb-2"
          >
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
