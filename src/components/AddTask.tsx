import { useState } from "react";

import '../styles/AddTask.css'
type AddTaskProps ={
  
    onAddTask:(text:string )=> void;
};
 export const AddTask= ({onAddTask}:AddTaskProps )=>{
const [task , setTask] = useState("");
const handleAdd = ()=>{
    if (task.trim() !==""){
       onAddTask(task);
       setTask("");
    }
};

return(
<div className="add-task-container">
    <input type="text"  value={task} onChange={(e)=> setTask(e.target.value)}
    onKeyDown={(e)=>e.key=== "Enter" && handleAdd()}
    placeholder="Enter Task"/>
    <button onClick={handleAdd}>Add Task</button>
</div>
);

 };