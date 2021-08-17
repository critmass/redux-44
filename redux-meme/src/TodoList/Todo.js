import React from "react"
import { useDispatch } from "react-redux"

const Todo = ({id, entry}) => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch({type:"REMOVE_TODO", todoId:id})
    }

    return (<li onClick={handleClick}>
        {entry}
    </li>)
}

export default Todo