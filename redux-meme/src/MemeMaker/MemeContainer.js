import React from "react"
import { useSelector } from "react-redux"
import Meme from "./Meme"

const MemeContainer = () => {
    const memes = useSelector( store => store.memeArray)

    const rowsOfMemes = []
    for(let i = 0; i <= memes.length; i = i + 3) {
        rowsOfMemes.push( memes.slice(i, i + 3) )
    }

    return (
        <div className="container">
            {
                rowsOfMemes.map( row => {
                    return (
                        <div
                            key={
                                row.reduce( (idSum, meme) => {
                                    return meme.id + idSum
                                }, "")
                            }
                            className="row"
                        >
                            {row.map(meme => {
                                return (
                                    <div className="col" key={meme.id}>
                                        <Meme
                                            id={meme.id}
                                            topText={meme.topText}
                                            bottomText={meme.bottomText}
                                            imgURL={meme.imgURL}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MemeContainer