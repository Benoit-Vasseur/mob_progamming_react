import React from 'react';
import Todo from './Todo';
import Timer from './Timer';

export default function Task({label}) {
  return (
    <div>
      <Todo label={label}/>
      <Timer />
    </div>
  )
}
