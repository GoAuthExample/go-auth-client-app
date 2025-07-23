import { useContext, useEffect, createContext, useState } from "react";

const AuthContext = createContext(undefined)

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(Object())
  const [loadingUser, setLoadingUser] = useState(false);


  useEffect(() => {
    getAuthStatus();
  }, [])


  const getAuthStatus = async () => {
    setLoadingUser(true)

    try {
      const response = await fetch("http://localhost:3000/user", { credentials: 'include' })
      const json = await response.json()

      if (response.status === 200) {
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
    setLoadingUser(false)
  }

  const logIn = () => {
    window.location.href = `http://localhost:3000/auth/google/callback`
  };

  const logout = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth/logout", { method: 'POST', credentials: 'include' });
      if (response.status === 200) {
        setIsAuthenticated(false);
        setUser(null);
        window.location.href="/"
      }
    }
    catch (error) {
      console.log(error)
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loadingUser, user, logIn, logout }}>
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