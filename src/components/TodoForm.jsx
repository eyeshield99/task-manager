// TodoForm.jsx
import React, { useState } from 'react';
import '../styles/TodoForm.css'; // Import CSS file for styling

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Add Todo"
        className="todo-input"
      />
      <button type="submit" className="add-btn">Add</button>
    </form>
  );
}

export default TodoForm;
