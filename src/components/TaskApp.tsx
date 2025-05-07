import { Task } from "../models/Task";
import '../styles/TaskApp.css'

import { useState } from 'react'
import { AddTask } from "./AddTask";
import { ShowList } from "./ShowList";

export const TaskApp= ()=> {
const [tasks, setTasks] = useState<Task[]>([]);
const addTask = (text:string)=>{
    const newTask:Task ={
        id:Date.now(),
        text:text.trim(),
        done:false,
      
    };
    setTasks([...tasks, newTask]);
};
const deleteTask = (id:number)=>{
    setTasks(tasks.filter((t)=>t.id !==id));
};
 
const doneTask = (id:number)=>{
    setTasks(tasks.map((t)=>t.id ===id?{...t, done: !t.done}:t));
};


  return (
    <div className="task-app-container">
        <h1>To-Do-List</h1>
      <AddTask onAddTask={addTask}/>
      <ShowList tasks={tasks} onDelete={deleteTask} onDone={doneTask}/>
    </div>
  )
}
