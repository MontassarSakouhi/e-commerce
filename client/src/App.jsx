import { useLocation } from "react-router-dom"

import { ToastContainer } from 'react-toastify';
import AppRoutes from "./components/routes/AppRoutes";
function App() {

  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (

    <div className={`${isAdminRoute ? '' : 'px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'}`} >
      <ToastContainer />
    <AppRoutes/>

    </div>
  )
}




export default App
