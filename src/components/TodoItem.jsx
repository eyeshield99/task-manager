// TodoItem.jsx
import React, { useState } from 'react';
import '../styles/TodoItem.css'; // Import CSS file for styling

function TodoItem({ todo, deleteTodo, toggleTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (event) => {
    setUpdatedText(event.target.value);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setUpdatedText(todo.text);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsEditing(false);
    if (!updatedText.trim()) {
      setUpdatedText(todo.text);
    } else {
      todo.text = updatedText;
    }
  };

  return (
    <li className="todo-item" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {!isEditing ? (
        <div>
          <input className="toggle" type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
          <span>{todo.text}</span>
          <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>Delete</button>
          <button className="edit-btn" onClick={handleEditClick}>Edit</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="edit-form">
          <input className="edit-input" type="text" value={updatedText} onChange={handleChange} autoFocus />
          <button className="save-btn" type="submit">Save</button>
          <button className="cancel-btn" type="button" onClick={handleCancelClick}>Cancel</button>
        </form>
      )}
    </li>
  );
}

export default TodoItem;
