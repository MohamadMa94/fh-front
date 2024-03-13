"use client";
import { useRouter } from 'next/navigation'
import  Link  from "next/link";

import { FaUsersLine } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";



const Header = () => {
  return (
    <header >
    <nav class="bg-gray-800 border-gray-200 px-4 lg:px-6 py-4 dark:bg-gray-800 justify-start">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-3xl">

    <a href="/" class="flex items-center"> <span class="self-center text-5xl font-bold whitespace-nowrap text-gray-100  ">Family </span> 
    <span class="self-center text-5xl font-bold whitespace-nowrap text-red-500 ">  Hub</span> 
     </a>
            
        <div class="flex items-center ml-48 lg:order-2">
                
            {(() => {
            if (!localStorage.getItem("Token")) {
              return (
                <div>   
                <Link href={"/login"} onClick={()=> { 
                   router.push('/login');      
                }}class=" bg-red-500 text-white hover:bg-yellow-400 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                  Log in
                  </Link>
                  </div>  )       
            } else {       
              return (      
              <div>      
                <Link href={"/login"} onClick={()=> { localStorage.removeItem('Token')
                  localStorage.removeItem('userId')
                  localStorage.removeItem('familyId')
                  localStorage.removeItem('UserEmail')

                  
                  router.push('/login');      
                } }  class=" text-indigo-950 border-indigo-100 font-bold border-4 hover:bg-red-600  bg-white hover:text-white focus:ring-4 focus:ring-gray-300  rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                    Log out 
                </Link>                   
              <>      
                </>
                  </div>
              )
            }
          })()}                   </div>
     
            <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        
          <li>
          <Link href={"/dashboard"}class="block py-2 flex mr-10 ml-12 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white text-2xl hover:text-yellow-500 lg:dark:hover:bg-transparent dark:border-gray-700"> 
          <MdDashboard className='mr-3 mt- text-3xl' />  Dashboard </Link>
          </li>
          <li>
          <Link href={"/member"}class="block py-2 flex mr-10 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white text-2xl hover:text-yellow-500 lg:dark:hover:bg-transparent dark:border-gray-700">        
          
             <FaUsersLine className='mr-3 mt-1 text-3xl' /> Members </Link>
          </li>
       
         
          </ul>

        </div>
        </div>


      </nav>
    </header>
  );
};

export default Header;

