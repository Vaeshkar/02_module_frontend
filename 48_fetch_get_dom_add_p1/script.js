/* For my first step:
What I have os the fetch running to grab one. I can set my patch to /todos/. Then before my fetch I can make a fetch function and put that into an forEach() to grab all 200 totos. 

I think with .notation I can grab the items inside the object: .userID, .id, .title and .completed

For my second step: 
Looking at the HTML there is an id="todo-list" I can grab that in my js file, as you wrote before. Easy

For my third step:
We add a <li> item indeed. We will make an function out of this task: addTodo() and do the following steps:
- const with element and createElement for the page
- set the content with .textContent
- add the classes with .classlist.add()
- add the item with .appendChild() into the "todo-list"

For my fourth step:
We should add styles for each todo:
- if completed do a strikethrough line
- else if not completed we do a normal text
- below each <li> item we add a small grey border-bottom line to give it distance.  */

const path = 'https://jsonplaceholder.typicode.com/todos/';

fetch(path)
.then((response) => {
    if (!response.ok) throw new Error('Something when wrong');
    return response.json();
})
.then((json) => {
    json.forEach((todo) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = todo.title;
        listItem.classList.add(
            'text-1xl', 
            'border-b-2', 
            'border-gray-800', 
            'border-opacity-10', 
            'py-2'
        );
        if (todo.completed) {
            listItem.classList.add('line-through');
        }

        list.appendChild(listItem);
    })
    console.log(json);
})
.catch(console.error);

// tag selectors
const list = document.querySelector("#todo-list");
const listItem = document.createElement('li');
