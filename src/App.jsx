// App.jsx
import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  // Load todos from local storage on component mount
  useEffect(() => {
    try {
      const storedTodos = localStorage.getItem('todos');
      console.log('Stored todos:', storedTodos);
      setTodos(storedTodos ? JSON.parse(storedTodos) : []);
    } catch (error) {
      console.error('Error loading todos from local storage:', error);
    }
  }, []);

  // Save todos to local storage when todos state changes
  useEffect(() => {
    try {
      localStorage.setItem('todos', JSON.stringify(todos));
      console.log('Current todos:', todos);
    } catch (error) {
      console.error('Error saving todos to local storage:', error);
    }
  }, [todos]);

  // Save todos to local storage when the browser is closed or refreshed
  useEffect(() => {
    const handleBeforeUnload = () => {
      try {
        localStorage.setItem('todos', JSON.stringify(todos));
      } catch (error) {
        console.error('Error saving todos to local storage:', error);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [todos]);

  const addTodo = (text) => {
    setTodos(prevTodos => [...prevTodos, { id: Date.now(), text, completed: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(prevTodos => prevTodos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
