import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "../ActionType/TodoList"


export const addTask = (newTask) => {
    return {
type: ADD_TASK,
payload: newTask,
    }
}


export const DeleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id,
    }
}


export const DoneTask = (id) => {
    return {
        type: DONE_TASK,
        payload: id,
    }
}


export const EditTask = (id, editTask,) => {
    return {
        type: EDIT_TASK,
        payload: {id, editTask},
    }
}