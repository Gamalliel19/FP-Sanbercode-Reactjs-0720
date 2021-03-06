import React, {useState, createContext} from "react"
export const UserContext = createContext();
export const UserProvider = (props)=>{
    const currentUser = JSON.parse(localStorage.getItem("user"))
    const initUser = currentUser? currentUser:null;
    const [user,setUser]=useState(initUser);
    return(
        <UserContext.Provider value={[user,setUser]}>
            {props.children}
        </UserContext.Provider>
    )
}
export default UserContext;