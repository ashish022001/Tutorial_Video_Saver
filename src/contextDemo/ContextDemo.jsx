import ContextHome from "./ContextHome"
import React from "react"
let UserDetailsContext = React.createContext(null)
const ContextDemo =() =>
    {
        return(
            <div className="container-fluid">
                <UserDetailsContext.Provider value={{username:'Ashish'}}>
                <h1>Parent Component </h1>
                <ContextHome/>
                </UserDetailsContext.Provider>
            </div>
        )
    }
export default ContextDemo