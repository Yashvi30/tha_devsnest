let addTask = document.getElementById("addTask");
let todo = document.getElementById("todo");
let inputTask = document.getElementById("inputTask");
let del = document.getElementById("delete");
let done = document.getElementById("done");

addTask.addEventListener("click", function () {
  var paragraph = document.createElement("li");

  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = inputTask.value;
  todo.appendChild(paragraph);
  // todo.appendChild(done);
  // todo.appendChild(del);
  inputTask.value = "";
  done.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });
  del.addEventListener("click", function () {
    todo.removeChild(paragraph);
  });
});
