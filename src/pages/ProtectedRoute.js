import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export const ProtectedRoute = ({children}) => {
    const isAuthenticated = useAuth()
    let location = useLocation();

    if(!isAuthenticated) {
        return <Navigate to="/" state={{ from: location}} replace />
    }
 return children

};
