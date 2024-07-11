export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const TOGGLE_TASK_COMPLETION = 'TOGGLE_TASK_COMPLETION';

export const addTask = (text) => ({
    type: ADD_TASK,
    payload: { text }
});

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: { id }
});

export const editTask = (id, newText) => ({
    type: EDIT_TASK,
    payload: { id, newText }
});

export const toggleTaskCompletion = (id) => ({
    type: TOGGLE_TASK_COMPLETION,
    payload: { id }
});
