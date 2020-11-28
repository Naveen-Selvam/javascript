import React from 'react'
import TaskItem from './TaskItem'


const TaskList = (props) => {
    const {task, removeItem} = props


    return (
        <div>
            {task.length === 0
                ?
                <div>
                    <h3>Add your 1st</h3>
                    <h4>No Task Found</h4>
                </div>
                :
                <div>
                    <h3>My Task - {task.length}</h3>
                    {task.map((item) => {
                       return <TaskItem item={item} key={item.id} removeItem={removeItem}/>
                    })
                    }
                </div>
            }
        </div>
    )
}

export default TaskList