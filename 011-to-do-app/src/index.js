import "./styles/normalize.css";
import "./styles/index.css";
import "./styles/buttons.css";
import { setDefaultProjects } from "./scripts/setDefaultProjects.js";
import { renderProjects } from "./scripts/renderProjects.js";
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

renderProjects();
