import React from 'react';

const TaskItem = ({ task, handleToggleComplete, onDeleteTask }) => {
  return (
    <li>
      <input
        type='checkbox'
        checked={task.completed}
        onChange={() => handleToggleComplete(task.id)}
      />
      <span>{task.completed ? 'Completed' : task.title}</span>
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
