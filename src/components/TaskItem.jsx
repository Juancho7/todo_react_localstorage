import React from 'react';

const TaskItem = ({ task, handleToggleComplete, onDeleteTask }) => {
  return (
    <li className='p-1 md:py-2 md:px-4 flex justify-between bg-blue-100 rounded shadow-md'>
      <div className='flex items-center md:gap-x-12'>
        <input
          type='checkbox'
          checked={task.completed}
          onChange={() => handleToggleComplete(task.id)}
          className='cursor-pointer'
        />
        <span className={task.completed ? 'line-through text-green-600' : ''}>
          {task.title}
        </span>
      </div>
      <button
        onClick={() => onDeleteTask(task.id)}
        className='p-1 text-white bg-red-700 transition-colors hover:bg-red-500 rounded'
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
