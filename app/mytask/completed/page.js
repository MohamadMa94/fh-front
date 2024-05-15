import Sidebar from "../../components/Sidebar/Sidebar"
import ListOfCompleted from "../../components/ListOfCompleted"
import Header from "../../components/Header"

export default   function completedPage() {   
    return (
      <div className="flex flex-col ">
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

