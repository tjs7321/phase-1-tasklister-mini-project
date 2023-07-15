const newTaskForm = document.getElementById("create-task-form")
const taskList = document.getElementById("tasks")

newTaskForm.onsubmit = (e) => {

  //prevents default action, which would refresh the page on submittal

  e.preventDefault()

  //create a constant that creates a list item

  const li = document.createElement("li")

  //creates delete button

  const delButton = document.createElement('button')

  //creates text in delete button

  delButton.textContent = "X"

  //adds the list item with the user entry

  li.textContent = (newTaskForm['new-task-description'].value)

  //adds delete button to list item

  li.appendChild(delButton)

  //appends the unordered list with our new list item

  taskList.appendChild(li)

  //makes delete button delete the list item

  delButton.onclick = () => li.remove()

}


//Stretch Goals:

//A delete function that will remove tasks from your list


//A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)



//As an additional challenge, implement a sorting functionality that displays the tasks in ascending or descending order based on priority

//An additional input field (e.g. user, duration, date due)

//Ability to edit tasks

//Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM
