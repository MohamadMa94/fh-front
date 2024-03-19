import Header from "../../components/Header"
import Sidebar from "../../components/Sidebar/Sidebar"
import AuthProvider from "../../components/AuthProvider,"
import ListOfCompleted from "../../components/ListOfCompleted"


export default   function completedPage() {   
    return (
      <div className="flex flex-col ">
        <AuthProvider/>

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

