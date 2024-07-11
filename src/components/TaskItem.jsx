import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTaskCompletion } from '../redux/actions';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const handleEditSubmit = () => {
    if (editText.trim()) {
      dispatch(editTask(task.id, editText));
      setIsEditing(false);
    }
  };

  const handleEditKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEditSubmit();
    }
  };

  const handleToggleCompletion = () => {
    dispatch(toggleTaskCompletion(task.id));
  };

  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={handleEditChange}
          onBlur={handleEditSubmit}
          onKeyPress={handleEditKeyPress}
          autoFocus
        />
      ) : (
        <span>{task.text}</span>
      )}
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={handleToggleCompletion}>
        {task.completed ? 'Unmark' : 'Complete'}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;
