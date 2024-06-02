import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Manage= ()=>{
    const [videos, setVideos] = useState([]);

    useEffect(()=>{
        axios({
            method:'get',
            url:"http://127.0.0.1:5566/videos"
        }).then((response)=>{
            setVideos(response.data)
        })
    },[]);
    return(
        <>
        <div className="container-fluid">
         
            <h2>Manage Videos</h2>
            <div className="mb-2">
            <Link to='/addvideo' className="btn btn-info">Add New Video</Link>
           </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Preview</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        videos.map(video=>
                            <tr key={video.id}>
                                <td>{video.title}</td>
                                <td>
                                    <iframe width="200" height="150" src={video.url} frameborder="0"></iframe>
                                </td>
                                <td>
                                    <Link to={`/details/${video.id}`} className="btn btn-primary ms-2">
                                        <span className="bi bi-eye"></span> Details
                                    </Link>
                                    <Link to={`/edit/${video.id}`} className="btn btn-warning ms-2">
                                        <span className="bi bi-eye"></span> Edit
                                    </Link>
                                    <Link to={`/delete/${video.id}`} className="btn btn-danger ms-2">
                                        <span className="bi bi-trash"></span> Details
                                    </Link>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
           
        </div>
        </>
    )

}
export default Manage