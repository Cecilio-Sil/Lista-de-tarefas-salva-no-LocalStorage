import { useGlobalContext } from "../../context/GlobalContext";
import "./Filters.css";



export default function Filters() {

  const { 
    tasks, 
    handleSetFilter,
    handleUncheckAllCompletedtasks,
  } = useGlobalContext();
  const pendingTasksQtd = tasks.filter((task) => !task.done).length;


  return (
    <li className='content-tasks-actions'>
      <div>
        <a href="#">{pendingTasksQtd} Itens restantes</a>
      </div>
      <div>
        <a href="#" onClick={() => handleSetFilter("all")}> Todas </a>
        <a href="#" onClick={() => handleSetFilter("pending")}> Ativas </a>
        <a href="#" onClick={() => handleSetFilter("done")}> Completadas </a>
      </div>
      <div>
        <a href="#" onClick={handleUncheckAllCompletedtasks}> Limpar completadas </a>
      </div>
    
    </li>
)
}