import React from "react";
import Header from "../other/Header";
import TaskListNum from "../other/TaskListNum";
import TaskList from "../TaskList/TaskList";

function EmployeeDashboard(){
    return (
        <div className="p-9 bg-[#1C1C1C] h-screen">
            <Header/>
            <TaskListNum/>
            <TaskList/>
        </div>
    )
}

export default EmployeeDashboard;