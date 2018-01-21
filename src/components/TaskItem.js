import React from 'react';

const TaskItem = (props) => (
    <li key={ props.count }>
        { props.task }
        <button type="button" className="btn btn--link" onClick={ (e) => props.handleRemoveTask( props.task ) }>x</button>
    </li>
);

export default TaskItem;