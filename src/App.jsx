import React, { useEffect } from "react";
import Login from "./components/Auth/Login";
import Header from "./components/other/Header";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";

export default  function App(){

useEffect(()=>{
getLocalStorage()
},[])

  return <>
  <Login/>
 <EmployeeDashboard />
 <AdminDashboard/>
  </>
}
 