import React, { Component } from 'react';
import Task from './Task';

export default function TasksList ({tasks}) {

  let createTask = (label) => (
    <Task label={label} />
  )

  if(tasks && tasks.length > 0) {
    return <div>{tasks.map(createTask)}</div>;
  } else {
    return <div> Pas encore de tache </div>
  }

}
