window.onload = () => {
  const form = document.getElementById("form");
  form.onsubmit = function (e) {
    e.preventDefault();
  };
};

const taskInput = document.querySelector("#taskName");
const submit = document.querySelector("#submit-new-task");
const list = document.querySelector("#list-1");

submit.addEventListener("click", addTask);
list.addEventListener("click", deleteTask);

function addTask(e) {
  if (taskInput.value != "") {
    const li = document.createElement("li");
    li.className = "list-item";
    li.textContent = taskInput.value;
    list.appendChild(li);
    taskInput.value = "";
  } else {
    alert("Dai un nome alla task!");
  }
}

function deleteTask(e) {
  e.target.remove();
}

list.addEventListener("click", function (e) {
  if (e.target.tagName === li) {
    e.target;
  }
});
