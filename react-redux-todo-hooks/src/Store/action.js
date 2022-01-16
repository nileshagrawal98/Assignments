import { ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, EDIT_TODO_ERROR, EDIT_TODO_LOADING, EDIT_TODO_SUCCESS, GET_TODO_DETAIL_ERROR, GET_TODO_DETAIL_LOADING, GET_TODO_DETAIL_SUCCESS, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS} from './actionTypes';

export const addTodoLoading = () => {
    return {
        type: ADD_TODO_LOADING
    }
}

export const addTodoError = (err) => {
    return {
        type: ADD_TODO_ERROR,
        payload: err
    }
}

export const addTodoSuccess = (data) => {
    return {
        type: ADD_TODO_SUCCESS,
        payload: data
    }
}

export const getTodoLoading = () => {
    return {
        type: GET_TODO_LOADING
    }
}

export const getTodoError = (err) => {
    return {
        type: GET_TODO_ERROR,
        payload: err
    }
}

export const getTodoSuccess = (data) => {
    return {
        type: GET_TODO_SUCCESS,
        payload: data
    }
}

export const getTodoDetailLoading = () => {
    return {
        type: GET_TODO_DETAIL_LOADING
    }
}

export const getTodoDetailError = (err) => {
    return {
        type: GET_TODO_DETAIL_ERROR,
        payload: err
    }
}

export const getTodoDetailSuccess = (data) => {
    return {
        type: GET_TODO_DETAIL_SUCCESS,
        payload: data
    }
}

export const editTodoLoading = () => {
    return {
        type: EDIT_TODO_LOADING
    }
}

export const editTodoError = (err) => {
    return {
        type: EDIT_TODO_ERROR,
        payload: err
    }
}

export const editTodoSuccess = (data) => {
    return {
        type: EDIT_TODO_SUCCESS,
        payload: data
    }
}