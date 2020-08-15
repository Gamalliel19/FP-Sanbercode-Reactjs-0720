import React, {useState} from "react"
import {Link,Switch,Route} from "react-router-dom"
import Login from '../pages/LoginPage'
import Home from '../pages/Home'

const Register = () => {
    const [login,setLogin]=useState(null)
    return(
        <>
        <section>
            <div className="card-login">
                <h1>Sign Up</h1>
                <form>
                    <label>Username</label>
                    <input />
                    <br/>
                    <label>Your Email</label>
                    <input />
                    <br/>
                    <label>Password</label>
                    <input type="password"/>
                    <br/>
                    <br/>
                    <a><Link to="/signIn">Submit</Link></a>
                </form>
            </div>
        </section>
        <Switch>
        <Route path="/signIn" component={Login}/>
        <Route path="/home" component={Home}/>
        <Route path="/" />
        {/* <Route path="/login" component={LoginPage}/> */}
        </Switch>
        </>
    )
}

export default Register;