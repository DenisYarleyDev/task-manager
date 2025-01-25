import { LucideTableProperties } from "lucide-react";
import { useState } from "react";
import Input from "./Input";

function AddTask(props){
    const [taskName, newTaskName] = useState();
    const [taskDescription, newTaskDescription] = useState();

    function reset(){
        newTaskName("");
        newTaskDescription("");
    }


    return(
        <div className="bg-slate-200 font-medium p-6 rounded-md shadow space-y-4 text-center">

            <Input value={taskName} onChange={(event)=>{const name = event.target.value
                newTaskName(name)
            }}>Digite o nome da tarefa</Input>

            <Input value={taskDescription} onChange={(event)=>{const description = event.target.value
                newTaskDescription(description)
            }}>Digite a descrição</Input>

            <input type="button" onClick={()=>{
                props.addNewTask(taskName,taskDescription)
                newTaskDescription("");
                newTaskName("");
                console.log(taskName)
            }} className="w-full text-center rounded-md py-2 px-4 bg-slate-500 text-slate-200" value="Adicionar" />
        </div>
    )
}

export default AddTask;