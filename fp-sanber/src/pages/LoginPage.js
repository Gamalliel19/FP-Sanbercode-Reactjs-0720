import React, {useState} from "react"
import {Link,Switch,Route} from "react-router-dom"
import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'

const LoginPage = () => {
    const [login,setLogin]=useState(null)
    return(
        <>
        <section>
            <div className="card-login">
                <h1>Sign In</h1>
                <form>
                    <label>Username</label>
                    <input />
                    <br/>
                    <label>Password</label>
                    <input type="password"/>
                    <br/>
                    <a><Link to="/dashboard">Submit</Link></a>
                </form>
            </div>
        </section>
        <Switch>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/home" component={Home}/>
        <Route path="/" />
        {/* <Route path="/login" component={LoginPage}/> */}
        </Switch>
        </>
    )
}

export default LoginPage;