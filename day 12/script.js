let addTask = document.getElementById("addTask");
let todo = document.getElementById("todo");
let inputTask = document.getElementById("inputTask");
let ulelement = document.getElementById("ule");

addTask.addEventListener("click", function () {
  let item = `<li>
  ${inputTask.value}
  <button id="done" onclick="done(this)">
    <img
      src="https://img.icons8.com/material-outlined/24/000000/checked-2--v1.png"
    />
  </button>

  <button id="delete" onclick="del(this)">
    <img
      src="https://img.icons8.com/ios-glyphs/24/000000/delete-forever.png"
    />
  </button>
</li>`;
  ulelement.innerHTML += item;
  inputTask.value = "";
});

done = (x) => {
  x.parentElement.style.textDecoration = "line-through";
};
del = (x) => {
  x.parentElement.innerHTML = "";
};
