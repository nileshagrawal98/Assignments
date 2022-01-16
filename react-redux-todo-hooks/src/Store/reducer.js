import { ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, EDIT_TODO_ERROR, EDIT_TODO_LOADING, EDIT_TODO_SUCCESS, GET_TODO_DETAIL_ERROR, GET_TODO_DETAIL_LOADING, GET_TODO_DETAIL_SUCCESS, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS } from './actionTypes';

const init = { todos: [], loading: false, error: false, total: 0, completed: 0 };

export const reducer = (state = init, { type, payload }) => {
    switch (type) {
        case ADD_TODO_LOADING:
            return {
                ...state, loading: true
            }
        case ADD_TODO_ERROR:
            return {
                ...state, loading: false, error: true
            }
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                todos: [...state.todos, payload],
                loading: false,
                total: state.total + 1,
            }
        case GET_TODO_LOADING:
            return {
                ...state, loading: true
            }
        case GET_TODO_ERROR:
            return {
                ...state, loading: false, error: true
            }
        case GET_TODO_SUCCESS:
            let completed = 0;
            payload.forEach(i => i.status && completed++);
            console.log(payload);
            return {
                ...state,
                todos: payload,
                loading: false,
                total: payload.length,
                completed: completed
            }
        case GET_TODO_DETAIL_LOADING:
            return {
                ...state, loading: true
            }
        case GET_TODO_DETAIL_ERROR:
            return {
                ...state, loading: false, error: true
            }
        case GET_TODO_DETAIL_SUCCESS:
            return {
                ...state,
                todos: payload,
                loading: false,
            }
        case EDIT_TODO_LOADING:
            return {
                ...state, loading: true
            }
        case EDIT_TODO_ERROR:
            return {
                ...state, loading: false, error: true
            }
        case EDIT_TODO_SUCCESS:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if(todo.id === payload.id){
                        todo.title = payload.title;
                        todo.detail = payload.detail;
                    }
                    return todo;
                }),
                loading: false
            }
        default:
            return state;
    }
}