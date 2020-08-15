import React,{useContext} from "react"
import {Link,Switch,Route} from "react-router-dom"
import {UserContext} from "../context/UserContext"
import GamesPage from '../pages/GamesPage'
import MoviesPage from '../pages/MoviesPage'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'

const SideBar = () => {
    const [user,] = useContext(UserContext);

    return(
       <>
        <div className="sidenav">
            <h2>Hello There!</h2>
            <a><Link to="/home">HOME</Link></a>
            <a><Link to="/movie">MOVIES</Link></a>
            <a><Link to="/game">GAMES</Link></a>
            <a><Link to="/dashboard">DASHBOARD</Link></a>
            
        </div>
        <Switch>
        <Route path="/game" component={GamesPage}/>
        <Route path="/movie" component={MoviesPage}/>
        <Route path="/home" component={Home}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/" />
        {/* <Route path="/login" component={LoginPage}/> */}
        </Switch>
        </>
    )
    
}

export default SideBar;