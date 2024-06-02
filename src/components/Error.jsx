import { Link } from "react-router-dom"
const Error = () =>
    {
        return(
           <div>
            <h3>Ivalid User Id / Password</h3>
            <Link to='/login'>Try again</Link>
           </div>
        )
    }
    export default Error