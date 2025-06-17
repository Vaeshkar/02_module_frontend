import { createContext, useReducer, useEffect } from 'react';

export const TodoContext = createContext();

const initialState = {
  todos: JSON.parse(localStorage.getItem('todos')) || [],
  filter: 'all',
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload] };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state.todos));
  }, [state.todos]);

  const filteredTodos = state.todos.filter(todo => {
    if (state.filter === 'all') return true;
    if (state.filter === 'active') return !todo.completed;
    if (state.filter === 'completed') return todo.completed;
    return false;
  });

  return (
    <TodoContext.Provider value={{ state, dispatch, todos: state.todos, filteredTodos }}>
      {children}
    </TodoContext.Provider>
  );
}