import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";



function BackButton(){
    const navigate = useNavigate();

    return(
        <button onClick={()=>{
            navigate("/")
        }} className="bg-slate-100 text-slate-600 p-2 rounded-md ">
            <ChevronLeftIcon />
        </button>
    )
}

export default BackButton;

