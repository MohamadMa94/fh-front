import Header from "../components/Header"
import ListofMyTask from "../components/ListofMyTask"
import Sidebar from "../components/Sidebar/Sidebar"
import Dashboard from "../components/Dashboard"


export default   function MytaskPage() {   
    return (
      <div className="flex flex-col ">
        <Dashboard/>

         <Header/>
         <div className="flex">
      <Sidebar/>
        <div className="w-full">
      <ListofMyTask  />
      </div>
      </div>
      </div>
    )
  }

