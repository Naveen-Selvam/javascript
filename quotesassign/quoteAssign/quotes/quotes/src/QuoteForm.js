import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const QuoteForm = (props) => {
    const {handleSave , id : slno , title : quoteTitle , body : quoteBody} = props
    const [title, setTitle] = useState(quoteTitle ? quoteTitle : '')
    const [body, setBody  ] = useState(quoteBody  ? quoteBody :  '')
    const [id  , setId    ] = useState(slno ? slno : uuidv4())
   

    const handleAuthor = (e) => {
        setTitle(e.target.value)
    }
    const handleBody = (e) => {
        setBody(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            id   : id,
            title: title,
            body: body
        }
        handleSave(data)
        setId(uuidv4())
        setBody('')
        setTitle('')

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={title} onChange={handleAuthor} placeholder='Author' /><br />
                <textarea value={body} onChange={handleBody} placeholder='Quote'></textarea><br />
                <input type='submit' value='save' />
            </form>
        </div>
    )
}

export default QuoteForm