import ListofMyTask from "../components/ListofMyTask"
import Sidebar from "../components/Sidebar/Sidebar"
import Header from "../components/Header"

export default   function MytaskPage() {   
    return (
      <div className="flex flex-col ">
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

