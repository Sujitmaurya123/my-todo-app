import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK_COMPLETION } from './actions';

const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || []
};

const saveToLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            const newTask = { id: Date.now(), text: action.payload.text, completed: false };
            const updatedTasksAdd = [...state.tasks, newTask];
            saveToLocalStorage(updatedTasksAdd);
            return { ...state, tasks: updatedTasksAdd };
        case DELETE_TASK:
            const updatedTasksDelete = state.tasks.filter(task => task.id !== action.payload.id);
            saveToLocalStorage(updatedTasksDelete);
            return { ...state, tasks: updatedTasksDelete };
        case EDIT_TASK:
            const updatedTasksEdit = state.tasks.map(task =>
                task.id === action.payload.id ? { ...task, text: action.payload.newText } : task
            );
            saveToLocalStorage(updatedTasksEdit);
            return { ...state, tasks: updatedTasksEdit };
        case TOGGLE_TASK_COMPLETION:
            const updatedTasksToggle = state.tasks.map(task =>
                task.id === action.payload.id ? { ...task, completed: !task.completed } : task
            );
            saveToLocalStorage(updatedTasksToggle);
            return { ...state, tasks: updatedTasksToggle };
        default:
            return state;
    }
};

export default taskReducer;
