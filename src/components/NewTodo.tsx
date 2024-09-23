import React, {useRef} from "react";
import './NewTodo.css'

interface NewTodoProps {
    onAddTodo: (todoText: string) => void
}

const NewTodo: React.FC<NewTodoProps> = ({onAddTodo}) => {
    const textInputRef = useRef<HTMLInputElement>(null);

    function submitHandler(e: React.FormEvent) {
        e.preventDefault();

        const enteredText = textInputRef.current!.value;
        onAddTodo(enteredText)
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="form-control">
                <label htmlFor="todo-text">Todo text</label>
                <input type="text" id="todo-text" ref={textInputRef} />
            </div>
            <button type="submit">Add todo</button>
        </form>
    )
}

export default NewTodo;