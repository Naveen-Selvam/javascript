import React,{useState} from 'react'
import axios from 'axios'
import EditItem from './EditItem'


const TaskItem = (props)=>{
const {item, removeItem} = props

const [toggle,setToggle] = useState(false) 
  
const handleremove = (id)=>{
   
   const result = window.confirm('Are you sure')
   if(result){
     axios.delete(`http://localhost:3033/api/tasks/${id}`)
     .then((response)=>{
         removeItem(response.data.id)
     })
     .catch((err)=>{
       alert(err.message)
     })
   }
}
const handleEdit = ()=>{
  setToggle(!toggle)
}
return (
  <div>
  {toggle 
  ?
  <div>
  <EditItem id={item.id}  title={item.title} status={item.status}/> 
  <button onClick={handleEdit}>cancel</button>
 </div>

  :

  <div>
  <h5>{item.title}</h5>
  <button onClick={()=>handleremove(item.id)}>Remove</button>
  <button onClick={handleEdit}>Edit</button>
  </div>
}    
    </div>
)
}

export default TaskItem