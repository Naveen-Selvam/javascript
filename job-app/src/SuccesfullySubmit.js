import React from 'react'
import './App.css'
import {Link } from 'react-router-dom'

function SuccesfullySubmit() {
    return (
        <div className='submit'>
            <h1>Succesfully Submited!</h1>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default SuccesfullySubmit
