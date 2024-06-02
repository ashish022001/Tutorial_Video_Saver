import { useContext } from "react"
import ContextUser from "./ContextUser"

const ContextHome = (UserDetailsContext) =>
    {
        const context = useContext(UserDetailsContext)
        return(
            <div>
                <h1>Home Component - {context.username}</h1>
                <ContextUser/>
            </div>
        )
    }
    export default ContextHome