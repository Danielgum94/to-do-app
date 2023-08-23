import React from 'react';
import TaskForm from './TaskForm';

const TaskList = ({ currentUser, addTask, deleteTask, completeTask, editTask }) => {
  return (
    <div>
      <TaskForm
        currentUser={currentUser}
        addTask={addTask}
        deleteTask={deleteTask}
        completeTask={completeTask}
        editTask={editTask}
      />
    </div>
  );
};

export default TaskList;
