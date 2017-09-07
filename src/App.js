import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {id:1, name: '1', isComplete: true},
        {id:2, name: '2', isComplete: false},
        {id:3, name: '3', isComplete: false}
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          <form>
            <input type="text" />
          </form>
        </div>
        <div className="Todo-List">
          <ul>
            {
              this.state.todos.map(todo => 
                <li key={todo.id}>
                  <input type="checkbox" defaultChecked={todo.isComplete}/> {todo.name}
                </li>)
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
