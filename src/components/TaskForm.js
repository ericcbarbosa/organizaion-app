import React from 'react';

export default class TaskForm extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();

        let task = e.target.task;

        this.props.handleAddTask( task.value.trim() );

        task.value = '';
        task.focus();
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit } className="task-form">
                <input type="search" name="task" placeholder="What to do?" />
                <button type="submit" className="btn btn--default">Add task</button>
            </form>
        );
    }
}