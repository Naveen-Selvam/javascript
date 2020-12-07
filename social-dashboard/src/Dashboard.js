import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Dashboard = (props) => {
    const [userPost, setUserPost] = useState([])
    const { data } = props

    const handleLogout = () => {
        localStorage.removeItem('userdata')
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${data.id}`)
            .then((response) => {
                const result = response.data
                if (result.length > 0) {
                    setUserPost(result)
                }
            })
            .catch((err) => {
                alert(err.message)
            })
    }, [data])

    return (
        <div className='card' className='border-bottom'>
          <div style={{ marginLeft: "900px" }} >  <Link to='/' ><button type="button" className="btn btn-primary" onClick={handleLogout}>Logout</button></Link> </div>
              <div className='row row-cols-md-2'>
                <div>
                    <h1>{data.name}</h1>
                    <h2>{data.email}</h2>
                    <h2>{data.phone}</h2>
                </div>

                <div >
                    <h3>{data.company && data.company.name}</h3>
                    <h3>{data.company && data.company.catchPhrase}</h3>
                </div>
                </div>
            {
                userPost.map((ele) => {
                    return (
                        <div key={ele.id}>
                           <div className='card-title'><li> <em className="font-weight-bold">{ele.title} </em> </li> </div>
                          <div className='card-body'> <p>{ele.body} </p> </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Dashboard 
