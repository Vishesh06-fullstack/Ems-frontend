import { useAuth } from "../../context/AuthContext.jsx"
import Loading from "../components/Loading";
import Sidebar from "../components/Sidebar"
import { Navigate, Outlet } from "react-router-dom"
const Layout = () => {
  const {user , loading} = useAuth();

  if(loading){
    return <Loading/>
  }
    if(!user){

      return <Navigate to={"/Login"} />
    }
  
  return (
    <div className="flex h-screen bg-linear-to-br from-slate-50 via-white to-indigo-50/30">
      <Sidebar/>
      <main className="flex-1 overflow-y-auto">
        <div className="p-4 pt-16 sm:p-6 lg:p-8 max-w-400 mx-auto">
          <Outlet/>
        </div>
      </main>
    </div>
  )
}

export default Layout