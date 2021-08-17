import React, { useState } from "react"
import InputGroupBundle from "../InputGroupBundle"
import { Button } from "reactstrap"
import { useDispatch } from "react-redux"
import useChangeHandler from "../useChangeHandler"
import { v4 as uuidv4 } from "uuid"

const AddTodoForm = () => {

    const dispatch = useDispatch()
    const [inputValues, setInputValues] = useState({todo:""})
    const handleChange = useChangeHandler(setInputValues)

    const handleSubmit = evt => {
        dispatch({...inputValues, type:"ADD_TODO", todoId:uuidv4()})
        setInputValues({todo:""})
    }

    return (<div>
        <InputGroupBundle
            label="Todo"
            type="text"
            name="todo"
            value={inputValues.todo}
            onChange={handleChange}/>
        <Button onClick={handleSubmit}>Add Todo</Button>
    </div>)
}

export default AddTodoForm