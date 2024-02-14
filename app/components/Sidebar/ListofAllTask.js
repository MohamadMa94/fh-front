"use client";
import { useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

import Link from "next/link"
export function GetUsers() {
   const [Users, setUsers] = useState(null);   
   useEffect(() => {
      fetch("http://localhost:4000/Task", {
        method: "GET",
        headers: {
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
          setUsers(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);  
    return Users;
  }  
  const ListofAllTask = () => {
    const Users = GetUsers();
  return (
<div class="bg-gradient-to-tr from-white to-white i justify-aroundh-auto  border-4 border-indigo-1100 pt-8 p-8 h-full rounded-2xl">
      <div class="flex-1 px-2 sm:px-0">
      <div class="flex justify-between items-center">
        <h3 class="text-6xl font-bold text-indigo-950">All Task</h3>
        <div class="inline-flex items-center space-x-2">
          <a class="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </a>
          <a class="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </a>
        </div>
      </div>
      <div class="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div class="group  border-4 bg-white border-indigo-1100 py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-3xl hover:bg-gray-900/40 hover:smooth-hover">
          <a class="bg-gray-900/70 text-white/50 group-hover:text-white group-hover:smooth-hover flex w-20 h-20 rounded-full items-center justify-center" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </a>
          <a class="text-white/50 group-hover:text-white group-hover:smooth-hover text-center" href="#">Create group</a>
        </div>

        { Users?.map((user) => (
        <div class="relative group w-full border-l-8 border-green-500  shadow-2xl py-4  px-4 flex flex-col justify-items-start cursor-pointer rounded-3xl  hover:smooth-hover">
      <h1 className="text-2xl m-2 font-mono text-indigo-950"> {user.task} </h1>
      <h1 className="text-2xl m-2 font-mono text-indigo-950"> {user.user} </h1>

      <span className="text-sm mb-10 ml-2 font-mono text-indigo-950   text-balance"> {user.note} </span>
                                                                                                                         
    <span className=" justify-end flex  text-sm mr-2 font-mono text-indigo-950   text-balance"> {user.dato}  </span>
    <div className="flex justify-between ">
      
    <button className="w-24 text-indigo-100 bg-red-700   font-medium rounded-3xl text-sm  py-3  text-center " type="submit">
          inComplete
        </button> 
            <div className="justify-end flex items-center ">
            <FaEdit className="text-3xl mr-2 text-indigo-950 justify-end"/>
        <MdDeleteForever className="text-3xl text-indigo-950 justify-end"/>



        </div>

    </div>


        </div>
    
    ))}
  
      </div>
    </div>  





{ Users?.map((user) => (
              <tr key={user.id}>
                <td class="whitespace-no-wrap py-4 text-left text-sm text-gray-600 sm:px-3 lg:text-left">
                {user.firstName} {user.lastName}                    
                </td>    
                <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell"> {user.email} </td>    
                <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell"> {user.accountType}   </td>    
                       </tr>
                 ))}
    </div>
);
};
export default ListofAllTask;
