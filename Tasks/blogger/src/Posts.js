import React,{useState,useEffect} from 'react' 
import axios from 'axios'
import {Link} from  'react-router-dom'

const Posts = (props) =>{
    const [posts,setPosts] = useState([])
     
    useEffect(()=>{
       axios.get('https://jsonplaceholder.typicode.com/posts')
       .then((response)=>{
           setPosts(response.data)
       })
       .catch((err)=>{
           alert(err.message)
       })
    },[])
    
    return (
        <div>
        <h1>POSTS - {posts.length} </h1>
        {
            posts.map((post)=>{
            return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
            })
        }
        </div>
    )
}

export default Posts