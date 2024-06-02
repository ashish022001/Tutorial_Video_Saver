import { useEffect } from "react"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom";
const Videos = () =>
    {
        const [cookie, setCookie,removeCookie] =useCookies();
        const navigate = useNavigate();
        function handleLogout()
        {
            removeCookie("userid");
            navigate("/login")
        }

        useEffect(()=>{
            if(cookie.userid==undefined)
                {
                    navigate("/login")
                }
        },[])
        return(
            <div>
                <h3>Videos Home :- {cookie.userid} <span><button className="btn btn-link" onClick={handleLogout}>Logout</button></span></h3>
                <div className="d-flex m-2 p-2">
                    <div className="me-2">
                    {/* <iframe src="https://www.youtube.com/embed/JYLyxpNyMmw" width="300" height="200"></iframe> */}
                    <iframe src="https://www.youtube.com/embed/5puu3kN9l7c" width="300" height="200"></iframe>

                    </div>

                    <div className="">
                    <iframe src="https://www.youtube.com/embed/paOVdYBvyRs" width="300" height="200"></iframe>
                    </div>
                </div>
            </div>
        )
    }
    export default Videos