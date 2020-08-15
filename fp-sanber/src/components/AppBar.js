import React,{useContext} from "react"
import {Link,Switch,Route} from "react-router-dom"
import {UserContext} from "../context/UserContext"
import Login from '../pages/LoginPage'
import Register from '../pages/Register'

const AppBar = () => {
  const [user,] = useContext(UserContext);
  return(
    <>
    <header>
        <div className="logo">
          <a>
            <Link to="/home">
            FinalProject!
            </Link>
          </a>
          </div>
          <nav>
            <ul>
              <li>
                <a>
                  <Link to="/signIn">
                  Sign In
                  </Link>
                </a>
              </li>
              <li>
                <a>
                <Link to="/signUp">
                  Sign Up
                  </Link>
                </a>
              </li>
            </ul>
          </nav>
    </header>
    <Switch>
        <Route path="/signIn" component={Login}/>
        <Route path="/signUp" component={Register}/>
        <Route path='/' />
        {/* <Route path="/login" component={LoginPage}/> */}
        </Switch>
    </>
  )
}

export default AppBar;
