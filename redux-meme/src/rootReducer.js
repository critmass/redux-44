

const INITIAL_STATE = {memeArray:[], todoList:[]}

const rootReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_MEME":
            const meme = {
                id:action.id,
                topText:action.topText,
                bottomText:action.bottomText,
                imgURL:action.imgURL
            }
            return {...state, memeArray:[...state.memeArray, meme]}
        case "REMOVE_MEME":
            return{...state, memeArray:state.memeArray.filter(meme => meme.id != action.memeId)}
        case "ADD_TODO":
            const todo = {
                id:action.todoId,
                text:action.todo
            }
            return {...state, todoList:[...state.todoList, todo]}
        case "REMOVE_TODO":
            return{...state, todoList:state.todoList.filter(todo => todo.id != action.todoId)}
        default:
            return state
    }
}

export default rootReducer