import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import ToDoItem from './ToDoItem';

export default function ToDoList() {
  const { filteredTodos } = useContext(TodoContext);

  console.log('filteredTodos:', filteredTodos);
  return (
    
    <ul className="text-left list-none p-0">
      {filteredTodos.map(todo => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};