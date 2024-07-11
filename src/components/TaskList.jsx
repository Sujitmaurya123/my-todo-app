import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);

  if (!Array.isArray(tasks) || tasks.length === 0) {
    return <p>No tasks available</p>;
  }

  return (
    <ul className='item'>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
