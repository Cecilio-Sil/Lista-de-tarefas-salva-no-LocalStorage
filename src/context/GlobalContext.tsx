import { createContext, useContext, useState } from "react";
import type { IGlobalContext, IGlobalContextProps } from "./types";
import type { FilterType } from "../types/FilterType";
import type { TaskType } from "../types/TaskType";
import { useLocalStorage } from "usehooks-ts";
import { v4 as uuidv4 } from 'uuid';



const GlobalConstext = createContext({} as IGlobalContext);

export default function GlobalConstextProvider({children,}: IGlobalContextProps) {

    const [filter, setFilter] = useState <FilterType> ('all');
    const [tasks, setTasks] = useLocalStorage<TaskType[]>("tasks-list", []);
    const [input, setInput] = useState("");
    

    function handleSetInput(value: string) {
        setInput(value);
    }

    function handleSetFilter(newFilter: FilterType){
        setFilter(newFilter)
      }
    
      function handleSetTasks(newTasks: TaskType[]) {
        setTasks(newTasks)
      }
    
      function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>){
        if(input.length && event.key === "Enter") {
          setTasks([...tasks, {id: uuidv4(), done: false, title: input}]);
          setInput("");
        }
      }
    
      function handleTaskToggle(id: string) {
        setTasks((prevState) => prevState.map((task) => task.id === id ? {...task, done: !task.done} : task));
      };
    
    
      function filteredTasks() {
        switch (filter) {
          case "all":
            return tasks;
            
          case "done":
            return tasks.filter((task) => task.done);
    
          case "pending":
            return tasks.filter((task) => !task.done);
        
          default:
            return tasks;
        }
      }

      function handleUncheckAllCompletedtasks() {
        const filteredTasks = tasks.map((task) => 
        task.done ? {...task, done: false} : task
        );

        handleSetTasks(filteredTasks);
      }



    return (
        <GlobalConstext.Provider value={{ 
            filter, 
            tasks, 
            input,
            handleSetFilter, 
            handleSetTasks,
            handleKeyDown,
            handleTaskToggle,
            filteredTasks,
            handleSetInput,
            handleUncheckAllCompletedtasks
        }}>
            {children}
        </GlobalConstext.Provider>
    )
}

export function useGlobalContext() {

    return useContext(GlobalConstext);
}