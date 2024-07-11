import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/actions';

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

  return (
    <li>
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
        <span>
          {task.text}
        </span>
      )}
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;
