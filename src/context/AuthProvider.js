import { useContext, useEffect, createContext, useState } from "react";
import api from "../utils/api";


const AuthContext = createContext(undefined)


export const AuthProvider = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(Object())
  const [loading, setLoading] = useState(false);

  const getAuthStatus = async () => {

    // check local storage for token
    try {
      const response = await fetch("http://localhost:3000/user", {credentials: 'include'})
      const json = await response.json()

      console.log(response)

      if (response.status == 200) {
        console.log(json.data)
        setUser(json.data)
        setIsAuthenticated(true)
      }
      else {
        setIsAuthenticated(false)
      }
    }
    catch (error) {
      setIsAuthenticated(false)
      setUser(false)
    }
  }

  useEffect(()=> {
    getAuthStatus();
  }, [])


  const logIn = () => {
      window.location.href = `http://localhost:3000/auth/google/callback`
  };

  const logout = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth/logout" , {method: 'POST', credentials: 'include'});
      console.log(response.headers)
      if (response.status === 200) {
        setIsAuthenticated(false);
        setUser(null);
      }
    }
    catch (error) {
      console.log(error)
    }
  };

   if (loading) {
    return <p>loading...</p>;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, logIn, logout }}>
      {children}
    </AuthContext.Provider>
  );


}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (ctx === undefined) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
};