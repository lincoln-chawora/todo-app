import React, {useState} from 'react';
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import {Todo} from "./models/todo.model";

const App = () => {
    const [todoItems, setTodoItems] = useState<Todo[]>( []);

    function todoAddHandler(text: string) {
        setTodoItems(state => [...state, {id: Math.random().toString(), text}])
    }

    function todoRemoveHandler(id: string) {
        setTodoItems(state => state.filter(item => item.id !== id));
    }

    return (
        <div className="App">
            <NewTodo onAddTodo={todoAddHandler} />
            <TodoList items={todoItems} onRemoveTodo={todoRemoveHandler} />
        </div>
  );
}

export default App;
