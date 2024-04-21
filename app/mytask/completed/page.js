import Sidebar from "../../components/Sidebar/Sidebar"
import ListOfCompleted from "../../components/ListOfCompleted"


export default   function completedPage() {   
    return (
      <div className="flex flex-col ">

         <div className="flex">
      <Sidebar/>
        <div className="w-full">
      <ListOfCompleted  />
      </div>
      </div>
      </div>
    )
  }

