const userInput = document.getElementById("userInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

addBtn.addEventListener("click", () => {
  let task = userInput.value;

  if (task === "") {
    alert("Please add one task to do!!!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = task;
    list.appendChild(li);
    let span = document.createElement("span");
    li.appendChild(span);
  }
  userInput.value = "";
  saveData();
});

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

const saveData = () => {
  localStorage.setItem("data", list.innerHTML);
};

const displaySavedData = () => {
  list.innerHTML = localStorage.getItem("data");
};
displaySavedData();
