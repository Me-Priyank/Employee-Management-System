import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

export default function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      console.log('login ho gya hai')
      setUser(storedUser.role);
      setLoggedInUserData(storedUser.data);
    }
  }, []);

  function handleLogin(email, pass) {
    if (email === "admin@gmail.com" && pass === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees?.find((e) => email === e.email && pass === e.password);
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }));
      }
    } else {
      alert("Unauthorized Credentials");
    }
  }

  function handleLogout() {
    localStorage.clear();  // Clear localStorage
    setUser(null);                            // Reset user state
    setLoggedInUserData(null);                // Reset user data
  }

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashboard data={loggedInUserData} handleLogout={handleLogout} />}
      {user === "employee" && <EmployeeDashboard data={loggedInUserData} handleLogout={handleLogout} />}
    </>
  );
}
