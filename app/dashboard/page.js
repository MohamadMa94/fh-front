import Sidebar from "../components/Sidebar/Sidebar"
import Header from "../components/Header"
export default   function DashboardPage() {   
    return (
   <div>  
<div className="flex flex-col bg-gray-300 ">
         <Header/>
         <div className="flex">
      <Sidebar/>
      </div>
      </div>
      </div> 
    )
  }

