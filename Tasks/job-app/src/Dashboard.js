import React, { useState } from 'react'
import JobType from './JobType'

const Dashboard = (props) => {
    const { data } = props
    const [filteredData, setFilteredData] = useState([])
    const [click , setClick] = useState(false)
    const handleFrontend = () => {
        const result = data.filter((ele) => {
            return ele.jobTitle === 'Front-End Developer'
        })
        setFilteredData(result)
        setClick(!click)
    }
    const handleNodejs = () => {
        const result = data.filter((ele) => {
            return ele.jobTitle === 'Node.js Developer'
        })
        setFilteredData(result)
        setClick(!click)
    }
    const handleStack = () => {
        const result = data.filter((ele) => {
            return ele.jobTitle === 'MEAN Stack Developer'
        })
        setFilteredData(result)
        setClick(!click)
    }
    const handleFull = () => {
        const result = data.filter((ele) => {
            return ele.jobTitle === 'FULL Stack Developer'
        })
        setFilteredData(result)
        setClick(!click)
    }

    return (
        <div>
            <h1>Dashboard - {data.length}</h1>

            <button onClick={handleFrontend}>Front-End Developer</button>
            <button onClick={handleNodejs}  >Node.js Developer</button>
            <button onClick={handleStack}>MEAN Stack Developer</button>
            <button onClick={handleFull}>FULL Stack Developer</button>
             
             {click  &&  <JobType filteredData={filteredData} />}
           
        </div>
    )
}

export default Dashboard