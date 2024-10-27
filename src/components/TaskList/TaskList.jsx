import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";


function TaskList({data}){
    console.log(data)
    return (
        <div id="tasklist" className="mt-10 py-5 flex-nowrap gap-5 h-[55%] flex overflow-x-auto itenm-center justify-start w-full">
            {data.tasks.map((e,idx)=>{
                if(e.active){
                    return <AcceptTask key={idx}/>
                } if(e.newTask){
                    return <NewTask key={idx}/>
                } if(e.completed){
                    return <CompleteTask key={idx}/>
                }if(e.failed){
                    return <FailedTask key={idx}/>
                }
            })}
        </div>
    )
}

export default TaskList;