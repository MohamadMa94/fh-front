import Header from "../components/Header"
import ListOfMember from "../components/ListOfMember"
export default   function DashboardPage() {   
    return (
   <div>  
<div className="flex flex-col bg-gray-300 ">
<Header/>

         <div className="flex">

         <ListOfMember/>

      </div>
      </div>
      </div> 
    )
  }

