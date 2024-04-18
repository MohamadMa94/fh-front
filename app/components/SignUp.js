"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import  Link  from "next/link";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  const router = useRouter()


  const handleSubmit = (e) => {
    e.preventDefault();
    let url = "https://localhost:7181/api/Account/register";
    const user = {
        "name": name,
        "email": email,
        "password": password,
        "age": age
    };
    
    fetch(url, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
    })
    .then(response => {
        if(!response.ok){
            throw new Error("Email already exists");
        }
        return response.json();
    })
    .then(data => {
        if (!data) {
            throw new Error("Empty JSON response");
        }
        alert("User successfully created"); 
        router.push('/login');
    })
    .catch(error => {
        alert("Error: " + error);
    });
};


    return (

<div class="h-screen md:flex">
	<div
		class="relative  overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-gray-300 to-indigo-1100 i justify-around items-center hidden">
		<div>
			<h1 class="text-white font-bold text-8xl font-sans"> Family Hub </h1>
			<p class="text-white text-4xl mt-1">Family FOR ALLE</p>
		</div>
		<div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
	</div>
	<div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
		<form      onSubmit={handleSubmit} class="bg-white">
			<h1 class="text-gray-800 font-bold text-4xl mb-1">Hello !</h1>
			<p class="text-xl font-normal text-gray-600 mb-7">Welcome </p>
      <div class="flex items-center border-4 py-2 px-6 rounded-2xl mb-4">
						
							<input class="pl-2 outline-none border-none"      type="text"        required        placeholder="Name"        value={name}    onChange={(e) => setName(e.target.value)}/>
      </div>
					<div class="flex items-center border-4 py-2 px-6 rounded-2xl mb-4">
						
						<input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Email Address "     onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div class="flex items-center border-4 py-2 px-6 rounded-2xl mb-4">
							
							<input class="pl-2 outline-none border-none"      type="text"        required        placeholder="Age"        value={age}    onChange={(e) => setAge(e.target.value)}/>
      </div>
      <div class="flex items-center border-4 py-2 px-6 rounded-2xl mb-4">
							
							<input class="pl-2 outline-none border-none"      type="Password"        required        placeholder="Password"        value={password}    onChange={(e) => setPassword(e.target.value)}/>
      </div>
							<button type="submit" class="block w-full text-gray-500 border-4 border-red-300 mt-4 py-2 rounded-xl font-semibold mb-2 hover:bg-red-600 hover:text-white">Sign Up</button>
                            <Link  href={"/login"} class="block w-full text-gray-500 border-4 items-center text-center border-blue-300 mt-4 py-2 rounded-xl hover:bg-blue-300 hover:text-white font-semibold mb-2">Back</Link>

        </form>
	</div>
</div>
    )};
export default SignUp;
