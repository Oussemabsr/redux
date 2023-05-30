import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {  addTask } from '../../JS/Action/TodoList'

const AddTask = () => {
  const [text, setText] = useState("")
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(addTask({id: Math.random(), text, isDonne: false}));
      setText("")
    } else {
      alert("Oups! You cannot add an empty text!");
    }
  }
  return (
    <div>
        <h2>Add Task</h2>
        <Form onSubmit={handleAdd}>
        <Form.Control type="text" 
        placeholder="Enter task"
        value={text}
        onChange={(e)=> setText(e.target.value) } />
        <Button variant="primary" type="submit"
        onClick={handleAdd}>
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default AddTask