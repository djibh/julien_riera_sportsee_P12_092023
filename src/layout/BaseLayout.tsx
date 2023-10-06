import { Outlet } from "react-router-dom"
import Navbar from "./navbar/Navbar"
import SideMenu from "../components/reusable/SideMenu"

export default function BaseLayout() {
  return <>
            <Navbar />
            <SideMenu />
            <Outlet />
        </>
}
