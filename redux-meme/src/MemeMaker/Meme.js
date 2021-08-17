import React from "react"
import { useDispatch } from "react-redux"
import "./MemeGen.css"

const Meme = ({topText, bottomText, imgURL, id}) => {

    const dispatch = useDispatch()

    const handleClick = e => {
        dispatch({
            type:"REMOVE_MEME",
            memeId:id
        })
    }

    return (
        <div className="Meme" onClick={handleClick}>
            <span className="Meme-upper-text Meme-text">
                {topText}
            </span>
            <img src={imgURL} className="Meme-img"/>
            <span className="Meme-lower-text Meme-text">
                {bottomText}
            </span>
        </div>
    )
}

export default Meme