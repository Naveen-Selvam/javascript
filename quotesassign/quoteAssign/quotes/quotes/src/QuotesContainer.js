import React, { useState , useEffect } from 'react'
import QuoteList from './QuoteList'
import AddQuote from './AddQuote'
import axios from 'axios'

const QuotesContainer = (props) => {
    const [quote, setQuote] = useState([])
 
    useEffect(()=>{
        axios.get('http://localhost:3033/api/tasks')
             .then((response)=>{
            setQuote(response.data);
        })
             .catch((err)=>{
                 alert(err.message)
             })
        
    },[])
    
    const addItem = (item)=>{
        setQuote([...quote,item])
    }

    const removeItem = (id)=>{
        const result = quote.filter((item)=>{
             return item.id !== id
        })
        setQuote(result)
    }
    const editItem = (item)=>{
     const result = quote.map((it)=>{
         if(it.id === item.id){
             return {...it,...item}
         }
         else{
             return {...it}
         }
        })
        setQuote(result)
    }

    return (
        <div>
            <QuoteList quote={quote} removeItem={removeItem} editItem={editItem}/>
            <AddQuote addItem={addItem}/>
        </div>
    )
}

export default QuotesContainer