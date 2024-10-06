document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
// your code here
const form = document.querySelector('#create-task-form')
const submitButton = document.querySelector("#create-task-form input[type='Submit']")
console.log(submitButton)

//submitButton.addEventListener('click', createNewTask)


const createNewTask = (e) => {
  e.preventDefault()
  const taskText = e.target.previousElementSibling.value
  if(taskText !== ''){
    const li = document.createElement('li')
    const btn = document.createElement('button')

    btn.textContent = 'Delete'

    btn.addEventListener('click', handleDeleteTask)
    li.textContent = `${taskText} `
    li.appendChild(btn)
    document.querySelector("#tasks").appendChild(li)
    form.reset()
  }
}

const handleDeleteTask = (e) => {
  e.target.parentNode.remove()
}

submitButton.addEventListener('click', createNewTask)

/*const createNewTask = (event) => {
  e.prevent()*/