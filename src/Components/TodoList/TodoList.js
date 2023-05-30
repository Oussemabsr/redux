import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Task from '../Task/Task';

const TodoList = () => {
    const list = useSelector((state)=> state.listReducers.ListTask);
    const [statut, setStatut] = useState("All")
  return (
    <div>
      <button onClick={()=> setStatut("All")} >All</button>
      <button onClick={()=> setStatut("Done")} >Done</button>
      <button onClick={()=> setStatut("UnDone")} >UnDone</button>
        <h2>
        List Task
        {statut === "Done"
        ? list
        .filter((el) => el.isDone === true)
        .map((el) => (<Task task={el} key={el.id} />))
        : (statut === "UnDone" ?
        list
        .filter((el) => el.isDone === false)
        .map((el) => (<Task task={el} key={el.id} />))
            : list.map((el) => (<Task task={el} key={el.id} />)))
        }
        </h2>
    </div>
  )
}

export default TodoList