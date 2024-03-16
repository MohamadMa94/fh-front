"use client";

import React, { useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";
import AddPoll from "./AddPoll";
export function PollDetails({ pollDetails }) {
  const [tasks, setTasks] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://localhost:7181/Polls/"+ pollDetails, {
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
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
<div class="flex items-center justify-center mt-60 w-full my-8">
    <div class="flex justify-center">     
    </div>  
    <div class="w-1/2 p-5 flex items-center justify-center rounded-3xl border-4 border-indigo-950  bg-white">
        <div>
        <p class="font-semibold p-2 text-indigo-950 text-2xl"> {tasks.title} </p>

        <Link href={"/poll/addoption"} onClick={()=> { 
                } }  class="w-full  text-lg  hover:text-white text-indigo-950  border-4 border-indigo-950 font-semibold hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-primary-300  rounded-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" >
                   Add option
                </Link>  
    </div>


    </div>
  </div>
  
  );
}

export default PollDetails;
