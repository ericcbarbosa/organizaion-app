import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    tasks: [
      'comprar batata palha',
      'comprar sorvete',
      'ir no cinema ver star wars'
    ]
  }

  handleAddTask = (e) => {

  }

  render() {
    return (
      <div className="organizer-app">
        <Header />
        <form onSubmit={ this.handleAddTask }>
          <input type="text" placeholder="What to do?" />
          <button type="button">Add task</button>
        </form>
        <ul>
          {
            this.state.tasks.map( (task, index) => (
              <li key={ index }>{ task }</li>
            ))
          }
          <li></li>
        </ul>
      </div>
    );
  }
}

export default App;
