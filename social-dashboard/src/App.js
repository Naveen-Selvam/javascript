import React,{useState,useEffect} from 'react'
import Dashboard from './Dashboard'
import {Route} from 'react-router-dom'
import LoginPage from './LoginPage'

 
const App = (props) => {
  const [data , setData] = useState({})

  const handleData = (userdata)=>{
    localStorage.setItem('userdata',JSON.stringify({...userdata,...{status : 'LoggedIn'}}))
    setData(userdata)
  }

  useEffect(()=>{
      const result = (JSON.parse(localStorage.getItem('userdata'))||{})
      setData(result)
  },[])

  return (
    <div>
  
        <Route
        exact 
        path='/'
        render={props => <LoginPage {...props} handleData={handleData}/> }
        />

        <Route 
        exact
        path='/dashboard'
        render={props=> <Dashboard {...props} data={data}/>}
        />
 
    </div>
  )
}

export default App
