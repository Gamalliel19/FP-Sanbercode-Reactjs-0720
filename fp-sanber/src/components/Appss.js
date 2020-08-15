import React from "react"
import {BrowserRouter as Router} from "react-router-dom"
import Menubar from "./AppBar"
import Sidebar from "./SideBar"
import Footer from "./Footer"

const Apps=()=>{
    return(
        <>
        <Router>
            <Menubar/>
            {/* <GamesPage/> */}
            <Sidebar/>
            <Footer/>
        </Router>
        </>
    )
}
export default Apps