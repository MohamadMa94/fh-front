  import Header from "../components/Header"
  import Sidebar from "../components/Sidebar/Sidebar"
import ListofPoll   from "../components/ListofPoll"
  export default function VotePage() {   
  
      return (
        <div className="flex flex-col ">
  
           <Header/>
           <div className="flex">
        <Sidebar/>
          <div className="w-full">
        <ListofPoll  />
        </div>
        </div>
        </div>
      )
    }
  
  