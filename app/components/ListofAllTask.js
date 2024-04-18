"use client";
import React, { useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";

export function GetTasks() {
  const [tasks, setTasks] = useState([]);
 
  useEffect(() => {
    fetch("https://localhost:7181/api/TaskAs/AllTasks/"+ localStorage.getItem("familyId"), {
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

const ListofAllTasks = () => {
  const tasks = GetTasks();


  return (
    <div className="pt-8 ml-12 rounded-2xl  bg-bg-amber-200">
      <div className="flex-1 px-2 sm:px-0">
        <div className="flex justify-between items-center">
          <h3 className="text-6xl font-bold text-indigo-950">Family tasks</h3>
         
        </div>
        <div className="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Link
            href={"/alltask/addtask"}
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
                Create Task
              </a>
            </Link>

          {tasks.map((task) => (
            <div
              key={task.id}
              className="relative group w-full bg-indigo-100  border-8 border-indigo-1100  shadow-2xl hover:border-8 hover:border-green-500 py-4 px-4 flex flex-col justify-items-start cursor-pointer rounded-3xl rond hover:smooth-hover"
            >
              <h1 className="text-2xl m-2 font-mono text-indigo-100">
                {task.name}
              </h1>
              <h1 className="text-2xl m-2 font-mono text-indigo-100">
                {task.userName}
              </h1>
              <span className="text-sm mb-10 ml-2 font-mono text-indigo-100 text-balance">
                {task.description}
              </span>
              <span className="justify-end flex text-sm mr-2 font-mono text-indigo-100 text-balance">
                {new Date(task.deadline).toLocaleDateString()}
              </span>
           
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListofAllTasks;
