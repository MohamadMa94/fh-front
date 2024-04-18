import Header from "../../components/Header"
import Sidebar from "../../components/Sidebar/Sidebar"
import ListOfCompleted from "../../components/ListOfCompleted"
import Dashboard from "../../components/Dashboard"


export default   function completedPage() {   
    return (
      <div className="flex flex-col ">
        <Dashboard/>

         <Header/>
         <div className="flex">
      <Sidebar/>
        <div className="w-full">
      <ListOfCompleted  />
      </div>
      </div>
      </div>
    )
  }

