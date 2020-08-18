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

const logTodos = () => {
  console.log(arrayOfTodos)
}

const populateTodos = () => {
  //access the ol tag to insert list items
  var ol = document.getElementById('todo-list')
  // var ol = document.querySelector('ol') does the same

  //loop through array to populate dom with each items title
  for (let index = 0; index < arrayOfTodos.length; index++) {
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