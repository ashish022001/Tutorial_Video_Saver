import {  Link, Route, Routes, BrowserRouter } from "react-router-dom"

import Home from "./Home"
import Register from "./Register"
import Login from "./Login"
import Videos from "./Video"
import Error from "./Error"
import Manage from "./Manage"
import VideoDetails from "./VideoDetails"
import AddVideos from "./AddVideos"
import DeleteVideo from "./DeleteVideos"
import EditVideo from "./EditVideo"
function Index() {
        return(
            <div className="container-fluid">
                <BrowserRouter>
                <header className="bg-dark text-white text-center p-1">
                    <h1>React Registration Form</h1>
                </header>
                <section className="mt-2 row">
                    <nav className="col-3">
                        <div>
                        <Link to={'/'} >Home</Link>
                        </div>
                        <div>
                        <Link to={'/register'}>Register</Link>
                        </div>
                        <div>
                            <Link to={"/login"}>Login</Link>
                        </div>
                        <div>
                            <Link to={"/videos"}>Videos</Link>
                        </div>
                        <div>
                            <Link to={"/manage"}>Manage Videos</Link>
                        </div>
                        <div>
                            <Link to={"/details"}>Videos Details</Link>
                        </div>
                    </nav>
                    <main className="col-9">
                        <Routes>
                            {/* <Route path="/" Component={home}></Route> */}
                            <Route path="/" Component={Home}></Route>
                            <Route path="/register" Component={Register}></Route>
                            <Route path="/login" Component={Login}></Route>
                            <Route path="/videos" Component={Videos}></Route>
                            <Route path='/home' Component={Home}/>
                            <Route path='/error' Component={Error}/>
                            <Route path="/manage" Component={Manage}/>
                            <Route path="/details/:id" Component={VideoDetails}/>
                            <Route path="/addvideo" Component={AddVideos}/>
                            <Route path="delete/:id" Component={DeleteVideo}/>
                            <Route path="edit/:id" Component={EditVideo}/>
                        </Routes>
                    </main>
                </section>
                </BrowserRouter>
            </div>
        )
    }
export default Index