import React, { useState } from 'react';
import '../CSS/taskitem.css';

const TaskItem = ({ task, deleteTask, completeTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleComplete = () => {
    completeTask(task.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const { title, description, dueDate, dueTime } = editedTask;
    editTask(task.id, title, description, dueDate, dueTime);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTask(task);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditedTask({
      ...editedTask,
      [e.target.name]: e.target.value,
    });
  };

  const renderEditForm = () => (
    <div className="form-group mb-1">
      <label htmlFor="title" className="form-label">Title</label>
      <input
        type="text"
        className="form-control form-control-sm"
        id="title"
        name="title"
        value={editedTask.title}
        onChange={handleChange}
      />
      <label htmlFor="description" className="form-label">Description</label>
      <textarea
        className="form-control form-control-sm"
        id="description"
        name="description"
        value={editedTask.description}
        onChange={handleChange}
      ></textarea>
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="dueDate" className="form-label">Due Date</label>
          <input
            type="date"
            className="form-control form-control-sm"
            id="dueDate"
            name="dueDate"
            value={editedTask.dueDate}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="dueTime" className="form-label">Due Time</label>
          <input
            type="time"
            className="form-control form-control-sm"
            id="dueTime"
            name="dueTime"
            value={editedTask.dueTime}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mt-2">
        <button className="btn btn-primary btn-sm me-2" onClick={handleSave}>
          Save
        </button>
        <button className="btn btn-secondary btn-sm" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );

  const renderTaskDetails = () => (
    <>
      <h5 className="task-title mb-3">{task.title}</h5>
      <p className="task-description mb-3">{task.description}</p>
      <p className="task-due-date mb-3">{task.dueDate}</p>
      <p className="task-due-time mb-3">{task.dueTime}</p>
      <div>
        <button className="btn btn-danger me-2" onClick={handleDelete}>
          Delete
        </button>
        <button
          className="btn btn-success me-2"
          onClick={handleComplete}
        >
          {task.completed ? 'Incomplete' : 'Complete'}
        </button>
        <button className="btn btn-primary" onClick={handleEdit}>
          Edit
        </button>
      </div>
    </>
  );

  return (
    <div className={`list-item ${task.completed ? 'completed' : ''}`}>
      <div className="list-item-content">
        {isEditing ? renderEditForm() : renderTaskDetails()}
      </div>
    </div>
  );
};

export default TaskItem;
