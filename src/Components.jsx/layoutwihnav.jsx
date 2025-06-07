import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const layoutwihnav = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default layoutwihnav