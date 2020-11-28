import React from 'react'
import QuoteItem from './QuoteItem'

const QuoteList = (props) => {
    const { quote,removeItem,editItem } = props
    return (
        <div>
            {quote.length === 0
                ?
                <div>
                    <h3>Enter your 1st quote</h3>
                    <h5>No quote found</h5>
                </div>
                :
                <div>
                    <strong>Quote Length-{quote.length}</strong>
                    {
                        quote.map((item)=>{       
                            return   <QuoteItem key={item.id} editItem={editItem} removeItem={removeItem} {...item} />
                        })
                      
                    }
                </div>
            }
        </div>
    )
}

export default QuoteList