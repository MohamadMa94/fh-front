"use client";
import  Link  from "next/link";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import {useState,useEffect } from "react";
import { FaUsersLine } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";

export default function Header() {

  const [hasFamily, sethasFamily] = useState(false);

  
      useEffect(() => {
        sethasFamily(window.localStorage.getItem("hasFamily"))
        
   }, []);

          if (!hasFamily) {
            return null; // Return null if user is not logged in
          }

  return (
    <div >
    <div class=" bg-indigo-950 px-4 lg:px-6 py-4 pb-3 dark:bg-gray-800 justify-start">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-3xl">


    <a href="/" class="flex items-center">
    <MdOutlineFamilyRestroom className=" text-5xl mr-4 rounded text-yellow-300 from-white to-amber-100  cursor-pointer block float-left"  />

       <span class="self-center text-5xl font-bold whitespace-nowrap text-white   ">Family </span> 
    <span class="self-center text-5xl font-bold whitespace-nowrap text-red-1100 ">  Hub</span> 
     </a>
            
        <div class="flex items-center ml-48 lg:order-2">

                         </div>
     
            <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        
          <li>
          <Link href={"/dashboard"}class="block py-2 hover:text-red-1100   font-bold flex mr-10 ml-12 pr-4 pl-3 text-white  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white text-2xl hover:text-yellow-500 lg:dark:hover:bg-transparent dark:border-gray-700"> 
          <MdDashboard className='mr-3 mt-1  font-extrabold text-3xl' /> Dashboard </Link>
          </li>
          <li>
          <Link href={"/member"}class="block py-2 font-bold hover:text-red-1100  flex mr-10 pr-4 pl-3 text-white   border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white text-2xl hover:text-yellow-500 lg:dark:hover:bg-transparent dark:border-gray-700">        
          
             <FaUsersLine className='mr-3 mt-1 text-3xl' /> Members </Link>
          </li>
       
         
          </ul>

        </div>

        </div>


      </div>
    </div>
  );
};


