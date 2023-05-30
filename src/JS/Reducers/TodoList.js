// 1 import


import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "../ActionType/TodoList";



// 2 InitialState
const InitialState = {
    ListTask : [
        {id: Math.random(), text:"Task1", isDonne:false, },
        {id: Math.random(), text:"Task2", isDonne:false, },
    ],
}


// 3 pure funtion
const listReducers = (state=InitialState, {type, payload}) => {
    switch (type) {
        case ADD_TASK:
            return {...state, ListTask: [...state.ListTask, payload] };
        case DELETE_TASK:
            return {
                ...state,
                ListTask: state.ListTask.filter((el)=> el.id !== payload ),
            };
        case DONE_TASK: 
        return {...state,
                ListTask: state.ListTask.map((el)=> el.id===payload ? {...el, isDonne:! el.isDonne} : el),
        };
        case EDIT_TASK:
            return {
                ...state,
                ListTask: state.ListTask.map((el) => el.id === payload.id ? {...el, text: payload.editTask } : el),
            };

        default:
            return state;
    }
}

export default listReducers;