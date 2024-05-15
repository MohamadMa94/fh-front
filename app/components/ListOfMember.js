"use client";
import { useState, useEffect } from "react";

import Link from "next/link"

export function GetUsers() {
    const [Users, setUsers] = useState(null);
    let FamilyId = localStorage.getItem("familyId");
    useEffect(() => {
      fetch("https://localhost:7181/api/Account/"+ FamilyId, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Not found users");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setUsers(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
  
    return Users;
  }
  
  export  const ListOfMember = ({  }) => {
   const  Users = GetUsers();

  return (
    <div className="bg-white">
       <div class="mx-auto mt-20 mb-4 max-w-screen-xl flex justify-between items-center bg-white">
      <div className=" flex justify-items-start ">
      <h1 class=" text-2xl mr-4 font-bold text-gray-900"> Members</h1>   
      </div>
      <div>
         <Link href={"/member/addmember"}>  
          <button className=" border-4 px-4 py-2 font-semibold hover:bg-gray-600 border-gray-600  hover:shadow-2xl rounded-lg text-indigo-950 hover:text-white  ">
           Create new member
          </button>
        </Link>
      </div>
     </div>
    <div class="w-screen bg-white">
      <div class="mx-auto max-w-screen-xl px-2 py-10">
        
    
        <div class="mt-6 overflow-hidden rounded-xl border-4  bg-white px-6 shadow lg:px-4">
        <div   class="items-center justify-center flex py-8 ">


          <table class="min-w-full border-collapse border-spacing-y-2 border-spacing-x-2">
            <thead class=" hidden border-b lg:table-header-group">
              <tr class="">
                <td class="whitespace-normal py-4 text-sm font-semibold text-gray-800 sm:px-3">Name </td>
    
                <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Email</td>
                <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3"> Age </td>     

              </tr>
            </thead>
            <tbody class="bg-white  lg:border-gray-300">
            {Users && Users.map((user) => ( 
              <tr key={user.id}>
                <td class="whitespace-no-wrap py-4 text-left text-sm text-gray-600 sm:px-3 lg:text-left">
                {user.name}                    
                </td>    
                <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">{user.email}  </td>   
                <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">{user.age}  </td>   

             

      </tr>
                 ))}  


            </tbody>
        
          </table>
     
        </div>
      </div>
    </div>
    </div>
    </div>
    

);
};

export default ListOfMember
;
