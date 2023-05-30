import React from 'react'
import { useDispatch } from 'react-redux'
import { DeleteTask, DoneTask } from '../../JS/Action/TodoList';
import './Task.css'
import Edit from '../Edit/Edit';

const Task = ({task}) => {
  const dispatch= useDispatch();

  return (
    <div>
        <span className={task.isDone ? "Done" : null} >{task.text}</span>
        <Edit task={task} />
        <button onClick={()=> dispatch(DeleteTask(task.id))} >Delete</button>
        <button onClick={()=> dispatch(DoneTask(task.id))} >{task.isDone ? "Undone" : "Done"}</button>
    </div>
  )
}

export default Task