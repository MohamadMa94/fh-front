import Header from "../components/Header"
import ListofAllTask from "../components/ListofAllTask"
import Sidebar from "../components/Sidebar/Sidebar"
import AuthProvider from "../components/AuthProvider,"

export default   function AllTaskPage() {   
    return (
      <div className="flex flex-col ">
        <AuthProvider/>

         <Header/>
         <div className="flex">
      <Sidebar/>
        <div className="w-full">
      <ListofAllTask  />
      </div>
      </div>
      </div>
    )
  }

