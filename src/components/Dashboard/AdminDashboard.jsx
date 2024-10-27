import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

export default function AdminDashboard({data,handleLogout}){
    return (
        <div className="h-screen w-full p-10">
            <Header data={data} handleLogout={handleLogout}/>
            <CreateTask/>
            <AllTask/>
        </div>
    )
}