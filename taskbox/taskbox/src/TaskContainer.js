import React,{useState,useEffect} from 'react'
import axios from 'axios'
import TaskList from './TaskList'
import AddTask from './AddTask'

const TaskContainer = (props)=>{
    const [task , setTask] = useState([])

 useEffect(()=>{
     axios.get('http://localhost:3033/api/tasks')
     .then((response)=>{
         setTask(response.data)
     })
     .catch((err)=>{
         alert(err.message)
     })
 },[])

    const addItem = (item)=>{
      setTask([...task,item])
    }

    const removeItem = (id)=>{
   const result= task.filter((item)=>{
       return item.id !== id
   })
   setTask ( result)
    }
  
    return (
        <div>
         
         <TaskList task={task} removeItem={removeItem} />
         <AddTask addItem={addItem}/>

        </div>
    )
}

export default TaskContainer 