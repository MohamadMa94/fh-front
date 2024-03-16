import Header from "../components/Header"
import ListofMyTask from "../components/ListofMyTask"
import Sidebar from "../components/Sidebar/Sidebar"
import AuthProvider from "../components/AuthProvider,"


export default   function MytaskPage() {   
    return (
      <div className="flex flex-col ">
        <AuthProvider/>

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

