import React from "react"
import { useSelector } from "react-redux"
import Todo from "./Todo"

const TodoList = () => {
    const todos = useSelector(store => store.todoList)
    return (
        <ol>
            {todos.map( todo =>  (
                            <Todo
                                key={todo.id}
                                id={todo.id}
                                entry={todo.text}/>
                            ) )}
        </ol>
    )
}

export default TodoList