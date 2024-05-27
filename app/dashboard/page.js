
import Sidebar from "../components/Sidebar/Sidebar"
import Header from "../components/Header"
import Dashboard from "../components/Dashboard"


export default   function MytaskPage() {   
    return (
      <div className="flex flex-col bg-white ">
      <Header/>
      <Dashboard/>

               <div className="flex">
            <Sidebar/>
              <div className="w-full ">
            </div>
            </div>
            </div>
    )
  }

