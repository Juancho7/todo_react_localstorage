import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, handleToggleComplete, onDeleteTask }) => {
  return (
    <ul>
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
