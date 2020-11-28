import React from 'react' 
import QuoteForm from './QuoteForm'
import axios from 'axios'

const EditQuote = (props) =>{
    const {id,title,body,editItem,handleEdit} = props
   
    const handleSave = (item)=>{
       axios.put(`http://localhost:3033/api/tasks/${item.id}`,item)
            .then((response)=>{
                editItem(response.data)
                handleEdit()
            })
            .catch((err)=>{
                alert(err.message)
            })
    }
    
    return (
        <div>
         <QuoteForm id={id} title={title} body={body} handleSave={handleSave}/>
         
        </div>
    )
}

export default EditQuote