  import Sidebar from "../components/Sidebar/Sidebar"
import ListofPoll   from "../components/ListofPoll"
import Header from "../components/Header"
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
  
  