import React from "react";
import Header from "../other/Header";
import TaskListNum from "../other/TaskListNum";
import TaskList from "../TaskList/TaskList";

function EmployeeDashboard({ data, handleLogout }) {
    return (
        <div className="p-9 bg-[#1C1C1C] h-screen">
            <Header data={data} handleLogout={handleLogout} />
            <TaskListNum data={data} />
            <TaskList data={data} />
        </div>
    );
}

export default EmployeeDashboard;
