"use client"
import React from "react"
import { useState } from "react"
import {BsArrowLeftShort} from "react-icons/bs"
import { MdOutlineFamilyRestroom } from "react-icons/md";
import  Link  from "next/link";
import { GoTasklist } from "react-icons/go";
import { FaVoteYea } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiTaskFill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";

export default function Sidebar() {
const [open ,setOpen]= useState(true)
let us = localStorage.getItem("Token")
if (!us) {
       return null; // Return null if user is not logged in
     }
   
return (
       
<div className="flex mt-5 ml-5">

<div className={` bg-gradient-to-tr from-gray-300 to-gray-300i justify-aroundh-auto border-8 shadow-2xl border-indigo-950 pb-16 p-8  m-2 pt-5 rounded-3xl  ${open ? "w-96 px-16" : "w-32"}  relative`}>

<BsArrowLeftShort className={`bg-white text-gray-900 text-2xl rounded-full absolute -right-3 top-9 border border-gray-800 ${!open && "rotate-180"}  cursor-pointer`}
onClick={()=> setOpen(!open)} />

    
<div  className={` flex items-center rounded-md  `}>

{/* className={`${!open && "scale-0"}`} */}

      <ul class={` flex flex-col mt-12 `}>

    <li className="inline-flex py-10">
    <Link href={"/alltask"}>
    <BsListTask  className= {` text-4xl  rounded text-indigo-950 font-bold   cursor-pointer block float-left mr-6 duration-500 ${!open && " ml-2 rotate-[360deg]"}`}  />
           <h1 className={` font-bold   mx-20 text-indigo-1000  rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white w-full text-3xl  ${!open && "scale-0"}`} >Family tasks  </h1> </Link>
    </li> 
     <li className="inline-flex py-10">
    <Link href={"/mytask"}>
    <GoTasklist  className= {` text-4xl  rounded text-indigo-950 font-bold   cursor-pointer block float-left mr-6 duration-500 ${!open && " ml-2 rotate-[360deg]"}`}  />
           <h1 className={` font-bold  mx-20 text-indigo-1000  rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white text-3xl ${!open && "scale-0"}`}  aria-current="page"> My task </h1> </Link>
    </li>
    <li className="inline-flex py-10">
    <Link href={"/mytask/completed"}>
    <RiTaskFill    className= {` text-4xl  rounded text-indigo-950 font-bold   cursor-pointer block float-left mr-6 duration-500 ${!open && " ml-2 rotate-[360deg]"}`}  />
           <h1 className={` font-bold  mx-20 text-indigo-1000  rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white text-3xl ${!open && "scale-0"}`}  aria-current="page">Completed </h1> </Link>
    </li>
    <li className="inline-flex py-10">
    <Link href={"/poll"}>
    <FaVoteYea  className= {` text-4xl  rounded text-indigo-950 font-bold   cursor-pointer block float-left mr-6 duration-500 ${!open && " ml-2 rotate-[360deg]"}`}  />
           <h1 className={` font-bold mx-20 text-indigo-1000  rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white text-3xl ${!open && "scale-0"}`}  aria-current="page"> Voteing </h1> </Link>
    </li>
    
    <li className="inline-flex py-10">
    <Link href={"/changepassword"}>
    <RiLockPasswordFill    className= {` text-4xl  rounded text-indigo-950 font-bold   cursor-pointer block float-left mr-6 duration-500 ${!open && " ml-2 rotate-[360deg]"}`}  />
           <h1 className={` font-bold mx-16 w-60 text-indigo-1000  rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white text-2xl ${!open && "scale-0"}`}  aria-current="page"> Change password </h1> </Link>
    </li>
    <li className="inline-flex py-10">
    <Link href={"/login"} onClick={()=> { localStorage.removeItem('Token')
                  localStorage.removeItem('userId')
                  localStorage.removeItem('familyId')
                  localStorage.removeItem('UserEmail')

                  
                  router.push('/login');      
                } } > 
    <IoLogOut     className= {` text-4xl  rounded text-indigo-950 font-bold   cursor-pointer block float-left mr-6 duration-500 ${!open && " ml-3 rotate-[360deg]"}`}  />
           <h1 className={` font-bold mx-20 w-40 text-indigo-1000  rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white text-3xl ${!open && "scale-0"}`}  aria-current="page"> Log out </h1> </Link>
    </li>

</ul>

</div>


</div>




</div>



)










}

