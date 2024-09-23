import React from "react";
import './TodoList.css'

interface TodoListProps {
    items: {id: string, text: string}[];
    onRemoveTodo: (id: string) => void
}

const TodoList: React.FC<TodoListProps> = ({items, onRemoveTodo}) => {
    return (
        <ul>
            {items.map(td =>
                <li key={td.id}>
                    <span>{td.text}</span>
                    <button onClick={() => onRemoveTodo(td.id)}>Delete</button>
                </li>
            )}
        </ul>
    )
}

export default TodoList;