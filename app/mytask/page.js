import ListofMyTask from "../components/ListofMyTask"
import Sidebar from "../components/Sidebar/Sidebar"


export default   function MytaskPage() {   
    return (
      <div className="flex flex-col ">
     
         <div className="flex">
      <Sidebar/>
      <ListofMyTask  />
      </div>
      </div>
    )
  }

