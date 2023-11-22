import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, handleToggleComplete, onDeleteTask }) => {
  return (
    <ul className='mt-5 md:py-7 md:p-10 md:mt-10 flex flex-col gap-y-2 md:gap-y-5 bg-blue-50 rounded shadow-md'>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          handleToggleComplete={handleToggleComplete}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
