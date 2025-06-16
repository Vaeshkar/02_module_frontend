const ToDoItem = ({ todo, toggleTodo }) => {
    return (
        <li>
            <label>
                <input type="checkbox" 
                className="mr-2" 
                defaultChecked={todo.completed} 
                onChange={() => toggleTodo(todo.id)} />
                <span className={todo.completed ? 'line-through' : ''}>
                    {todo.text}
                </span>
            </label>
        </li>
    );
};

export default ToDoItem;