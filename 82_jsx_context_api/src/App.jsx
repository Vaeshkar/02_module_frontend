import AddToDo from './components/AddToDo';
import FilterComponent from './components/FilterComponent';
import ToDoList from './components/ToDoList';
import { TodoProvider } from './context/TodoContext';  
import './App.css'

export default function App() {

  return (
    <TodoProvider>
      <div className='max-w-3xl mx-auto p-4'>
        <AddToDo />
        <FilterComponent />
        <ToDoList />
      </div>
    </TodoProvider>
  );
};
