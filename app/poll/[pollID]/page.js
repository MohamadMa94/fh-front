import PollDetails from "../../components/PollDetails"
import Header from "../../components/Header"
import Sidebar from "../../components/Sidebar/Sidebar"


export default function Workpage({params}){
console.log(params.pollID); 
return(
    <div className="flex flex-col ">
  
    <Header/>
    <div className="flex">
 <Sidebar/>
   <div className="w-full">
<PollDetails pollDetails={params.pollID}/>
 </div>
 </div>
 </div>
);}
