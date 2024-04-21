import ListofAllTask from "../components/ListofAllTask"
import Sidebar from "../components/Sidebar/Sidebar"

export default   function AllTaskPage() {   
    return (
      <div className="flex flex-col bg-white ">

         <div className="flex">
      <Sidebar/>
        <div className="w-full ">
      <ListofAllTask  />
      </div>
      </div>
      </div>
    )
  }

