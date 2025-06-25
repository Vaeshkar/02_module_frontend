import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export default function ToDoItem({ todo }) {
    const { dispatch } = useContext(TodoContext);

    return (
        <li>
            <label>
                <input
                    type="checkbox"
                    className="mr-2"
                    checked={todo.completed}
                    onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
                />
                <span className={todo.completed ? 'line-through' : ''}>
                    {todo.text}
                </span>
            </label>
        </li>
    );
};