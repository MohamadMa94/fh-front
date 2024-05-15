import ListofAllTask from "../components/ListofAllTask"
import Sidebar from "../components/Sidebar/Sidebar"
import Header from "../components/Header"

export default   function AllTaskPage() {   
    return (
      <div className="flex flex-col bg-white ">
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

