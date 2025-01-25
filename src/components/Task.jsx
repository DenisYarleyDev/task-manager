import { ChevronRightIcon, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Task(props){
    const navigate = useNavigate();

    function seeDetails(task){
        navigate(`/task-details?title=${task.title}&description=${task.description}`)
    }


    return (
        <div>
            {/* BODY LISTA DE TAREFAS */}
            <ul className="bg-slate-200 font-medium p-6 rounded-md shadow space-y-4">
                {props.task.map((task)=>
                    <li key={task.id} className="flex">
                        
                        <button onClick={()=>{ props.onTaskClick(task.id)}} className={`text-left bg-slate-400 text-slate-100 p-2 rounded-md w-full ${task.isComplete && "line-through"}`}>
                        {task.title}
                        </button>

                        <button onClick={()=>{
                            seeDetails(task);
                        }} className="bg-slate-400 text-slate-100 p-2 rounded-md ml-2">
                            <ChevronRightIcon />
                        </button>

                        <button onClick={()=>{props.deleteTask(task.id)}} className="bg-slate-400 text-slate-100 p-2 rounded-md ml-2">
                            <Trash />
                        </button>
                        
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Task;