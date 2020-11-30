import React,{useState,useEffect} from 'react'
import UserForm from './UserForm'
import Dashboard from './Dashboard'

import axios from 'axios'

const FormContainer = (props)=>{
 const [data,setData] = useState([])
    useEffect(()=>{
        axios.get('http://dct-application-form.herokuapp.com/users/application-forms')
        .then((response)=>{
            setData(response.data)
        })
        .catch((err)=>{
            alert(err.message)
        })
    })

    const handleFormSubmit = (formData)=>{
        axios.post('http://dct-application-form.herokuapp.com/users/application-form',formData)
        .then((response)=>{
            console.log(response.data)
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
    return (
        <div>
              
              <UserForm handleFormSubmit={handleFormSubmit} />
              <Dashboard data={data}/>
        </div>
    )
}

export default FormContainer