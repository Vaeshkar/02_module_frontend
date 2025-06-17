import { useState } from 'react';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
 
export default function AddToDo() {
  const [newTodo, setNewTodo] = useState('');
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = e => {
    e.preventDefault();
    if (!newTodo.trim()) return alert('Please enter a to-do item');
    dispatch({ type: 'ADD_TODO', payload: { id: Date.now(), text: newTodo, completed: false } });
    setNewTodo('');
  };
 
  return (
    <form onSubmit={handleSubmit} className='mb-4 flex'>
      <input
        type='text'
        name='todo'
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
        placeholder='Add a new to-do'
        className='flex-1 border rounded px-2 py-1 mr-2'
      />
      <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>
        Add
      </button>
    </form>
  );
};