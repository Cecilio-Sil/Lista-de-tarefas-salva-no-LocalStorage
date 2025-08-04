import { useGlobalContext } from "../../context/GlobalContext";
import type { TaskType } from "../../types/TaskType";
import "./Task.css"


interface ITaskProps {
    task: TaskType;
}

export default function Task({ task }: ITaskProps) {
    const { handleTaskToggle } = useGlobalContext();
    const { done, title, id } = task;

    return (
        <li className={`task-item ${done ? "task-item-done" : ""}`}>
            <input 
                type="checkbox" 
                checked={done} 
                onChange={() => handleTaskToggle(id)} 
            />
            {title}
        </li>
    );
}