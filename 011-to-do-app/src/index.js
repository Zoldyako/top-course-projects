import "./styles/normalize.css";
import "./index.css";
import "./styles/sidebar.css";
import "./styles/projectSection.css";
import "./styles/modals.css";
import "./styles/buttons.css";
import { setDefaultProjects } from "./scripts/setDefaultProjects.js";
import {
  renderSidebar,
  renderOneProject,
  renderProjects,
} from "./scripts/renderProjects.js";
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

const allProjectsDiv = document.querySelector(".all-projects");
const dueProjectsDiv = document.querySelector(".due-projects");

defaultProjectBtn.addEventListener("click", () => {
  setDefaultProjects();
  renderProjects();
  renderSidebar();
});

newProjectBtn.addEventListener("click", () => {
  modal.showModal();
});

deleteAll.addEventListener("click", () => {
  localStorage.clear();
  renderProjects();
  renderSidebar();
});

submitProject.addEventListener("click", () => {
  createNewProject();
  projectForm.reset();
  renderProjects();
  renderSidebar();
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

renderSidebar();
renderProjects();
