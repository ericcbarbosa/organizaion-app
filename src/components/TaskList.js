import React from 'react';

import TaskItem from './TaskItem';


const TaskList = ( props ) => (
    <ul className="task-list">
        {
        props.tasks.map( 
            (task, index) => (
                <TaskItem 
                    key={ index } 
                    count={ index } 
                    task={ task } 
                    handleRemoveTask={ props.handleRemoveTask } />
            )
        )
        }
    </ul>
);

export default TaskList;