"use client";
import { useRouter } from 'next/navigation'
import  Link  from "next/link";
import { useState} from "react"
const Header = () => {  
  const router = useRouter();
  const [name, setname] = useState(localStorage.getItem("FirstName"));
  const [lastname, setlastname] = useState(localStorage.getItem("LastName"));
  return (
    <header >
    <nav class=" bg-gray-300 border-gray-200 px-4 lg:px-6 py-5 dark:bg-gray-800 justify-start  ">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-3xl">

        <a href="/" class="flex items-center">
                    <span class="self-center text-4xl font-bold whitespace-nowrap text-gray-900 mr-2 ">Family </span>
                    <span class="self-center text-4xl font-bold whitespace-nowrap text-red-500 ">  Hub</span>
        </a>            
            <div class="flex items-center lg:order-2">      
            <span class="self-center ml-5 text-3xl font-mono whitespace-nowrap mr-16 text-indigo-950 "> {name}   {lastname}</span>
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
                  localStorage.removeItem('accountType')
                  localStorage.removeItem('UserEmail')
                  router.push('/login');      
                } }  class=" text-indigo-950 border-indigo-950  border-4 hover:bg-red-600  hover:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                    Log out 
                </Link>                   
              <>      
                </>
                  </div>
              )
            }
          })()}            
                </div>    
            </div>
      </nav>
    </header>
  );
};

export default Header;
