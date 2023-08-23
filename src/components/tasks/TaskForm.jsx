import React, { useContext, useState } from 'react';
import '../CSS/taskform.css';
import '../CSS/theme.css'
import ThemeContext from '../user/ThemeContext';
import TaskItem from './TaskItem';


const TaskForm = ({ currentUser, addTask, deleteTask, completeTask, editTask }) => {
  const {theme} = useContext(ThemeContext)
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    dueDate: '',
    dueTime: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskData.title || !taskData.description || !taskData.dueDate || !taskData.dueTime) {
      alert('Please fill in all fields');
    } else {
      addTask(taskData.title, taskData.description, taskData.dueDate, taskData.dueTime);
      setTaskData({
        title: '',
        description: '',
        dueDate: '',
        dueTime: '',
      });
    }
  };

  const handleChange = (e) => {
    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={`task-form-container ${theme}`}>
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" value={taskData.title} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" value={taskData.description} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="dueDate">Due Date</label>
          <input type="date" id="dueDate" name="dueDate" value={taskData.dueDate} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="dueTime">Due Time</label>
          <input type="time" id="dueTime" name="dueTime" value={taskData.dueTime} onChange={handleChange} />
        </div>
        <button type="submit">Create Task</button>
      </form>
      <div className="task-list">
  {currentUser.tasks.length > 0 ? (
    currentUser.tasks.map((task) => (
      <TaskItem
        key={task.id}
        task={task}
        deleteTask={deleteTask}
        completeTask={completeTask}
        editTask={editTask}
      />
    ))
  ) : (
    <p>No tasks found.</p>
  )}
</div>


    </div>
  );
};

export default TaskForm;
