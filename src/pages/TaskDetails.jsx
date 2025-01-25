import { useSearchParams } from "react-router-dom";
import BackButton from "../components/BackButton";

function TaskDetails(){

  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

    return(

        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
          <div className="w-[500px] space-y-4">
            <div className="flex flex-row gap-x-2">
            <BackButton />
            <h1 className="text-3xl font-bold text-slate-100 text-center">Detalhes da Tarefa</h1>
            </div>
            <div className="bg-slate-200 font-medium p-6 rounded-md shadow space-y-4">
                <h5 className="text-xl font-bold text-slate-600">{title}</h5>
                <p className=" font-bold text-slate-600">{description}</p>
            </div>
          </div>
        </div>
        
      )
}

export default TaskDetails;