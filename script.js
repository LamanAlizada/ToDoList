const addOfButton = document.querySelector("#add");
const addInformation = document.querySelector("#tasks");
const newTask = document.querySelector("#newtask input");
const updateOfButton = document.querySelector("#update");

updateOfButton.style.display = "none";

addOfButton.addEventListener("click", () => {
  const taskName = newTask.value.trim();
  if (taskName.length === 0) {
    alert("Enter your task!!!");
  } else {
    const taskItem = document.createElement("li");
    taskItem.className = "task";
    taskItem.innerHTML = `
      <span class="taskname">${taskName}</span>
      <button class="delete"></button>
      <button class="edit">Edit</button>`;

    const span = taskItem.querySelector(".taskname");
    const deleteButton = taskItem.querySelector(".delete");
    const editButton = taskItem.querySelector(".edit");

    deleteButton.addEventListener("click", () => {
      if (confirm("Are you sure you want to delete?")) {
        taskItem.remove();
      }
    });

    let isEditing = false;

    editButton.addEventListener("click", () => {
      if (!isEditing) {
        isEditing = true;
        newTask.value = span.textContent;
        addOfButton.style.display = "none";
        updateOfButton.style.display = "inline";
        span.textContent = "";
      } else {
        newTask.value = span.textContent;
        addOfButton.style.display = "none";
        updateOfButton.style.display = "inline";
        span.textContent = "";
      }
    });

    updateOfButton.addEventListener("click", () => {
      const updatedTaskName = newTask.value.trim();
      if (isEditing && updatedTaskName.length > 0) {
        span.textContent = updatedTaskName;
        newTask.value = "";
        addOfButton.style.display = "inline";
        updateOfButton.style.display = "none";
        isEditing = false;
      }
    });

    newTask.value = "";
    addInformation.appendChild(taskItem);
  }
});
