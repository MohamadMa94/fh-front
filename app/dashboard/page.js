import Sidebar from "../components/Sidebar/Sidebar"
import Header from "../components/Header"

import AuthProvider from "../components/AuthProvider,"
export default   function DashboardPage() {   
    return (
   <div>  
<div className="flex flex-col bg-gray-300 ">
         <AuthProvider/>

         <Header/>
         <div className="flex">
      <Sidebar/>
      </div>
      </div>
      </div> 
    )
  }

