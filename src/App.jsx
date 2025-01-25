import { useEffect, useState } from "react";
import Task from "./components/Task";
import AddTask from "./components/AddTask";

function App(){

  //LISTA DE TAREFAS
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  //LOCALSTORAGE
  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  },[tasks]);

  //LISTAR AS TAREFAS
  function onTaskClick(taskId){
    const newTasks = tasks.map((task)=>{
      if(task.id == taskId){
        //PRECISO ATUALIZAR ESSA TAREFA
        return {
          ...task, isComplete: !task.isComplete
        }
      }else{
        //NÃO PRECISO ATUALIZAR ESSA TAREFA
        return task
      }
    })

    setTasks(newTasks)
  }

  //DELETAR TAREFA
  function deleteTask(taskId){
    const newTasks = tasks.filter((element)=>{
      if(element.id != taskId){
        return true;
      }
    })
    setTasks(newTasks)
  }

  //ADICIONAR NOVA TAREFA
  function addNewTask(title,description){
    if(title && description){
      const newTask = {
        id: tasks.length + 1,
        title,
        description,
        isComplete: false  
      }
      setTasks([...tasks , newTask]);
      console.log(tasks)
  }
  }

  //CORPO DA PAGINA
  return(
    <div className="w-screen min-h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl font-bold text-slate-100 text-center">Gerenciador de Tarefas</h1>
        <AddTask addNewTask={addNewTask}/>
        <Task  task={tasks} onTaskClick={onTaskClick} deleteTask={deleteTask}/>
      </div>
    </div>
    
  )
}

export default App;