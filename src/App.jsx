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
    if (taskText != '') {
      const newTask = { id: tasks.length, title, completed: false };

      setTasks([...tasks, newTask]);
      setTaskText('');
    }
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
      <header className='py-1 md:py-2 bg-blue-900'>
        <h1 className='text-lg text-center xl:pl-[295px] xl:text-xl xl:text-left font-bold text-blue-100'>
          To-Do App
        </h1>
      </header>

      <main className='px-2 sm:px-10 md:px-16 lg:px-32 xl:px-72'>
        <form
          onSubmit={handleSubmit}
          className='mt-4 md:mt-10 px-1 md:px-10 flex md:justify-center gap-x-3'
        >
          <div className='grow md:grow-0 md:w-[650px] flex items-center gap-x-3'>
            <label htmlFor='task-text' className='max-[500px]:hidden'>
              Task:
            </label>
            <input
              type='text'
              id='task-text'
              placeholder='Write the task title'
              value={taskText}
              onChange={handleChange}
              className='grow p-1 md:p-2 border-2 rounded'
            />
          </div>

          <input
            type='submit'
            value='Add'
            className='p-1 md:p-2 text-white bg-blue-700 transition-colors hover:bg-blue-500 rounded shadow-md cursor-pointer'
          />
        </form>

        {tasks.length > 0 && (
          <TaskList
            tasks={tasks}
            handleToggleComplete={handleToggleComplete}
            onDeleteTask={onDeleteTask}
          />
        )}
      </main>
    </>
  );
};

export default App;
