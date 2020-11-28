import React,{useState} from 'react'
import axios from 'axios'
import TaskForm from './TaskForm'

const AddTask = (props)=>{
    const [isSaved,setIsSaved] = useState(false)
    const handleFormSubmit = (item)=>{
  const {addItem} = props
        axios.post('http://localhost:3033/api/tasks',item)
        .then((response)=>{
           addItem(response.data);
           setIsSaved(true)
        })
        .catch((err)=>{
            alert(err.message)
        })
 
  }
  const handleToggle = ()=>{
      setIsSaved(!isSaved)
  }
    return (
        <div>
            <p>Add the Task </p>
            <TaskForm handleFormSubmit={handleFormSubmit} handleToggle={handleToggle
            } isSaved={isSaved}/>
        </div>
    )
}
export default AddTask