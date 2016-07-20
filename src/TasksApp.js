import React, { Component } from 'react';
import TasksList from './TasksList';

export default class TasksApp extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [], text: '' };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e)
    let nextTasks = this.state.tasks.concat(e.target[0].value);
    this.setState({tasks: nextTasks, text: ''});
  }

  onChange(e) {
    this.setState({text: e.target.value});
  }

  render() {
    return (
      <div>
        <h1>Tasks App </h1>
        
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input onChange={this.onChange.bind(this)} value={this.state.text}/>
          <button>Ajouter</button>
        </form>

        <TasksList tasks={this.state.tasks}/>
      </div>
   );
  }
}
