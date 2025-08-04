import type { ReactNode } from "react";
import type { FilterType } from "../types/FilterType";
import type { TaskType } from "../types/TaskType";


export interface IGlobalContextProps {
    children: ReactNode;
}


export interface IGlobalContext {
    filter: FilterType;
    tasks: TaskType[];
    input: string;
    handleSetFilter: (filter: FilterType) => void;
    handleSetTasks: (tasks: TaskType[]) => void;
    handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    handleTaskToggle: (id: string) => void;
    filteredTasks: () => TaskType[];
    handleSetInput: (value: string) => void;
    handleUncheckAllCompletedtasks: () => void;
    
}