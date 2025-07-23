import { Link } from "react-router";
import { useAuth } from "../context/AuthProvider";

export function Dashboard() {
    const { isAuthenticated, user, logout } = useAuth();

    return (
        <div className="flex flex-col bg-black h-screen text-white p-5 text-center items-center">
            <span className="grid grid-cols-3 items-center w-full">
                <button className="col-span-1 w-fit border-1 border-slate-400 px-2 py-1 rounded-sm hover:cursor-pointer hover:bg-slate-800" >
                    <Link to="/" className="dark:text-white text-base font-medium">Home</Link>
                </button>                
                <h1 className="text-4xl font-semibold">Dashboard</h1>
            </span>

            <div className="mt-12 flex flex-col gap-4 mx-auto">
                <img
                    src={user?.picture}
                    alt="google profile"
                    width={140}
                    referrerPolicy="no-referrer"
                    className="rounded-full mx-auto"
                />
                <p className="text-grey">{user?.email}</p>

                <Link className="w-fit mx-auto mt-12 bg-slate-200 px-2 py-1 rounded-sm text-black hover:cursor-pointer" onClick={logout}>Logout</Link>
            </div>

        </div>
    )
}