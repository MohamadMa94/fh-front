import Header from "../components/Header"
import ListofAllTask from "../components/ListofAllTask"
import Sidebar from "../components/Sidebar/Sidebar"
import Dashboard from "../components/Dashboard"

export default   function AllTaskPage() {   
    return (
      <div className="flex flex-col bg-amber-200 ">
        <Dashboard/>

         <Header/>
         <div className="flex">
      <Sidebar/>
        <div className="w-full ">
      <ListofAllTask  />
      </div>
      </div>
      </div>
    )
  }

