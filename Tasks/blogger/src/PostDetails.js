import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const PostDetails = (props) => {

    const [data, setData] = useState({})
    const [cmt, setCmt] = useState([])
    const [name, setName] = useState('')

    const { id } = props.match.params
   

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                setData(response.data);
            })

        axios.get(`https://jsonplaceholder.typicode.com/users/${Math.ceil(0.1*id)}`)
            .then((response) => {
                setName(response.data.name);
            })

        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then((response) => {
                setCmt(response.data)
            })

            .catch((err) => {
                alert(err.message)
            })
    }, [])



    return (
        <div>
            <h1>USER NAME : {name}</h1>
            <h2>Title: {data.title}</h2>
            <h2>Body:{data.body}</h2>
            <hr />
            <h2>COMMENTS</h2>
            {
                cmt.map((ele) => {
                    return <li key={ele.id}>{ele.body}</li>
                })
            }
            <hr />
            <Link to={`/users/${Math.ceil(0.1*id)}`}>More post of author : {name}</Link>
        </div>
    )
}
export default PostDetails