import React from 'react';
import '../styles/main.css';

import Header from './Header';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import ErrorList from './ErrorList';
import ButtonRemoveAll from './ButtonRemoveAll';

export default class OrganizerApp extends React.Component {
    state = {
        tasks: [
            'Ir no cinema',
            'Comprar sorvete',
            'Aniversário da Jucicleide'
        ],
        errors: []
    }

    cleanErrors = () => {
        this.setState((prevState) => ({
            errors: []
        }))
    }

    handleAddTask = (task) => {

        if (task === '') {
            this.cleanErrors();

            this.setState(
                (prevState) => ({
                    errors: prevState.errors.concat('Informe a valid task so we can save this to your list ;)')
                })
            );

            return false;
        }

        this.setState((prevState) => ({
            tasks: prevState.tasks.concat(task)
        }));
    }

    handleRemoveAll = (e) => {
        e.preventDefault();
        this.setState(() => ({
            tasks: []
        }));
    }

    handleRemoveTask = (taskToRemove) => {
        this.setState(
            (prevState) => ({
                tasks: prevState.tasks.filter(
                    (task) => taskToRemove !== task
                )
            })
        );
    }

    render() {
        return (
            <div className="organizer-app">

                <section className="container organizer">
                    <Header />
                    <TaskForm handleAddTask={ this.handleAddTask } />

                    <ErrorList errors={ this.state.errors } />

                    { this.state.tasks.length > 0 && <h3>Tasks:</h3> }
                    <TaskList tasks={ this.state.tasks } handleRemoveTask={ this.handleRemoveTask } />

                    {
                        this.state.tasks.length > 0 
                        && <ButtonRemoveAll handleRemoveAll={ this.handleRemoveAll }> Remove all tasks </ButtonRemoveAll>
                    }
                    
                </section>


            </div>
        );
    }
}