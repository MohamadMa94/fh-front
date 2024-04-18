"use client";
import React, { useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";

export function GetCompletedTasks() {
  const [tasks, setTasks] = useState([]);
 
  useEffect(() => {
    fetch("https://localhost:7181/api/TaskAs/UserCompletedTasks/"+ localStorage.getItem("name"), {
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

const ListOfCompleted = () => {
  const tasks = GetCompletedTasks();


  return (
    <div className="pt-8 ml-12 rounded-2xl bg-gray-300">
      <div className="flex-1 px-2 sm:px-0">
        <div className="flex justify-between items-center">
          <h3 className="text-6xl font-bold text-indigo-950">Completed tasks</h3>
       
        </div>
        <div className="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">


          {tasks.map((task) => (
            <div
              key={task.id}
              className="relative group w-full bg-gray-200 border-green-500 border-2 shadow-2xl hover:border-8 py-4 px-4 flex flex-col justify-items-start cursor-pointer rounded-3xl rond hover:smooth-hover"
            >
              <h1 className="text-2xl m-2 font-mono text-indigo-1100">
                {task.name}
              </h1>
              <h1 className="text-2xl m-2 font-mono text-indigo-1100">
                {task.userName}
              </h1>
              <span className="text-sm mb-10 ml-2 font-mono text-indigo-1100 text-balance">
                {task.description}
              </span>
              <span className="justify-end flex text-sm mr-2 font-mono text-indigo-1100 text-balance">
                {new Date(task.deadline).toLocaleDateString()}
              </span>
          
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListOfCompleted;
