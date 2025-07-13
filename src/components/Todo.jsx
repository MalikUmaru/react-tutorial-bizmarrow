import React, {useState, useEffect, useRef} from "react";

//define the todo list component
const TodoListApp =()=>{
    const TodoList = [
        {
            todo: "make dinner",
            dueDate: "05/22/2025"
        },
        {
            todo: "do coding",
            dueDate: "06/12/2025"
        },
        {
            todo: "do gym",
            dueDate: "07/20/2025"
        },
    ]
    const today = new Date().toISOString().split('T')[0];
    const [TodoInput, setTodoInput] = useState("");
    const [dateInput, setDateInput] = useState(today);
    const [todoList, setTodoList] = useState(TodoList);
    const todoInputRef = useRef(null);
    const dateInputRef = useRef(null);

    const handleTodoChange =(e)=>{
        setTodoInput(e.target.value)
    }
    const handleDateChange =(e)=>{
        setDateInput(e.target.value)
    }

    const addTodo =()=>{
        let todo = todoInputRef.current.value;
        let dueDate = dateInputRef.current.value;

        TodoList.push(
            {
                todo,
                dueDate
            }
        );

        console.log(TodoList);
        
        setTodoInput("");
        setDateInput(today);
        setTodoList(TodoList);

    }

    return(
        <div>        <input type="text" 
        placeholder="write something..."
        value={TodoInput}
        name=""
        onChange={handleTodoChange}
        ref={todoInputRef}
        />
        <input type="date" value={dateInput}
        onChange={handleDateChange}
        ref={dateInputRef}
        />
        <button onClick={addTodo}>Add Todo</button>
        {TodoList.map(item=>(
            <ul>
                <li>{item.todo}.{item.dueDate}</li>
            </ul>
        ))}
        </div>

    )

}

export default TodoListApp;