const store = Redux.createStore(moodManager)

const happyButton = document.getElementById("happy")
const sadButton = document.getElementById("sad")
const angryButton = document.getElementById("angry")
const runningButton = document.getElementById("running")
const face = document.getElementById("face")

happyButton.addEventListener('click', () => {
    store.dispatch({type:"HAPPY", payload:"^_^"})
})

sadButton.addEventListener('click', () => {
    store.dispatch({ type: "SAD", payload:"(ಥ﹏ಥ)"})
})

angryButton.addEventListener('click', () => {
    store.dispatch({ type: "ANGRY", payload:"ಠ_ಠ"})
})

runningButton.addEventListener('click', () => {
    store.dispatch({ type: "RUNNING", payload:"ᕕ( ಠ‿ಠ)ᕗ"})
})

const renderFace = () => {
    face.innerText = store.getState().face;
}

renderFace()
store.subscribe(renderFace)