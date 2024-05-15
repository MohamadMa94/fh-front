"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import  Link  from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
 const router = useRouter()
  var HasFamily 
  function  SetUser () {
    fetch("https://localhost:7181/api/Account",
     {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Not Found");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        data.forEach((user) => {
          if (user.email === localStorage.getItem("UserEmail")) {
            localStorage.setItem("userId", user.id);
            localStorage.setItem("familyId", user.familyId);
            localStorage.setItem("name", user.name);
            localStorage.setItem("hasFamily", user.hasFamily);

            HasFamily=user.hasFamily
                             if( !HasFamily){
                  console.log(HasFamily);
               //   localStorage.setItem("hasFamily", false);

                 router.push('/addfamliy')


                 } 
                 else{
                  console.log(HasFamily);
 router.push('/dashboard')

                 }
          }
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let url = "https://localhost:7181/api/Account/login";
    let user = {
      email: email,
      password: Password,
    };
    fetch(url, {
      method: "POST",
      body: JSON.stringify(user),
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
    })
      .then((response) => {
        if (!response.ok) {
          alert("Wrong login");
        } else {
          return response.json();
        }
      })
      .then(
        (result) => {
          console.log("result", result);
          if (result !== undefined) {
            if (
              result === "Wrong Password" ||
              result === "Invalid Username or Email"
            ) {
              alert("Wrong login");
            } else {
              let token = result;
              alert("login successful");
              localStorage.setItem("token", token.jwt);
              localStorage.setItem("UserEmail", email);

              SetUser();
              router.push("/dashboard")
            }
          }
        },
        (error) => {
          alert("Error: " + error);
        }
      ); 
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
			<h1 class="text-gray-800 font-bold text-4xl mb-1">Hello Again!</h1>
			<p class="text-xl font-normal text-gray-600 mb-7">Welcome Back</p>
					<div class="flex items-center border-4 py-2 px-6 rounded-2xl mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
						<input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="email"  data-testid="email"   onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div class="flex items-center border-4 py-2 px-6 rounded-2xl mb-4">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fill-rule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clip-rule="evenodd" />
							</svg>
							<input class="pl-2 outline-none border-none"      type="Password"        required   data-testid="Password"     placeholder="Password"        value={Password}    onChange={(e) => setPassword(e.target.value)}/>
      </div>
							<button type="submit" class="block w-full text-gray-500 border-4 border-red-300 mt-4 py-2 rounded-xl font-semibold mb-2">Login</button>
              <Link  href={"/signup"} class="block w-full text-gray-500 border-4 items-center text-center border-green-300 mt-4 py-2 rounded-xl font-semibold mb-2">Sign Up</Link>

		</form>
	</div>
</div>
    )};
export default Login;
