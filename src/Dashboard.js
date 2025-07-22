import { useNavigate } from "react-router";
import { useAuth } from "./context/AuthProvider";
import { useEffect } from "react";

export function Dashboard() {
    const { isAuthenticated, user, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/");
        }
    }, [isAuthenticated, navigate]);


    return (
        <div className="flex flex-col bg-black h-screen text-white p-5 text-center items-center">
            <h1 className="text-4xl font-semibold">Dashboard</h1>

            <div className="mt-12 flex flex-col gap-4 mx-auto">
                <img 
                    src={user?.picture} 
                    alt="google profile" 
                    width={200}  
                    referrerPolicy="no-referrer"
                    className="rounded-full mx-auto"
                />                
                <p className="text-grey">{user?.email}</p>

                <button className="w-fit mx-auto mt-12 bg-slate-200 px-2 py-1 rounded-sm text-black hover:cursor-pointer" onClick={logout}>Logout</button>
            </div>
      
        </div>
    )
}