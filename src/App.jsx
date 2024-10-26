import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

export default function App() {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);

  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  //     if (loggedInUser) {
  //       setUser(loggedInUser.role);
  //     }
  //   }
  // }, [authData]);

  function handleLogin(email, pass) {
    if (email === "admin@gmail.com" && pass === "123") {
      setUser({role:'admin'});
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const majdoor = authData.employees?.find((e) => email === e.email && pass === e.password);
      if(majdoor){
        setUser({role:employees})
      }
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee" }));
    } else {
      alert("Unauthorized Credentials");
    }
  }

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashboard />}
      {user === "employee" && <EmployeeDashboard />}
    </>
  );
}
