import React from "react"
import BlingTitle from "../BlingTitle"
import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"

const Todos = () => {
    return (<div>
        <BlingTitle title="Todo List"/>
        <AddTodoForm/>
        <TodoList/>
    </div>)
}

export default Todos