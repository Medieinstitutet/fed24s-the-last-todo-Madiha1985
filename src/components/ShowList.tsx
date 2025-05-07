import { Task } from "../models/Task"
import '../styles/ShowList.css'

type ShowListProps = {
    tasks: Task[];
    onDelete : (id:number)=>void;
    onDone: (id:number)=>void;
};
export const ShowList = ({tasks, onDelete, onDone}:ShowListProps)=>{

    return(

        <div className="show-list-container">
            <ul>
              {tasks.map((t)=>(
                <li key={t.id} style={{textDecoration:t.done? "line-through" : "none"}}
                >
                  {t.text}
                  
                <button onClick={()=>onDone(t.id)}>{t.done ? "Undo" : "Done"}</button>

                <button onClick={()=>onDelete(t.id)}>Delete</button>
                </li>
              ))}  
            </ul>
           
            </div>
    );
}