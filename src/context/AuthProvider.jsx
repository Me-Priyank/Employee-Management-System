import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [userData, setUserData] = useState([]); // Initialize as empty array

  useEffect(() => {
    if (!getLocalStorage().employees) {
      setLocalStorage(); // Set initial employees and admin data if not set
    }
    const { employees } = getLocalStorage();
    setUserData(employees); // Ensure userData is set as an array
  }, []);

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider> 
  ); 
}
