import { useState, useEffect } from 'react';
import AddToDo from './components/AddToDo';
import FilterComponent from './components/FilterComponent';
import ToDoList from './components/ToDoList';
import './App.css'

const App = () => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState('all');

  const toggleTodo = id => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return false;
  })

  return (
    <div className='max-w-3xl mx-auto p-4'>
      <AddToDo setTodos={setTodos} />
      <FilterComponent setFilter={setFilter} />
      <ToDoList 
        todos={filteredTodos} 
        toggleTodo={toggleTodo} 
      />
    </div>
  )
};

export default App
