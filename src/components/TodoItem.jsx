// TodoItem.jsx
import React, { useState } from 'react';

function TodoItem({ todo, deleteTodo, toggleTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (event) => {
    setUpdatedText(event.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (!updatedText.trim()) {
      setUpdatedText(todo.text);
    } else {
      todo.text = updatedText;
    }
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
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {!isEditing ? (
        <div onDoubleClick={handleDoubleClick}>
          <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
          <span>{todo.text}</span>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="text" value={updatedText} onChange={handleChange} onBlur={handleBlur} autoFocus />
        </form>
      )}
    </li>
  );
}

export default TodoItem;
