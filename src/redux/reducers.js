import { ADD_TASK, DELETE_TASK, EDIT_TASK } from './actions';

const initialState = {
    tasks: []
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            const newTask = { id: Date.now(), text: action.payload.text };
            return { ...state, tasks: [...state.tasks, newTask] };
        case DELETE_TASK:
            return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload.id) };
        case EDIT_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id ? { ...task, text: action.payload.newText } : task
                )
            };
        default:
            return state;
    }
};

export default taskReducer;
