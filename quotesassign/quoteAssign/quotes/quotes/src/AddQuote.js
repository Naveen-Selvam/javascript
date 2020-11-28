import React from 'react'
import QuoteForm from './QuoteForm'
import axios from 'axios'

const AddQuote = (props) => {
    const {addItem} = props

    const handleSave = (quote)=>{
     axios.post('http://localhost:3033/api/tasks',quote)
          .then((response)=>{
              addItem(response.data) 
          })  
          .catch((err)=>{
              alert(err.message)
          })
    }
    return (
        <div>
            <QuoteForm handleSave={handleSave}/>
        </div>
    )
}

export default AddQuote
