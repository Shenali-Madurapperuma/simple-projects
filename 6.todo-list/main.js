// Getting the elements from the DOM
let form = document.querySelector("form");
let input = document.querySelector("input");
let todos = document.querySelector(".todos");

function getTodo(value) {
  // Creating new elements
  let todo = document.createElement("div");
  let textEl = document.createElement("span");

  // Setting values & Styles
  textEl.textContent = value;

  // Appending elements to the DOM
  todo.appendChild(textEl);

  // Creating a close button
  let closeEl = document.createElement("span");
  closeEl.innerHTML = "&times;";
  closeEl.classList.add("delete");

  // Attaching events
  closeEl.addEventListener("click", function (e) {
    todos.removeChild(todo);
  });

  // Appending the close button to the todo
  todo.appendChild(closeEl);
  todo.classList.add("todo");
  return todo;
}

// Adding an event listener to the form
form.addEventListener("submit", (e) => {
  // preventing the default behavior
  e.preventDefault();

  // Getting the value of the input
  let value = input.value;
  if (!value.trim()) return;
  todos.appendChild(getTodo(value));
  input.value = "";
});
