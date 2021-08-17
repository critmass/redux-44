import React from "react"
import BlingTitle from "../BlingTitle"
import MemeContainer from "./MemeContainer"
import MemeMakerForm from "./MemeMakerForm"

const MemeMaker = () => {

    return (
        <div>
            <BlingTitle title="Meme Maker!"/>
            <MemeMakerForm/>
            <MemeContainer/>
        </div>
    )
}

export default MemeMaker