import React, { useState } from 'react'
import axios from 'axios'
import EditQuote from './EditQuote'

const QuoteItem = (props) => {
    const { title, id, body, removeItem,editItem } = props
    const [toggle, setToggle] = useState(false)

    const handleRemove = (id) => {
        const result = window.confirm('Are you sure')
        if (result) {
            axios.delete(`http://localhost:3033/api/tasks/${id}`)
                .then((response) => {
                    removeItem(response.data.id);

                })
                .catch((err) => {
                    alert(err.message)
                })
        }
    }

    const handleEdit = () => {
        setToggle(!toggle)
    }
   

    return (
        <div>
            {
                toggle
                    ?
                    <div>
                    <EditQuote id={id} title={title} body={body} editItem={editItem} handleEdit={handleEdit}/>
                    <button onClick={handleEdit}>cancel</button>
                    </div>
                    :
                    <div>
                        <em>{title}</em> - <em> {body} </em>
                        <button onClick={() => handleRemove(id)}>remove</button>
                        <button onClick={handleEdit}>Edit</button>
                    </div>
            }

        </div>
    )
}

export default QuoteItem