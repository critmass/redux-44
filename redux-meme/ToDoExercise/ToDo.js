//This is the todo exercise for the Springboard Software Engineering bootcamp 
//as completed by Jason Cox on 05-01-2020

//initializing constants
const taskGen = document.querySelector("#taskGenerator")
const taskToDo = taskGen.querySelector('input[name="task"]')
const timeToDo = taskGen.querySelector('input[name="min-time"]')
const toDoList = document.querySelector("#toDoList")
//this pulls nextID from localStorage if it exists, otherwise creates it in localStorage
//nextID is used to allow independent entries to be stored and updated in localStorage without
//risking overlapping individual entries because they share a task or time allotment
let nextID = null
try{
    nextID = JSON.parse(localStorage["nextID"])
}
catch{
    nextID = 1
    localStorage.setItem("nextID", nextID)
}

// intializing existing todoEntries in localStorage
if( localStorage.length > 1 ){
    (function(){

        let newID = null
        let newTodoData = null
        let todoEntry = null
        
        for( let i = 0; localStorage.key(i) ; i++ ){
            newID = localStorage.key(i)
            if( newID != "nextID" ){
                
                newTodoData = JSON.parse( localStorage.getItem( newID ) )
                todoEntry = makeNewToDo( 
                    newID, 
                    newTodoData['task'], 
                    newTodoData['time'], 
                    newTodoData['completed']
                    ) 
                //for whatever reason, localStorage adds new data to the front, so we have to 
                // prepend to get the order to be correct
                toDoList.prepend( todoEntry )
            }
            
        }
    })()
}
else{
    nextID = 1
    localStorage.setItem("nextID", nextID)
}
taskGen.addEventListener("submit", function (formEvent) {
    //stops the default action and adds the new todo to the todo list
    formEvent.preventDefault()
    const newToDo = makeNewToDo( `ID${nextID}`, taskToDo.value, timeToDo.value )
    toDoList.appendChild( newToDo )
    //this updates localStorage with the current todo list
    updateLocalToDos( newToDo )
    incrementNextID()

    taskGen.reset()
})

toDoList.addEventListener("click", function(toDoEvent){

    const lineItem = toDoEvent.target
    if( lineItem.tagName === "BUTTON" ){
        // when the x button is clicked, delete the todo
        localStorage.removeItem(lineItem.parentElement.id)
        lineItem.parentElement.remove()            
    }
    else if( lineItem.tagName === "LI" ){
        //toggle complete when you click on the text of the todo and update localStorage
        lineItem.classList.toggle("completed")
        updateLocalToDos( lineItem )
    }
})


function makeNewToDo( toDoID, task, time, taskDone ){
    //this function creates a new todo and adds it to the todo list

    const removeButton = document.createElement("button")
    removeButton.innerText = "x"

    const newToDo = document.createElement("li")
    
    newToDo.classList.add("todo")
    newToDo.innerText = `${task} (time allotted: ${time} minutes)   `
    newToDo.appendChild(removeButton)
    if( taskDone ){ 
        newToDo.classList.add("completed") 
    }

    //this is data used to update the localStorage
    newToDo.setAttribute("data-task", task)
    newToDo.setAttribute("data-time", time)
    newToDo.setAttribute("data-id", toDoID)

    return newToDo
    
}


function incrementNextID(){
    //increments nextID and updates localStorage
    nextID++
    localStorage.setItem("nextID", JSON.stringify(nextID))
}

function updateLocalToDos( todoEntry ){
    //updates/adds a modified dataset to localStorage
    const tempPlaceholderObject = { ...todoEntry.dataset }
    const tempID = tempPlaceholderObject.id
    if( todoEntry.classList.contains("completed") ){ tempPlaceholderObject["completed"] = true }
    const tempPlaceholderString = JSON.stringify(tempPlaceholderObject)

    localStorage.setItem( tempID , tempPlaceholderString)
}