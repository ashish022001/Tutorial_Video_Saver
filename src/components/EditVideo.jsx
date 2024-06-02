import axios from "axios";
import { useEffect, useState } from "react"
import { useFormik } from "formik"

import { Link, useNavigate, useParams } from "react-router-dom"; 
const EditVideo = () =>
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

        const formik = useFormik({
            initialValues:{
                id:videos[0].id,
                title:videos[0].title,
                url:videos[0].url,
                likes:videos[0].likes,
                views:[0].views,
                subscribed:videos[0].subscribed 
            },
            onSubmit:(values) =>{
                
            }
        })
        return(
            <div>
                <h2>Edit Video Details</h2>
                <form action="">
                <dl>
                        <dt>Videos ID</dt>
                        <dd><input type="number" name="id" value={videos[0].id} onChange={formik.handleChange} /></dd>
                        <dt>Title</dt>
                        <dd><input type="text" name="title" value={videos[0].title} onChange={formik.handleChange} /></dd>
                        <dt>URL</dt>
                        <dd><input type="text" name="url"  value={videos[0].url} onChange={formik.handleChange} /></dd>
                        <dt>Likes</dt>
                        <dd><input type="text" name="likes" value={videos[0].likes} onChange={formik.handleChange} /></dd>
                        <dt>Views</dt>
                        <dd><input type="text" name="views" value={videos[0].views} onChange={formik.handleChange} /></dd>
                        <dt>Subscribed</dt>
                        <dd className="form-switch"><input type="checkbox" className="form-check-input" name="subscribed" checked={videos[0].subscribed} onChange={formik.handleChange} /></dd>
                    </dl>
                    <button className="btn btn-success">Save</button>
                    <Link className="btn btn-warning ms-2" to={'/manage'}>Cancel</Link>
                </form>
            </div>
        )
    }
    export default EditVideo