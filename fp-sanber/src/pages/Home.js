import React,{useContext, useState} from "react"
import {Link,Switch,Route} from "react-router-dom"
import {UserContext} from "../context/UserContext"
import GamePage from '../pages/GamesPage'
import Bg from '../img/bg.jpg'

const Home = () => {
    const [home,setHome]=useState(null)
    return(
        <>
        <section>
            <div className="landing">
                <h3>
                    Welcome to my final project!
                </h3>
                <h1 className="home">
                    See the greatest Games and Movies
                </h1>
                <a>
                    <Link to="/game">
                        Check it Now!
                    </Link>
                </a>
            </div>
        </section>
        <Switch>
            <Route path="/game" component={GamePage}/>
        </Switch>
        </>
    )
}

export default Home;