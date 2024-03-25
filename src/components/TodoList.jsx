// TodoList.jsx
import React from 'react';
import TodoItem from './TodoItem';
import '../styles/TodoList.css'; // Import CSS file for styling

function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
}

export default TodoList;
