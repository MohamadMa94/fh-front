import Header from "../../../components/Header"
import Sidebar from "../../../components/Sidebar/Sidebar"
import AddOption from  "../../../components/AddOption"

export default function AddoptionPage({params}){
console.log(params.pollID); 
return(
    <div className="flex flex-col ">
  
    <div className="flex">
   <div className="w-full">

<AddOption addOption={params.pollID}/>
 </div>
 </div>
 </div>
);}
