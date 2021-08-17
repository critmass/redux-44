import React, { useState } from "react"
import InputGroupBundle from "../InputGroupBundle"
import useChangeHandler from "../useChangeHandler"
import { useDispatch } from "react-redux"
import {v4 as uuidv4 } from "uuid"
import { Button } from "reactstrap"

const MemeMakerForm = () => {

    const dispatch = useDispatch()
    const [inputValues, setInputValues] = useState({
        topText:"",
        bottomText:"",
        imgURL:""
    })
    const handleChange = useChangeHandler(setInputValues)

    const handleSubmit = evt => {

        const memeId = uuidv4()

        dispatch({...inputValues, type:"ADD_MEME", id:memeId})
        setInputValues({
            topText: "",
            bottomText: "",
            imgURL: ""
        })
    }

    return (
        <div>
            <InputGroupBundle
                label="Top Text"
                type="text"
                name="topText"
                value={inputValues.topText}
                onChange={handleChange}/>
            <InputGroupBundle
                label="Bottom Text"
                type="text"
                name="bottomText"
                value={inputValues.bottomText}
                onChange={handleChange}/>
            <InputGroupBundle
                label="Image URL"
                type="text"
                name="imgURL"
                value={inputValues.imgURL}
                onChange={handleChange}/>
            <Button onClick={handleSubmit}>Make Meme</Button>

        </div>
    )
}

export default MemeMakerForm