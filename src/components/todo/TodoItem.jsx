import React from 'react';

export default function TodoItem({ todo }) {
  return (
    <div>
      <h3>{todo.title}</h3>
      <p>Status: {todo.completed ? 'Completed' : 'Incomplete'}</p>
      {/* Add more JSX to display additional details or actions */}
    </div>
  );
}
