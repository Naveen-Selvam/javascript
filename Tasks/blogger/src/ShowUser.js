import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


const ShowUser = (props) => {
    const { id } = props.match.params
    const [name, setName] = useState('')
    const [post, setPost] = useState([])


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                setName(response.data.name)
            })

        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then((response) => {
                setPost(response.data)
            })

            .catch((err) => {
                alert(err.message)
            })

    }, [])


    return (
        <div>
            <h1> USER NAME : {name}</h1>
            <h3>POSTS WRITTEN BY {name} </h3>

            {
                post.map((ele) => {
                    return <li key={ele.id}><Link to={`/posts/${ele.id}`}>{ele.title}</Link></li>
                })
            }

        </div>
    )
}
export default ShowUser