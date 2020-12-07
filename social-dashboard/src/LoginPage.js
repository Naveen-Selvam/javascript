import React, { useState } from 'react'
import axios from 'axios'

import * as EmailValidator from 'email-validator'

const LoginPage = (props) => {

    const [userEmail, setUserEmail] = useState('')
    const [error, setError] = useState('')
    const { handleData } = props

    const handleEmail = (e) => {
        setUserEmail(e.target.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if (EmailValidator.validate(userEmail)) {

            axios.get('https://jsonplaceholder.typicode.com/users')
                .then((response) => {
                    const status = response.data
                    const result = status.find((user) => {
                        return user.email === userEmail
                    })
                    if (result) {
                        props.history.push('/dashboard')
                        handleData(result)
                    }
                    else if (result === undefined) {
                        setError('Invalid Email ID')
                    }
                })
                .catch((err) => {
                    alert(err.message)
                })
        }
        else {
            setError('Sytax error')
        }

        setUserEmail('')
    }
    return (
        <div  className='text-center' style={{marginTop:'10%'}} >
            
            <h1>LogIn </h1>
            <form onSubmit={handleSubmit}>
                <input type='text' value={userEmail} onChange={handleEmail} /><br />
                <div className="font-italic" className='text-danger'>
                    {error && <span>{error}</span>}
                </div>
            </form>

        </div>
    )
}

export default LoginPage
