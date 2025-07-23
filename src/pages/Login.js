import { Link } from "react-router";
import { useAuth } from "../context/AuthProvider";


export function Login() {

    const { isAuthenticated, logIn } = useAuth();

    return (
        <div className="h-screen bg-black flex flex-col justify-center mx-auto">
            <header className="mx-auto text-center" >
                <h1 className="text-4xl text-white font-semibold">Go Auth + React</h1>
                <p className="text-slate-400 max-w-sm mt-2">This is an example application that interacts with Open Authorization workflows managed by a dedicated Go server.</p>

                { !isAuthenticated ?
                <button className="mt-8 border-1 border-slate-400 px-2 py-1 rounded-sm hover:cursor-pointer hover:bg-slate-800" >
                    <p className="dark:text-white text-base font-medium" onClick={logIn}>Log In</p>
                </button>
                :
                <button  className="mt-8 border-1 border-slate-400 px-2 py-1 rounded-sm hover:cursor-pointer hover:bg-slate-800" >
                    <Link to="/dashboard" className="dark:text-white text-base font-medium">Dashboard</Link>
                </button>
                }
            </header>
        </div>
    )
}