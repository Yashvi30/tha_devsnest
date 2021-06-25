let addTask = document.getElementById("addTask");
let todo = document.getElementById("todo");
let inputTask = document.getElementById("inputTask");

addTask.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = inputTask.value;
  todo.appendChild(paragraph);
  inputTask.value = "";
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener("dblclick", function () {
    todo.removeChild(paragraph);
  });
});
