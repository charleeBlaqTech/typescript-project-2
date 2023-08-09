import React from 'react';
import TaskObject from '../Interfaces';

interface IProps{
    task: TaskObject
}

const TodoTask = ({task}: IProps)=>{
  return (
    <div className="task-wrapper">
      <p>{task.todo}</p>
      <span>This Task will Expire in {task.expiresIn} days</span>
    </div>
  )
}

export default TodoTask