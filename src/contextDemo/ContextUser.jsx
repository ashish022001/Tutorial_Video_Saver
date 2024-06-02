import { useContext } from "react"

const ContextUser= (UserDetailsContext) =>
    {
        const context = useContext(UserDetailsContext)

        return(
            <div>
                <h1>User Component - {context.username}</h1>
            </div>
        )
    }
    export default ContextUser