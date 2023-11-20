import { useState, useEffect } from 'react';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState(fetchTasksFromLocalStorage());

  const [taskText, setTaskText] = useState('');

  function fetchTasksFromLocalStorage() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || []);
    return storedTasks;
  }

  const saveTasksInLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const handleAddTask = (title) => {
    const newTask = { id: tasks.length, title, completed: false };

    setTasks([...tasks, newTask]);
    setTaskText('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddTask(taskText);
  };

  const handleChange = (event) => {
    const taskText = event.target.value;
    setTaskText(taskText);
  };

  const handleToggleComplete = (id) => {
    const previousTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(previousTasks);
  };

  const onDeleteTask = (id) => {
    const tasksNow = tasks.filter((task) => task.id !== id);
    setTasks(tasksNow);
  };

  useEffect(() => {
    saveTasksInLocalStorage(tasks);
  }, [tasks]);

  return (
    <>
      <h1>To-Do App</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor='task-text'>Title:</label>
        <input
          type='text'
          id='task-text'
          placeholder='Write the task title'
          value={taskText}
          onChange={handleChange}
        />

        <input type='submit' />
      </form>

      <TaskList
        tasks={tasks}
        handleToggleComplete={handleToggleComplete}
        onDeleteTask={onDeleteTask}
      />
    </>
  );
};

export default App;
