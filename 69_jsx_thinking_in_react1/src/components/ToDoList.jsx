import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, toggleTodo }) => {
    return (
        <ul className="text-left list-none p-0">
            {todos.map(todo => (
                <ToDoItem 
                key={todo.id} 
                todo={todo} 
                toggleTodo={toggleTodo} 
                />
            ))}
        </ul>
    );
};

export default ToDoList;