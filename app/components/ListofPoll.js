
"use client";
import React, { useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";

export function GetTasks() {
  const [tasks, setTasks] = useState([]);
 
  useEffect(() => {
    fetch("https://localhost:7181/api/Polls/AllPolls/"+ localStorage.getItem("familyId"), {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("Token"),
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
        setTasks(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return tasks;
}

const ListofPoll = () => {
  const tasks = GetTasks();


  return (
    <div className="pt-8 ml-12 rounded-2xl bg-gray-300">
      <div className="flex-1 px-2 sm:px-0">
        <div className="flex justify-between items-center">
          <h3 className="text-6xl font-bold text-indigo-950">Polls</h3>
          <div className="inline-flex items-center space-x-2">

          </div>
        </div>
        <div className="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Link
            href={"/poll/addpoll"}
            className="group border-4 bg-white border-indigo-1100 py-4 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-3xl hover:bg-gray-900/40 hover:smooth-hover"
          >
            <a
              className="bg-gray-900/70 text-white/50 group-hover:text-white group-hover:smooth-hover flex mt-10  w-20 h-20 rounded-full items-center justify-center"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </a>
            <a
              className="text-white/50 group-hover:text-white group-hover:smooth-hover text-center"
              href="#"
            >
              Create poll
            </a>
          </Link>

          {tasks.map((task) => (

            <div
              key={task.id}
              className="relative group w-full bg-gray-800 border-green-500 border-2 shadow-2xl hover:border-8 py-4 px-4 flex flex-col justify-items-start cursor-pointer rounded-3xl rond hover:smooth-hover"
            >
              <h1 className="text-2xl m-2 text-center font-mono text-white">
                {task.title}
              </h1>
        
      
              <div className=" flex py-3 ">
              <Link href={"/poll/"+task.id} onClick={()=> { 
                } }  class="w-full  text-lg  bg-white mr-4 hover:text-white text-indigo-950  border-4 border-indigo-950 font-semibold hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-primary-300  rounded-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" >
                  Vote
                </Link>  
              <Link href={"/poll/addoption/"+task.id} onClick={()=> { 
                } }  class="w-full  text-lg  bg-white  hover:text-white text-indigo-950  border-4 border-indigo-950 font-semibold hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-primary-300  rounded-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" >
                   Add option
                </Link>  
                </div>
            </div>
         

          ))}

        </div>
      </div>
    </div>
  );
};

export default ListofPoll;
