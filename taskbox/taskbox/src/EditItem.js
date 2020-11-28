import React from 'react'
import TaskForm from './TaskForm'


const EditItem = (props)=>{
    
  const {id,title,status} = props
  console.log(id,title,status);
  
 const handleFormSubmit = (item)=>{
      console.log(item)
 }
    return (
        <div>
        <TaskForm id={id} title={title} status={status} handleFormSubmit={handleFormSubmit}/>
        
        </div>
    )
}

export default EditItem