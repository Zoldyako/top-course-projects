import { renderProjects } from "./renderProjects";

export default function deleteTask(project, target) {
  const taskToDelete = target.parentNode.classList.item(1);
  let task = localStorage.getItem(project.id);

  task = JSON.parse(task);
  task.tasks.splice(taskToDelete, 1);
  task = JSON.stringify(task);

  localStorage.setItem(project.id, task);
  renderProjects();
}
