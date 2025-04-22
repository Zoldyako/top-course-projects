import "./styles/normalize.css";
import "./styles/index.css";
import "./styles/modals.css";
import "./styles/buttons.css";
import { setDefaultProjects } from "./scripts/setDefaultProjects.js";
import { renderOneProject, renderProjects } from "./scripts/renderProjects.js";
import { createNewProject } from "./scripts/createNewProject.js";

const projectModal = document.querySelector(".new-project-btn");
const taskModal = document.querySelector(".new-task-btn");
const submitProject = document.querySelector("#submit-project");
const newProjectBtn = document.querySelector(".new-project");
const deleteAll = document.querySelector(".clear-projects");
const closeModalProjectBtn = document.querySelector("#close-modal-project");
const closeModalTaskBtn = document.querySelector("#close-modal-task");
const projectForm = document.querySelector(".project-form");
const taskForm = document.querySelector(".task-form");
const defaultProjectBtn = document.querySelector(".default-projects");
const sidebarProjectsDiv = document.querySelector(".sb-projects-list");
const allProjectsDiv = document.querySelector(".all-projects");
const dueProjectsDiv = document.querySelector(".due-projects");

defaultProjectBtn.addEventListener("click", () => {
  setDefaultProjects();
  renderProjects();
});

newProjectBtn.addEventListener("click", () => {
  modal.showModal();
});

deleteAll.addEventListener("click", () => {
  localStorage.clear();
  renderProjects();
});

submitProject.addEventListener("click", () => {
  createNewProject();
  projectForm.reset();
  renderProjects();
});

closeModalProjectBtn.addEventListener("click", () => {
  projectForm.reset();
  projectModal.close();
});

closeModalTaskBtn.addEventListener("click", () => {
  taskForm.reset();
  taskModal.close();
});

allProjectsDiv.addEventListener("click", () => {
  renderProjects();
});

for (let i = 0; i < localStorage.length; i++) {
  const project = JSON.parse(localStorage.getItem(i));
  const div = document.createElement("div");
  const button = document.createElement("button");

  div.classList.add(`project-${project.id}`, i);
  button.innerText = project.title;
  button.addEventListener("click", () => {
    const projectId = i;
    renderOneProject(projectId);
  });

  div.appendChild(button);
  sidebarProjectsDiv.appendChild(div);
}

renderProjects();
