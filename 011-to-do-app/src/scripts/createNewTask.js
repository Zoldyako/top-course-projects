import { renderProjects } from "./renderProjects";

export default function createNewTask(event) {
  const button = event.target;
  const project = button.closest(".project");
  const form = document.querySelector(".task-form");
  const id = project.classList.item(1);
  const task = JSON.parse(localStorage.getItem(id));
  const submitTask = document.querySelector("#submit-task");

  submitTask.addEventListener("click", () => {
    const newTask = form.elements["task-desc"].value;
    task.tasks.push(newTask);
    localStorage.setItem(id, JSON.stringify(task));
    renderProjects();
  });
}
