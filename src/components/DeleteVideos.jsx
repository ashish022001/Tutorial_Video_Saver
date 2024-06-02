import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";
const DeleteVideo = () =>
    {
        const [videos, setVideos] = useState([{id:0, title:'', url:'', views:0, likes:0, subscribed:false}]);
        const params = useParams();
        const navigator = useNavigate();
        useEffect(()=>{
            axios({
                method:'get',
                url:`http://127.0.0.1:5566/videos/${params.id}`
            }).then(response=>{
                setVideos(response.data);
            })
        },[])

        function handleDelete(){
            axios({
                method:"delete",
                url:`http://127.0.0.1:5566/deletevideo/${params.id}`
            })
            navigator("/manage")
        }
        return(
            <div>
                <h3>Delete Videos ? Are you sure <button onClick={handleDelete} className="btn btn-danger">Yes</button> <Link  className="btn btn-warning" to='/manage'>No</Link></h3>
                <div className="card w-50">
            <div className="card-header">
                <h3>{videos[0].title}</h3>
            </div>
            <div className="card-body">
                <iframe src={videos[0].url} width="100%" height="250" frameborder="0"></iframe>
            </div>
            <div className="card-footer">
                <span className="bi bi-eye-fill"></span> [{videos[0].views}] Views
                <span className="bi bi-hand-thumbs-up"></span> [{videos[0].likes}] Likes
            </div>
           </div>
            </div>
        )

    }
    export default DeleteVideo