"use client";
import React from 'react'
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'
import  Link  from "next/link";
const AddOption = ({addOption}) => {
    const [option, setOption] = useState("");

    const router = useRouter()    

    const handleForm = (e) => {
      e.preventDefault();
      const post = {
        "optionText" : option,
   
        "pollId": addOption

      };
      fetch("https://localhost:7181/CreateOptions", {
        method: "POST",
        body: JSON.stringify(post),
        headers: new Headers({
            'Authorization': 'Bearer ' + window.localStorage.getItem("token"),
            "Content-Type": "application/json",
            "Accept": "application/json"
        })
    })
    .then(response => {
        if(!response.ok){
            alert("Couldn't create option");
        }
        else{
            return  alert("option succesfully created"),             router.push("/poll");
        }
  
    }
     
  )
    
}
    return (
        <section className="bg-gray-300 dark:bg-gray-900">

          <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

             <div class="w-full bg-white rounded-3xl shadow-2xl dark:border md:mt-0 sm:max-w-md  dark:bg-gray-800 dark:border-gray-700">
               <div class="p-6 space-y-4 md:space-y-6 sm:p-8">

                <h1 class="text-xl font-bold leading-tight tracking-tight text-indigo-950 md:text-2xl dark:text-white"> Create a option  </h1>
         <form class="space-y-4 md:space-y-6" onSubmit={handleForm}>     
          <label class="block mb-2 text-lg font-semibold text-indigo-950  dark:text-white">Option </label>
          <input
            type="text"
            required
            class="bg-gray-50 border border-gray-300 text-s sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 

            value={option}
            onChange={(e) => setOption(e.target.value)}
          />
  
      
   
          
          
           
           <div className=' flex items-center justify-items-start'>
           <Link href={"/poll"} onClick={()=> { 
                } }  class="w-full mr-4 text-lg  hover:text-white text-indigo-950  border-4 border-indigo-950 font-semibold hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-primary-300  rounded-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" >
                   Cansel
                </Link>  
        
          <button className="w-full text-indigo-950 text-lg  hover:text-white hover:bg-green-500  border-4 border-indigo-950 font-semibold focus:ring-4 focus:outline-none focus:ring-primary-300  rounded-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="submit">
          Create  
          </button>
          </div>
        </form>
        </div>
      </div>
      </div>

      </section>
    );
  };
        
export default AddOption;
