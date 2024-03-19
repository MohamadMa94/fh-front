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
return (
       
<div className="flex mt-5 ml-5">

<div className={`bg-gradient-to-tr from-gray-300 to-gray-300 i justify-aroundh-auto border-8 shadow-2xl border-indigo-100 pb-10 p-8  m-2 pt-16 rounded-3xl h-screen ${open ? "w-96 px-16" : "w-28"}  relative`}>

<BsArrowLeftShort className={`bg-white text-gray-900 text-2xl rounded-full absolute -right-3 top-9 border border-gray-800 ${!open && "rotate-180"}  cursor-pointer`}
onClick={()=> setOpen(!open)} />
    <div className=" flex flex-col items-center ">
      <div  className=" inline-flex "> 
      <MdOutlineFamilyRestroom className={` text-5xl rounded text-gray-800 cursor-pointer block float-left mr-4 duration-500 ${!open && " ml-64 rotate-[360deg]"} `}  />
       
        <h1 className={` text-indigo-1000 origin-left item-center  font-bold text-5xl duration-300 m-1 ${!open && "scale-0"}`}>FamilyHub</h1>
        </div>

    </div>
    
<div  className={` flex items-center rounded-md  `}>

{/* className={`${!open && "scale-0"}`} */}

      <ul class={` flex flex-col mt-12 `}>

    <li className="inline-flex py-10">
    <Link href={"/alltask"}>
    <BsListTask  className= {` text-3xl  rounded text-indigo-950 font-bold   cursor-pointer block float-left mr-6 duration-500 ${!open && " ml-2 rotate-[360deg]"}`}  />
           <h1 className={` font-bold  mx-36 text-indigo-1000  rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white w-full text-2xl  ${!open && "scale-0"}`} >Family tasks  </h1> </Link>
    </li> 
     <li className="inline-flex py-10">
    <Link href={"/mytask"}>
    <GoTasklist  className= {` text-3xl  rounded text-indigo-950 font-bold   cursor-pointer block float-left mr-6 duration-500 ${!open && " ml-2 rotate-[360deg]"}`}  />
           <h1 className={` font-bold  mx-36 text-indigo-1000  rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white text-2xl ${!open && "scale-0"}`}  aria-current="page"> My task </h1> </Link>
    </li>
    <li className="inline-flex py-10">
    <Link href={"/mytask/completed"}>
    <RiTaskFill    className= {` text-3xl  rounded text-indigo-950 font-bold   cursor-pointer block float-left mr-6 duration-500 ${!open && " ml-2 rotate-[360deg]"}`}  />
           <h1 className={` font-bold  mx-36 text-indigo-1000  rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white text-2xl ${!open && "scale-0"}`}  aria-current="page">Completed </h1> </Link>
    </li>
    <li className="inline-flex py-10">
    <Link href={"/poll"}>
    <FaVoteYea  className= {` text-3xl  rounded text-indigo-950 font-bold   cursor-pointer block float-left mr-6 duration-500 ${!open && " ml-2 rotate-[360deg]"}`}  />
           <h1 className={` font-bold mx-36 text-indigo-1000  rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white text-2xl ${!open && "scale-0"}`}  aria-current="page"> Voteing </h1> </Link>
    </li>
    
    <li className="inline-flex py-10">
    <Link href={"/dashboard/changepassword"}>
    <RiLockPasswordFill    className= {` text-3xl  rounded text-indigo-950 font-bold   cursor-pointer block float-left mr-6 duration-500 ${!open && " ml-2 rotate-[360deg]"}`}  />
           <h1 className={` font-bold mx-20 w-60 text-indigo-1000  rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white text-2xl ${!open && "scale-0"}`}  aria-current="page"> Change password </h1> </Link>
    </li>
    <li className="inline-flex py-10">
    <Link href={"/login"} onClick={()=> { localStorage.removeItem('Token')
                  localStorage.removeItem('userId')
                  localStorage.removeItem('familyId')
                  localStorage.removeItem('UserEmail')

                  
                  router.push('/login');      
                } } > 
    <IoLogOut     className= {` text-3xl  rounded text-indigo-950 font-bold   cursor-pointer block float-left mr-6 duration-500 ${!open && " ml-2 rotate-[360deg]"}`}  />
           <h1 className={` font-bold mx-36 w-40 text-indigo-1000  rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white text-2xl ${!open && "scale-0"}`}  aria-current="page"> Log out </h1> </Link>
    </li>

</ul>

</div>


</div>




</div>



)










}

