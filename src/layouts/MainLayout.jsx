import { Outlet } from "react-router-dom"
import Navebar from "../components/Navebar"

const MainLayout = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64 '>
       <Navebar/>
       <Outlet/>

    </div>
  )
}

export default MainLayout