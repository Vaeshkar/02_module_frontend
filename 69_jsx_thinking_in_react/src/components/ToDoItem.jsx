const ToDoItem = ({ todo }) => {
    return (
        <li>
            <label>
                <input type="checkbox" defaultChecked={todo.completed} className="mr-2" />
                {todo.text}
            </label>
        </li>
    );
};

export default ToDoItem;