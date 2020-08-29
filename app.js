// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
  {
  "userId": 14,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},
{
  "userId": 20,
  "id": 2,
  "title": "delectus aut autem",
  "completed": false
}]
// console.log('userId', arrayOfTodos[0].userId)
const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then( (response) => response.json())
  .then( (json) => arrayOfTodos = json)
}

// function fetchTodos () {
//   fetch('')
//   .then(response => {
//     return.response.json
//   })
// }

const logTodos = () => {
  console.log(arrayOfTodos)
}

const populateTodos = () => {
  //access the ol tag to insert list items
  var ol = document.getElementById('todo-list')
  // var ol = document.querySelector('ol') does the same

  //loop through array to populate dom with each items title
  for (let index = 0; index < arrayOfTodos.length; index++) {
    const complete = arrayOfTodos[index].completed
    console.log('complete', arrayOfTodos[index], complete)
    
    //created list item
    var listItem = document.createElement('li');
    //get array in title
    const elementTitle = arrayOfTodos[index].title
    // created text to go inside the listItem
    var listItemText = document.createTextNode(elementTitle);
    
    //append the text to the listItem
    listItem.appendChild(listItemText);

    //append to <ol> <li> Hello World </li> </ol>
    ol.appendChild(listItem)
  }
}

const populateUserSelection = () => {
  const inputElement = document.getElementsByTagName('input')
  let inputValue = inputElement[0].value
  console.log ('inputValue', inputValue)

  //clear array
  //filter out the userID of the number in the input
  //store the new array 
    todoByUserId = arrayOfTodos.filter(todo => {
    console.log('todo.userId:', todo.userId)
    if (todo.userId == inputValue){
      return todo 
    }
  })

let filteredTodos = arrayOfTodos.filter(todo => todo.userId === parseInt(inputValue))
    console.log('filteredTodos', filteredTodos)
  

const removeTodos = () => {
  //remove todos
  //show todos that are either complete 
  var isComplete = arrayOfTodos[index].completed;
    for (let index = 0; index < 20; index++) {
      if (isComplete){
        (listItem.style.backgroundColor = "#66BB55")
    }
    else{
      (listItem.style.backgroundColor = "#FF0120")
    }
  } 
}