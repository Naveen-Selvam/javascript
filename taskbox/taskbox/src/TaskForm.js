import React,{useState,useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid'

const TaskForm = (props)=>{
    const {handleFormSubmit,isSaved,handleToggle, id:slno , title : taskTitle  , status:taskSatus} = props
    const [id,setId] = useState(slno ? slno : uuidv4())
    const[title ,setTitle] = useState(taskTitle ? taskTitle : '')
    const [status,setStatus] = useState(taskSatus ? taskSatus : false)

    const handelTitle = (e)=>{
     setTitle (e.target.value)
    }
    const handleCheckbox = ()=>{
        setStatus(!status)
    }
    useEffect(()=>{
        if(isSaved){
            setStatus(false)
            setTitle('')
            setId(uuidv4())
            handleToggle()
        }
        

    },[isSaved])
    const handleSubmit= (e)=>{
        e.preventDefault()
        const formData ={
            id : id ,
            title : title ,
            status : status
        }
        handleFormSubmit(formData);
        
        
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type='text' value={title} onChange={handelTitle} placeholder='Title'/>< br />
                <input type='checkbox' checked={status} onChange={handleCheckbox} />Completed < br />
                <input type='submit' value='save' />
            </form>

        </div>
    )
}

export default TaskForm